import {NextRequest, NextResponse} from "next/server";
import getDB from "@/helpers/db";
import {cookies} from "next/headers";
import {DBError, InvalidInputError, UnauthorizedError} from "@/errors/errors";
import {Payload} from "@/types/auth";
import {signup, verifyJWT} from "@/actions/auth";
import {z} from "zod";
import {employeeTable} from "@/drizzle/schema";

export async function POST(req: NextRequest) {
  try {
    const db = await getDB()

    const token = cookies().get("access_token")?.value

    if (!token) {
      return NextResponse.json(UnauthorizedError())
    }

    const payload: Payload = await verifyJWT(token)

    if (payload.role != "HR") {
      return NextResponse.json(UnauthorizedError())
    }

    const employeeAddSchema = z.object({
      user: z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
        role: z.literal("employee")
      }).strict(),
      employee: z.object({
        employee_id: z.string(),
        name: z.string(),
        start_date: z.date(),
        designation: z.string(),
        salary: z.number(),
        div_id: z.string(),
        dept_id: z.string(),
        business_unit_id: z.string(),
        location_id: z.string()
      }).strict()
    }).strict()

    let reqBody = await req.json()
    reqBody["employee"]["start_date"] = new Date(reqBody["employee"]["start_date"])
    reqBody["user"]["role"] = "employee"

    try {
      const validatedEmployeeObject = employeeAddSchema.parse(reqBody)

      try {
        await db.transaction(async (tx) => {
          let userObj = await signup(validatedEmployeeObject.user, tx)
          console.log(userObj)
          //@ts-ignore
          if (userObj.error) throw new Error("User creation failed")

          await tx.insert(employeeTable).values({
            //@ts-ignore
            id: userObj.user.id,
            name: validatedEmployeeObject.employee.name,
            employee_id: validatedEmployeeObject.employee.employee_id,
            start_date: validatedEmployeeObject.employee.start_date,
            designation: validatedEmployeeObject.employee.designation,
            salary: validatedEmployeeObject.employee.salary.toString(),
            div_id: validatedEmployeeObject.employee.div_id,
            dept_id: validatedEmployeeObject.employee.dept_id,
            business_unit_id: validatedEmployeeObject.employee.business_unit_id,
            location_id: validatedEmployeeObject.employee.location_id
          })
        })
        return NextResponse.json({
          error: false,
          message: "Employee Added Successfully"
        })
      } catch (e) {
        console.log(e)
        return NextResponse.json(DBError(e))
      }
    } catch (e) {
      return NextResponse.json(InvalidInputError(e))
    }
  } catch (e) {
    console.log(e)
    return NextResponse.json(UnauthorizedError())
  }
}