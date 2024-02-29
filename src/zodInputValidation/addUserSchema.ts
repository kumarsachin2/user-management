import { z } from "zod"

// Define a regular expression pattern for special characters
const specialCharactersRegex = /[!@#$ß€§%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

export const addUserSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, {
      message: "Password must contain at least one digit",
    })
    .regex(specialCharactersRegex, {
      message: "Password must contain at least one special character",
    }),
})

export type AddUserSchemaI = z.infer<typeof addUserSchema>
