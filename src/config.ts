import * as dotenv from "dotenv"

dotenv.config()

export const config = {
  secret: process.env["SECRET"] as string,
  port: process.env["PORT"],
}
