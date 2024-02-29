import { z } from "zod"

// Define a Zod schema for the update vehicle route parameters
export const updateVehicleIdParam = z.object({
  id: z.string(),
})

export const updateVehicleSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  year: z.number().optional(),
})

export type UpdateVehicleSchemaI = z.infer<typeof updateVehicleSchema>
export type UpdateVehicleIdParamI = z.infer<typeof updateVehicleIdParam>
