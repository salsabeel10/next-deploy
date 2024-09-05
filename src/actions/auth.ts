"use server"

import {z} from "zod"
import {compare, hash} from "bcryptjs";
import getDB from "@/helpers/db";
import {roleTable, userTable} from "@/drizzle/schema";
import {DBError, InvalidInputError, UnauthorizedError, UserExistsError} from "@/errors/errors";
import {jwtVerify, SignJWT} from "jose"
import process from "node:process";
import {Payload} from "@/types/auth";
import {eq} from "drizzle-orm";
import {cookies} from "next/headers";
import {PgTransaction} from "drizzle-orm/pg-core";

export async function verifyJWT(jwt: string) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  try {
    const {payload}: { payload: Payload } = await jwtVerify(
      jwt,
      secret,
    );
    return payload;
  } catch (e: any) {
    throw new Error(e.toString());
  }
}

export async function addUser(tx: PgTransaction<any, any, any>, validatedAuthObj: {
  username: string,
  email: string,
  password: string,
  role: "employee" | "project_initiator"
}, hashedPass: string) {
  let userID = await tx.insert(userTable).values({
    username: validatedAuthObj.username,
    email: validatedAuthObj.email,
    password: hashedPass,
  }).returning({id: userTable.id})
  await tx.insert(roleTable).values({
    id: userID[0].id,
    name: validatedAuthObj.role
  })
  return userID
}

export async function signJWT(payload: any) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  const alg = "HS256";

  return await new SignJWT(payload)
    .setProtectedHeader({alg})
    .setIssuedAt()
    .setExpirationTime("4w")
    .sign(secret);
}

export async function signup(authObject: {
  username: string,
  email: string,
  password: string,
  role: "project_initiator" | "employee"
}, tx: PgTransaction<any, any, any>) {
  const signUpSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.union([z.literal("project_initiator"), z.literal("employee")])
  }).strict()

  try {
    const validatedAuthObj = signUpSchema.parse(authObject)
    const token = cookies().get("access_token")?.value

    if (!token) {
      return {
        error: true,
        message: "Unauthorized"
      }
    }

    const payload: Payload = await verifyJWT(token)

    if (payload.role != "HR") return UnauthorizedError()

    const hashedPass = await hash(validatedAuthObj.password, 10)
    try {
      let id = await addUser(tx, validatedAuthObj, hashedPass)
      return {
        error: false,
        "message": "Sign Up Successful",
        user: {
          id: id[0].id,
        }
      }
    } catch (e) {
      console.log(e)
      return UserExistsError(e)
    }
  } catch (e) {
    console.log(e)
    return InvalidInputError(e)
  }
}

export async function login(validatedAuthObj: {
  password: string,
  username?: string | undefined,
  email?: string | undefined
}) {
  const db = await getDB()

  try {
    let userObj = await db.query.userTable.findFirst({
      where: validatedAuthObj.username ? eq(userTable.username, validatedAuthObj.username) : validatedAuthObj.email ? eq(userTable.email, validatedAuthObj.email) : undefined,
      with: {
        role: true,
      }
    })

    if (!userObj) {
      return {
        error: true,
        message: "User not found",
      }
    }

    const valid = await compare(validatedAuthObj.password, userObj.password)

    if (!valid) {
      return {
        error: true,
        message: "Invalid password",
      }
    }

    const payload = {
      id: userObj.id,
      role: userObj.role.name,
      email: userObj.email,
      username: userObj.username
    }

    const token = await signJWT(payload)

    console.log(token)

    cookies().set("access_token", token)

    return {
      error: false,
      message: "Login Successful",
      user: payload,
    }
  } catch (e) {
    console.log(e)
    return DBError(e)
  }
}
