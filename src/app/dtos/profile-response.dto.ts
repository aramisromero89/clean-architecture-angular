export class ProfileResponseDto {
    constructor(        
        public name: string,
        public email: string,
        public profileImage?: string,
    ) { }
}