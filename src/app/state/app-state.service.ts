import { Injectable, signal } from "@angular/core";
import { AuthToken } from "../../domain/objetcs/auth-token.object";
import { Profile } from "../../domain/entities/profile.entity";

@Injectable({ providedIn: 'root' })
export class AppStateService {
    public authToken = signal<AuthToken | null>(null);
    public profile = signal<Profile | null>(null);      
}