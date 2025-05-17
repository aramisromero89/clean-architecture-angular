import { AuthMethodType } from "../../app/constants/injection-token.constants";

export class AuthToken {
    constructor(
        public authType: AuthMethodType,
        public token: string
    ) { }

    static create(
        authType: AuthMethodType,
        token: string
    ): AuthToken {
        return new AuthToken(authType, token);
    }
}