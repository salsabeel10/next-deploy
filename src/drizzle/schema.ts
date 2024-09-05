import {date, decimal, pgTable, text, uuid,} from "drizzle-orm/pg-core"
import {relations} from "drizzle-orm";

export const userTable = pgTable("user", {
  id: uuid("id")
    .primaryKey().defaultRandom(),
  username: text("name").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  image: text("image"),
})

export const userRelation = relations(userTable, ({one}) => ({
  role: one(roleTable, {
    fields: [userTable.id],
    references: [roleTable.id],
    relationName: "userRoleRelation",
  }),
  HR: one(HRTable, {
    fields: [userTable.id],
    references: [HRTable.id],
    relationName: "userHRRelation",
  }),
  project_initiator: one(project_initiatorTable, {
    fields: [userTable.id],
    references: [project_initiatorTable.id],
    relationName: "userProjectInitiatorRelation",
  }),
}))

export const roleTable = pgTable("role", {
  id: uuid("id").references(() => userTable.id, {onDelete: "cascade"}).notNull().primaryKey(),
  name: text("name", {
    enum: ["HR", "employee", "project_initiator"],
  }).notNull(),
})

export const roleRelation = relations(roleTable, ({one}) => ({
  user: one(userTable, {
    fields: [roleTable.id],
    references: [userTable.id],
    relationName: "roleUserRelation",
  }),
}))

export const HRTable = pgTable("HR", {
  id: uuid("id").references(() => userTable.id, {onDelete: "cascade"}).notNull().primaryKey(),
  name: text("name").notNull(),
})

export const HRRelation = relations(HRTable, ({one}) => ({
  user: one(userTable, {
    fields: [HRTable.id],
    references: [userTable.id],
    relationName: "HRUserRelation",
  }),
}))

export const departmentTable = pgTable("department", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull()
})

export const departmentRelation = relations(departmentTable, ({many}) => ({
  employee: many(employeeTable, {
      relationName: "departmentEmployeeRelation",
    }
  )
}))

export const divisionTable = pgTable("division", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull()
})

export const divisionRelation = relations(divisionTable, ({many}) => ({
  employee: many(employeeTable, {
      relationName: "divisionEmployeeRelation",
    }
  )
}))

export const business_unitTable = pgTable("business_unit", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull()
})

export const business_unitRelation = relations(business_unitTable, ({many}) => ({
  employee: many(employeeTable, {
      relationName: "businessUnitEmployeeRelation",
    }
  )
}))

export const locationTable = pgTable("location", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull()
})

export const locationRelation = relations(locationTable, ({many}) => ({
  employee: many(employeeTable, {
      relationName: "locationEmployeeRelation",
    }
  )
}))

export const employeeTable = pgTable("employee", {
  id: uuid("id").references(() => userTable.id, {onDelete: "cascade"}).notNull().primaryKey(),
  employee_id: text("employee_id").unique(),
  name: text("name"),
  start_date: date("start_date", {mode: "date"}),
  designation: text("designation"),
  salary: decimal("salary", {precision: 10, scale: 2}),
  div_id: uuid("div_id").references(() => divisionTable.id, {onDelete: "set null"}),
  dept_id: uuid("dept_id").references(() => departmentTable.id, {onDelete: "set null"}),
  business_unit_id: uuid("business_unit_id").references(() => business_unitTable.id, {onDelete: "set null"}),
  location_id: uuid("location_id").references(() => locationTable.id, {onDelete: "set null"})
})

export const employeeRelation = relations(employeeTable, ({one}) => ({
  user: one(userTable, {
    fields: [employeeTable.id],
    references: [userTable.id],
    relationName: "employeeUserRelation",
  }),
  division: one(divisionTable, {
    fields: [employeeTable.div_id],
    references: [divisionTable.id],
    relationName: "employeeDivisionRelation",
  }),
  department: one(departmentTable, {
    fields: [employeeTable.dept_id],
    references: [departmentTable.id],
    relationName: "employeeDepartmentRelation",
  }),
  business_unit: one(business_unitTable, {
    fields: [employeeTable.business_unit_id],
    references: [business_unitTable.id],
    relationName: "employeeBusinessUnitRelation",
  }),
  location: one(locationTable, {
    fields: [employeeTable.location_id],
    references: [locationTable.id],
    relationName: "employeeLocationRelation",
  }),
}))

export const project_initiatorTable = pgTable("project_initiator", {
  id: uuid("id").references(() => userTable.id, {onDelete: "cascade"}).notNull().primaryKey(),
  name: text("name").notNull(),
})

export const project_initiatorRelation = relations(project_initiatorTable, ({one}) => ({
  user: one(userTable, {
    fields: [project_initiatorTable.id],
    references: [userTable.id],
    relationName: "projectInitiatorUserRelation",
  })
}))

export const projectTable = pgTable("project", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  location_id: uuid("location_id").references(() => locationTable.id, {onDelete: "set null"}),
  business_unit_id: uuid("business_unit_id").references(() => business_unitTable.id, {onDelete: "set null"}),
  div_id: uuid("div_id").references(() => divisionTable.id, {onDelete: "set null"}),
  year: date("year", {mode: "date"}),
  number: text("number").notNull(),
  project_initiator_id: uuid("project_initiator_id").references(() => project_initiatorTable.id, {onDelete: "set null"}),
})
