import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

// Middleware to verify JWT token
const secretKey = "your_secret_key" //ToDo
export function verifyUserToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing token" })
  }
  jwt.verify(token, secretKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" })
    }
    req.body.username = decoded.username
    next()
  })
}
