import { AUTH_METHODS } from "../constants/injection-token.constants";

export class LoginResponseDto {
    constructor(
        public token: string,
        public method: keyof typeof AUTH_METHODS,        
    ) { }
}