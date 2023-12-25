import { AddressModel } from "./AddressModel"
import { ChildrenModel } from "./ChildrenModel"

export interface Person{
    id: number
    firstName: string
    lastName: string
    email: string
    address: AddressModel
    children : ChildrenModel []
}