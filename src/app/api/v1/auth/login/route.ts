import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {InvalidInputError} from "@/errors/errors";
import {login} from "@/actions/auth";

export async function POST(req: NextRequest) {
  const loginSchema = z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string(),
  }).strict()

  try {
    const validatedAuthObj = loginSchema.parse(await req.json())
    return NextResponse.json(await login(validatedAuthObj))

  } catch (e) {
    console.log(e)
    return NextResponse.json(InvalidInputError(e))
  }
}