import { Request, Response } from "express"
import { users } from "../utils/inMemoryStore"
import { generateRandomString } from "../utils/generateRandomString"
import { VehicleDataType } from "../models/userVehicleTypes"

// Endpoint to save a vehicle for the authenticated user
export async function addVehicle(req: Request, res: Response) {
  try {
    const username = req.body.username

    const user = users[username]

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    const { make, model, year } = req.body
    if (!make || !model || !year) {
      return res
        .status(400)
        .json({ error: "Make, model, and year are required" })
    }

    const id = generateRandomString(8)

    const vehicle: VehicleDataType = { id: id, make, model, year }

    user?.vehicles?.push(vehicle)

    res.status(201).json({
      userName: username,
      userVehicles: user.vehicles,
      message: "Vehicle saved successfully",
    })
  } catch (err) {
    return res.status(500).send("Server error")
  }
}
