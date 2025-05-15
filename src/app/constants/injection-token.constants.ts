import { InjectionToken } from "@angular/core";
import { AuthServiceInterface } from "../ports/services/auth-service.interface";
import { ApiClientInterface } from "../ports/services/api-service.interface";

export const GOOGLE_AUTH_TOKEN = new InjectionToken<AuthServiceInterface>('GOOGLE_AUTH');
export const PASSWORD_AUTH_TOKEN = new InjectionToken<AuthServiceInterface>('PASSWORD_AUTH');

export const AUTH_METHODS = {
  GOOGLE: GOOGLE_AUTH_TOKEN,
  PASSWORD: PASSWORD_AUTH_TOKEN,
};

export const API_CLIENT_TOKEN = new InjectionToken<ApiClientInterface>('API_CLIENT');