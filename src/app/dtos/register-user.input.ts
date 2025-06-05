import { AuthMethod } from "../../domain/objetcs/auth-method.object"
export class RegisterUserInput {
    email!: string 
    name!: string 
    surname!: string
    profilePicture?: string
    password!: string 
}