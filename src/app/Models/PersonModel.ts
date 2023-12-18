import { AddressModel } from "./AddressModel"

export interface Person{
    id: number
    firstName: string
    lastName: string
    email: string
    address: AddressModel
}