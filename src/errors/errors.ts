export function InvalidInputError(e: any) {
  return {
    "error": true,
    "message": "Invalid input",
    attributes: e
  }
}

export function UserExistsError(e: any) {
  return {
    "error": true,
    "message": "User already exists",
    attributes: e
  }
}

export function DBError(e: any) {
  return {
    "error": true,
    "message": "Database error",
    attributes: e
  }
}

export function UnauthorizedError() {
  return {
    error: true,
    message: "Unauthorized"
  }
}