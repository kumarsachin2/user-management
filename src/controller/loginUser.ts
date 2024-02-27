import { Request, Response } from "express"
import { users } from "./../utils/inMemoryStore"
import { generateToken } from "../utils/generateToken"

export async function loginUser(req: Request, res: Response) {
  try {
    const { username, password } = req.body

    const user = users[username]
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" })
    }

    const token = generateToken(username)
    res.json({ username: user.username, token: token })
  } catch (err) {
    return res.status(500).send("Server error")
  }
}
