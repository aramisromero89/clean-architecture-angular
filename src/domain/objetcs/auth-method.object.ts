import { AUTH_METHODS } from "../../app/constants/injection-token.constants";

export class AuthMethod {
    constructor(
        public method: keyof typeof AUTH_METHODS,
        public data: any
    ) { }

    static create(
        method: keyof typeof AUTH_METHODS,
        data: any
    ): AuthMethod {
        return new AuthMethod(method, data);
    }
}