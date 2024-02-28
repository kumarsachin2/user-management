import { Request, Response } from "express"
import { loginUser } from "../controller/loginUser"
import { users } from "../utils/inMemoryStore"

describe("loginUser function", () => {
  let req: Partial<Request>
  let res: Partial<Response>

  beforeEach(() => {
    req = { body: {} }
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    }
  })

  it("should return 401 if username or password is invalid", async () => {
    req.body.username = "invalidUser"
    req.body.password = "invalidPassword"

    await loginUser(req as Request, res as Response)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({
      error: "Invalid username or password",
    })
  })

  it("should return username and token if username and password are valid", async () => {
    const username = "validUser"
    const password = "validPassword"
    users[username] = { username, password }

    req.body.username = username
    req.body.password = password

    await loginUser(req as Request, res as Response)

    //Check if in response after successful login username and token
    expect(res.json).toHaveBeenCalledWith({
      username,
      token: expect.any(String),
    })
  })
})
