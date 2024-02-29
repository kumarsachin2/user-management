import express from "express"
import { addUser } from "../controller/addUser"
import { loginUser } from "../controller/loginUser"
import { validateInputs } from "../middleware/schemaValidation"
import { addUserSchema } from "../zodInputValidation/addUserSchema"
import { loginUserSchema } from "../zodInputValidation/loginUserSchema"

const userRoutes = express.Router()

userRoutes
  .post("/add", validateInputs(addUserSchema, "body"), addUser)
  .post("/login", validateInputs(loginUserSchema, "body"), loginUser)

export default userRoutes
