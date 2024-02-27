export type VehicleDataType = {
  id: string
  make: string
  model: string
  year: number
}

export type UserDataType = {
  username: string
  password: string
  vehicles?: VehicleDataType[]
}
