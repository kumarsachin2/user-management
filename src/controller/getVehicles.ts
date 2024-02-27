import { Request, Response } from "express"
import { users } from "../utils/inMemoryStore"

// Endpoint to getvehicles for the authenticated user
export async function getVehicles(req: Request, res: Response) {
  try {
    const username = req.body.username

    const user = users[username]

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    res.json({ userName: user.username, userVehicle: user.vehicles })
  } catch (err) {
    return res.status(500).send("Server error")
  }
}
