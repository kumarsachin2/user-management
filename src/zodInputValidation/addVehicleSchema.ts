import { z } from "zod"

export const addVehicleSchema = z.object({
  username: z.string(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
})

export type AddVehicleSchemaI = z.infer<typeof addVehicleSchema>
