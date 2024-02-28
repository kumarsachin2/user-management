import express from "express"
import { addVehicle } from "../controller/addVehicle"
import { verifyUserToken } from "../middleware/verifyUserToken"
import { getVehicles } from "../controller/getVehicles"
import { updateVehicle } from "../controller/updateVehicle"

const vehicleRoutes = express.Router()

vehicleRoutes
  .post("/add", verifyUserToken, addVehicle)
  .get("/", verifyUserToken, getVehicles)
  .put("/:id", verifyUserToken, updateVehicle)

export default vehicleRoutes
