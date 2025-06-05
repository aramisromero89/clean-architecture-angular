import { inject, Injectable } from "@angular/core";

import { AuthtokenResponseDto } from "../../../app/dtos/auth-token-response.dto";
import { LoginInputDto } from "../../../app/dtos/login-input.dto";
import { ProfileResponseDto } from "../../../app/dtos/profile-response.dto";
import { ApiClientInterface } from "../../../app/ports/services/api-service.interface";
import { environment } from "../../../environments/environment";
import { AuthToken } from "../../../domain/objetcs/auth-token.object";
import { Configuration, ControllerAuthApi, createConfiguration, ServerConfiguration } from "../../../../api-client";
import { AppStateService } from "../../../app/state/app-state.service";
import { RegisterUserInput } from "../../../app/dtos/register-user.input";
import { AUTH_METHODS, AuthMethodType } from "../../../app/constants/injection-token.constants";

@Injectable({ providedIn: 'root' })
export class ApiClientGeneratedService implements ApiClientInterface {
    private apiClient: ControllerAuthApi;
    private conf: Configuration;
    constructor(
        private appState: AppStateService,
    ) {
        this.conf = createConfiguration({
            baseServer: new ServerConfiguration(environment.apiUrl, {  }),
            promiseMiddleware: [
                {
                    pre: async (context) => {
                        context.setHeaderParam("Authorization", `Bearer ${this.appState.authToken()?.token}`);
                        context.setHeaderParam("auth-method", `${this.appState.authToken()?.authType}`);
                        return context;
                    },
                    post: async (context) => {
                        return context;
                    }
                }
            ],
        });

        this.conf.middleware.push();
        this.apiClient = new ControllerAuthApi(this.conf);
    }
    register(input: RegisterUserInput): Promise<boolean> {
        return this.apiClient.controllerAuthRegister({
            authMethod: {
                type: AuthMethodType.PASSWORD,
                data: {password:input.password}
            },           
            email: input.email,
            name: input.name,
            surname: input.surname,
            profilePicture: input.profilePicture ?? ""
        });
    }

    async getProfile(): Promise<ProfileResponseDto> {
        let res = await this.apiClient.controllerAuthProfile();
        return {
            email: res.email,
            name: res.name,
            surname: res.surname,
            profileImage: res.profilePicture,
        }
    }

    async login(input: LoginInputDto): Promise<AuthtokenResponseDto> {
        let res = await this.apiClient.controllerAuthLogin({
            type: input.method, data: input.data
        })

        return {
            accessToken: res.token,
            method: res.method
        }
    }

    
}