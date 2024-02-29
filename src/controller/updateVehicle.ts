import { Request, Response } from "express"
import { users } from "../utils/inMemoryStore"

// Endpoint to update a vehicle for the authenticated user
export async function updateVehicle(req: Request, res: Response) {
  try {
    const username = req.body.username
    const { make, model, year } = req.body
    const id = req.params.id

    const user = users[username]

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const vehicleIndex =
      (user.vehicles &&
        user.vehicles.findIndex((vehicle) => vehicle.id === id)) ||
      -1

    if (vehicleIndex === -1) {
      return res.status(400).json({ error: "Vehicle not found" })
    }

    if (!make && !model && !year) {
      return res.status(400).json({
        error: "At least one of make, model, or year must be provided",
      })
    }
    if (make && user?.vehicles) user.vehicles[vehicleIndex].make = make

    if (model && user?.vehicles) user.vehicles[vehicleIndex].model = model

    if (year && user?.vehicles) user.vehicles[vehicleIndex].year = year

    res.json({
      userName: user.username,
      userVehicles: user.vehicles,
      message: "Vehicle data updated successfully",
    })
  } catch (err) {
    return res.status(500).send("Server error")
  }
}
