import { Observable } from "rxjs";
import { AuthMethod } from "../../../domain/objetcs/auth-method.object";

export interface AuthServiceInterface{
    credentialStatus(): Observable<AuthMethod>;
}