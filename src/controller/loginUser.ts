import { Request, Response } from "express"
import { users } from "../utils/inMemoryStore"
import { generateToken } from "../utils/generateToken"
import { LoginUserSchemaI } from "../zodInputValidation/loginUserSchema"
import { serverErrorMsg } from "../utils/serverMsg"

export async function loginUser(req: Request<LoginUserSchemaI>, res: Response) {
  try {
    const { username, password } = req.body

    const user = users[username]
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" })
    }

    const token = generateToken(username)
    res.status(200).json({ userName: user.username, token: token })
  } catch (err) {
    return res.status(500).send(serverErrorMsg)
  }
}
