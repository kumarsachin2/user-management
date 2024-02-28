import { generateRandomString } from "./generateRandomString"

describe("generateRandomString function", () => {
  it("should generate a random string of the specified length", () => {
    const length = 10
    const randomString = generateRandomString(length)

    // Check if the generated string has the correct length
    expect(randomString.length).toBe(length)

    // Check if the generated string contains only valid characters
    const validCharacters = /^[a-zA-Z0-9]+$/
    expect(randomString).toMatch(validCharacters)
  })
})
