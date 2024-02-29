import express, { NextFunction, Request, Response } from "express"
import bodyParser from "body-parser"
import userRoutes from "./routes/userRoutes"
import vehicleRoutes from "./routes/vehicleRoutes"
import { config } from "./config"

const app = express()

app.use(bodyParser.json())

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

app.use("/user", userRoutes)
app.use("/vehicle", vehicleRoutes)

app.listen(config.port, () => {
  console.log(`now listening on port ${config.port}`)
})
