import { AuthMethodType } from "../../app/constants/injection-token.constants";

export class AuthMethod {
    constructor(
        public method: AuthMethodType,
        public data: any
    ) { }

    static create(
        method: AuthMethodType,
        data: any
    ): AuthMethod {
        return new AuthMethod(method, data);
    }
}