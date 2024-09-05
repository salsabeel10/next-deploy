import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import getDB from "@/helpers/db"
import {verifyJWT} from "@/actions/auth";
import {cookies} from "next/headers";
import {DBError, InvalidInputError, UnauthorizedError} from "@/errors/errors";
import {projectTable} from "@/drizzle/schema";

export async function POST(req: NextRequest) {
  const projectSchema = z.object({
    name: z.string(),
    location_id: z.string(),
    business_unit_id: z.string(),
    div_id: z.string(),
    year: z.date(),
    number: z.string(),
    project_initiator_id: z.string()
  }).strict()
  const token = cookies().get("access_token")?.value

  if (!token) {
    return NextResponse.json(UnauthorizedError())
  }

  const payload = await verifyJWT(token)

  if (payload.role != "project_initiator") {
    return NextResponse.json(UnauthorizedError())
  }

  let reqBody = await req.json()
  reqBody["year"] = new Date(reqBody["year"])
  reqBody["project_initiator_id"] = payload.id
  try {
    const db = await getDB()
    const validatedProjectObject = projectSchema.parse(reqBody)

    try {
      await db.insert(projectTable).values(validatedProjectObject)
      return NextResponse.json({
        error: false,
        message: "Project Added Successfully"
      })
    } catch (e) {
      return NextResponse.json(DBError(e))
    }
  } catch (e) {
    return NextResponse.json(InvalidInputError(e))
  }
}