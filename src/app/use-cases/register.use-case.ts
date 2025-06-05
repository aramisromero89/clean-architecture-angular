import { Inject, Injectable, Injector } from "@angular/core";
import { AuthMethod } from "../../domain/objetcs/auth-method.object";
import { API_CLIENT_TOKEN, AUTH_METHODS, AuthMethodType } from "../constants/injection-token.constants";
import { ApiClientInterface } from "../ports/services/api-service.interface";
import { AppStateService } from "../state/app-state.service";
import { RegisterUserInput } from "../dtos/register-user.input";

@Injectable({ providedIn: 'root' })
export class RegisterUseCase {
    constructor(@Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface, private appState: AppStateService, private injector: Injector) { }
    execute(input: RegisterUserInput): Promise<boolean> {
        return this.apiClient.register({
            email: input.email,
            name: input.name,
            surname: input.surname,
            profilePicture: input.profilePicture,
            password: input.password
        });      
    }
}