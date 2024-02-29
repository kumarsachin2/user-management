import jwt from "jsonwebtoken"
import { config } from "../config"

// Function to generate JWT token

export function generateToken(username: string) {
  return jwt.sign({ username }, config.secret, { expiresIn: "1h" })
}
