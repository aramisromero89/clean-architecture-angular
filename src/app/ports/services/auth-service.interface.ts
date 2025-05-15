import { Profile } from "../../../domain/entities/profile.entity";
import { AuthToken } from "../../../domain/objetcs/auth-token.object";

export interface AuthServiceInterface {
    login(credentials: any): Promise<AuthToken>;
    register(credentials: any): Promise<boolean>;    
}