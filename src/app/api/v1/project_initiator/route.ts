import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {DBError, InvalidInputError} from "@/errors/errors";
import {signup} from "@/actions/auth";
import {project_initiatorTable} from "@/drizzle/schema";
import getDB from "@/helpers/db";

export async function POST(req: NextRequest) {
  const project_initAddSchema = z.object({
    user: z.object({
      username: z.string(),
      email: z.string().email(),
      password: z.string(),
      role: z.literal("project_initiator")
    }).strict(),
    project_initiator: z.object({
      name: z.string()
    }).strict()
  }).strict()
  try {
    const db = await getDB()
    let reqBody = await req.json()
    reqBody["user"]["role"] = "project_initiator"
    console.log(reqBody)
    const validatedProjectInitiatorObject = project_initAddSchema.parse(reqBody)

    try {
      await db.transaction(async (tx) => {
        let userObj = await signup(validatedProjectInitiatorObject.user, tx)
        console.log(userObj)
        //@ts-ignore
        if (userObj.error) throw userObj

        await tx.insert(project_initiatorTable).values({
          //@ts-ignore
          id: userObj.user.id,
          name: validatedProjectInitiatorObject.project_initiator.name,
        })
      })
      return NextResponse.json({
        error: false,
        message: "Project Initiator Added Successfully"
      })
    } catch (e) {
      console.log(e)
      return NextResponse.json(DBError(e))
    }
  } catch (e) {
    return NextResponse.json(InvalidInputError(e))
  }
}