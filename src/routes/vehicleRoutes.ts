import express from "express"
import { validateInputs } from "../middleware/schemaValidation"
import { addVehicle } from "../controller/addVehicle"
import { verifyUserToken } from "../middleware/verifyUserToken"
import { getVehicles } from "../controller/getVehicles"
import { updateVehicle } from "../controller/updateVehicle"
import { addVehicleSchema } from "../zodInputValidation/addVehicleSchema"
import { updateVehicleSchema } from "../zodInputValidation/updateVehicleSchema"

const vehicleRoutes = express.Router()

vehicleRoutes
  .post(
    "/add",
    verifyUserToken,
    validateInputs(addVehicleSchema, "body"),
    addVehicle
  )
  .get("/", verifyUserToken, getVehicles)
  .patch(
    "/:id",
    verifyUserToken,
    validateInputs(updateVehicleSchema, "body"),
    updateVehicle
  )

export default vehicleRoutes
