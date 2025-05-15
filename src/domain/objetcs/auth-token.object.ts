export class AuthToken {
    constructor(
        public authType: string,
        public token: string
    ) { }

    static create(
        authType: string,
        token: string
    ): AuthToken {
        return new AuthToken(authType, token);
    }
}