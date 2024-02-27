import { Request, Response } from "express"
import { users } from "./../utils/inMemoryStore"

// Endpoint to create a new user
export async function addUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" })
    }
    if (users[username]) {
      return res.status(400).json({ error: "Username already exists" })
    }
    users[username] = { username, password, vehicles: [] }
    res
      .status(201)
      .json({ userName: username, message: "User created successfully" })
  } catch (err) {
    return res.status(500).send("Server error")
  }
}
