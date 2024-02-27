import jwt from "jsonwebtoken"

// Function to generate JWT token
const secretKey = "your_secret_key" //ToDo
export function generateToken(username: string) {
  return jwt.sign({ username }, secretKey, { expiresIn: "1h" })
}
