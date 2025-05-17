import { Inject, Injectable, Injector } from "@angular/core";
import { AuthMethod } from "../../domain/objetcs/auth-method.object";
import { API_CLIENT_TOKEN, AUTH_METHODS, AuthMethodType } from "../constants/injection-token.constants";
import { ApiClientInterface } from "../ports/services/api-service.interface";
import { AppStateService } from "../state/app-state.service";

@Injectable({ providedIn: 'root' })
export class LoginUseCase {   
    constructor( @Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface,private appState: AppStateService, private injector: Injector ) {}
    async execute(authMethod: AuthMethod): Promise<void> {        
        let res = await this.apiClient.login({
            method: authMethod.method,
            data: authMethod.data
        });
        if (res) {
            this.appState.setAuthToken({
                token: res.accessToken,
                authType: res.method as AuthMethodType
            });
            let profile = await this.apiClient.getProfile();
            this.appState.setProfile(profile);
            
        } else {
            // Handle login failure
            console.error("Login failed");
        }
    }
}