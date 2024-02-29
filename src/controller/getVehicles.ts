import { Request, Response } from "express"
import { users } from "../utils/inMemoryStore"
import { serverErrorMsg, userNotFoundMsg } from "../utils/serverMsg"

// Endpoint to getvehicles for the authenticated user
export async function getVehicles(req: Request, res: Response) {
  try {
    const username = req.body.username

    const user = users[username]

    if (!user) {
      return res.status(404).json(userNotFoundMsg)
    }

    res
      .status(201)
      .json({ userName: user.username, userVehicles: user.vehicles })
  } catch (err) {
    return res.status(500).send(serverErrorMsg)
  }
}
