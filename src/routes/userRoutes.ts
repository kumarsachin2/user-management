import express from "express"
import { addUser } from "../controller/addUser"
import { loginUser } from "../controller/loginUser"

const userRoutes = express.Router()

userRoutes.post("/add", addUser).post("/login", loginUser)

export default userRoutes
