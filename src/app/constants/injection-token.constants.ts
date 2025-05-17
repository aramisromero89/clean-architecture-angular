import { InjectionToken } from "@angular/core";
import { ApiClientInterface } from "../ports/services/api-service.interface";
import { AuthServiceInterface } from "../ports/services/auth.service.interface";

export const GOOGLE_AUTH_TOKEN = new InjectionToken<AuthServiceInterface>('GOOGLE_AUTH_SERVICE');
export const PASSWORD_AUTH_TOKEN = new InjectionToken<AuthServiceInterface>('PASSWORD_AUTH_SERVICE');

export enum AuthMethodType {
  GOOGLE = "GOOGLE",
  PASSWORD = "PASSWORD",
}

export const AUTH_METHODS = {
   [AuthMethodType.GOOGLE]: GOOGLE_AUTH_TOKEN,
   [AuthMethodType.PASSWORD]: PASSWORD_AUTH_TOKEN,
};



export const API_CLIENT_TOKEN = new InjectionToken<ApiClientInterface>('API_CLIENT');