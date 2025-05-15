import { Inject, Injectable, Injector } from "@angular/core";
import { AuthMethod } from "../../domain/objetcs/auth-method.object";
import { AuthServiceInterface } from "../ports/services/auth-service.interface";
import { API_CLIENT_TOKEN, AUTH_METHODS } from "../constants/injection-token.constants";
import { ApiClientInterface } from "../ports/services/api-service.interface";
import { AppStateService } from "../state/app-state.service";

@Injectable({ providedIn: 'root' })
export class LoginUseCase {   
    constructor( @Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface,private appState: AppStateService, private injector: Injector ) {}
    async execute(authMethod: AuthMethod): Promise<void> {
        const token = AUTH_METHODS[authMethod.method];
        const authService = this.injector.get<AuthServiceInterface>(token);
        let authToken = await authService.login(authMethod.data);
        if (authToken) {
            let profile = await this.apiClient.getProfile();
            this.appState.profile.set(profile);
            
        } else {
            // Handle login failure
            console.error("Login failed");
        }
    }
}