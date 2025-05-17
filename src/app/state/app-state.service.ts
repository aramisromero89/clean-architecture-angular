import { Injectable, Injector, signal } from "@angular/core";
import { AuthToken } from "../../domain/objetcs/auth-token.object";
import { Profile } from "../../domain/entities/profile.entity";
import { AuthServiceInterface } from "../ports/services/auth.service.interface";
import { AUTH_METHODS } from "../constants/injection-token.constants";
import { LoginUseCase } from "../use-cases/login.use-case";

@Injectable({ providedIn: 'root' })
export class AppStateService {
    public authToken = signal<AuthToken | null>(null);
    public profile = signal<Profile | null>(null);    

    constructor(){
        this.authToken.set(JSON.parse(localStorage.getItem('authToken') || 'null'));
        this.profile.set(JSON.parse(localStorage.getItem('profile') || 'null'));
    }

    setAuthToken(token: AuthToken | null) {
        this.authToken.set(token);
        localStorage.setItem('authToken', JSON.stringify(token));
    }

    setProfile(profile: Profile | null) {
        this.profile.set(profile);
        localStorage.setItem('profile', JSON.stringify(profile));
    }

}