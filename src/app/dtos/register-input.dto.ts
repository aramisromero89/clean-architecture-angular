import { AUTH_METHODS } from "../constants/injection-token.constants";

export class RegisterInputDto {
    constructor(
        public method: keyof typeof AUTH_METHODS,
        public data: any,
    ) { }
}