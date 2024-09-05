export interface Payload {
  id: string,
  role: "HR" | "employee" | "project_initiator",
  email: string,
  username: string
}