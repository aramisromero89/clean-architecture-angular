import { Inject, Injectable, Injector } from "@angular/core";
import { AuthMethod } from "../../domain/objetcs/auth-method.object";
import { API_CLIENT_TOKEN, AUTH_METHODS, AuthMethodType } from "../constants/injection-token.constants";
import { ApiClientInterface } from "../ports/services/api-service.interface";
import { AppStateService } from "../state/app-state.service";

@Injectable({ providedIn: 'root' })
export class LogoutCase {   
    constructor( @Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface,private appState: AppStateService, private injector: Injector ) {}
    async execute(): Promise<void> {       
            this.appState.setAuthToken(null);           
            this.appState.setProfile(null);       
    }
}