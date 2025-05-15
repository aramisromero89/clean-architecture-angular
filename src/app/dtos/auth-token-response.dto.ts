export class AuthtokenResponseDto {
    constructor(
        public accessToken: string,
        public method: string
    ) { }
}