export class Profile {
    constructor(      
        public name: string,
        public email: string,
        public profileImage?: string,
    ) { }

    static create(
        id: string,
        name: string,
        email: string,
    ): Profile {
        return new Profile(id, name, email);
    }
}