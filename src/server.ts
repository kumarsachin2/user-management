import express, { NextFunction, Request, Response } from "express"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"
import userRoutes from "./routes/userRoutes"
import vehicleRoutes from "./routes/vehicleRoutes"

const app = express()
const port = 5000

// Middleware for logging incoming requests
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString()
  const method = req.method
  const url = req.originalUrl
  const params = req.params
  const body = req.body
  console.log(
    `${timestamp} - ${method} ${url} - Params: ${JSON.stringify(
      params
    )} - Body: ${JSON.stringify(body)}`
  )
  next()
})

app.use(bodyParser.json())

app.use("/user", userRoutes)
app.use("/vehicle", vehicleRoutes)

app.listen(port, () => {
  console.log(`now listening on port ${port}`)
})
