export class ProfileResponseDto {
    constructor(        
        public name: string,
        public surname: string,
        public email: string,
        public profileImage?: string,
    ) { }
}