import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {DBError, InvalidInputError, UnauthorizedError} from "@/errors/errors";
import getDB from "@/helpers/db";
import {business_unitTable, departmentTable, divisionTable, locationTable} from "@/drizzle/schema";
import {cookies} from "next/headers";
import {Payload} from "@/types/auth";
import {verifyJWT} from "@/actions/auth";

export async function POST(req: NextRequest) {
  const db = await getDB()

  const token = cookies().get("access_token")?.value

  if (!token) {
    return NextResponse.json(UnauthorizedError())
  }

  const payload: Payload = await verifyJWT(token)

  if (payload.role != "HR") {
    return NextResponse.json(UnauthorizedError())
  }

  const companyDataSchema = z.object({
    department: z.array(z.object({
      name: z.string()
    })).optional(),
    division: z.array(z.object({
      name: z.string()
    })).optional(),
    business_unit: z.array(z.object({
      name: z.string()
    })).optional(),
    location: z.array(z.object({
      name: z.string()
    })).optional(),
  }).strict()

  try {
    const validatedCompanyObject = companyDataSchema.parse(await req.json())
    console.log(validatedCompanyObject)
    try {
      const promiseObject: any[] = []
      Object.keys(validatedCompanyObject).map(async (data) => {
        if (data === "department" && validatedCompanyObject[data]) {
          //@ts-ignore
          promiseObject.push(db.insert(departmentTable).values(validatedCompanyObject[data]))
        }
        if (data === "division" && validatedCompanyObject[data]) {
          //@ts-ignore
          promiseObject.push(db.insert(divisionTable).values(validatedCompanyObject[data]))
        }
        if (data === "business_unit" && validatedCompanyObject[data]) {
          //@ts-ignore
          promiseObject.push(db.insert(business_unitTable).values(validatedCompanyObject[data]))
        }
        if (data === "location" && validatedCompanyObject[data]) {
          //@ts-ignore
          promiseObject.push(db.insert(locationTable).values(validatedCompanyObject[data]))
        }
      })

      await Promise.all(promiseObject)

      return NextResponse.json({
        error: false,
        message: "Company Data Added Successfully"
      })
    } catch (e) {
      return NextResponse.json(DBError(e))
    }
  } catch (e) {
    return NextResponse.json(InvalidInputError(e))
  }
}