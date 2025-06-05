
import { Injectable } from '@angular/core';
import { AuthServiceInterface } from '../../../app/ports/services/auth.service.interface';
import { Observable, Subject } from 'rxjs';
import { AuthToken } from '../../../domain/objetcs/auth-token.object';
import { AuthMethod } from '../../../domain/objetcs/auth-method.object';
import { AuthMethodType } from '../../../app/constants/injection-token.constants';




@Injectable({
    providedIn: 'root',
})
export class PasswordAuthService implements AuthServiceInterface {
    private credentials: Subject<AuthMethod> = new Subject<AuthMethod>();
       
    constructor() {
        console.log('PasswordService instance created');
        this.credentials.subscribe((authMethod) => {
          console.log(authMethod);
            
        });
    }

        credentialStatus(): Observable<AuthMethod> {
            return this.credentials;
        }
    
    setCredentials(email: string,password: string): void {        
        this.credentials.next({
            method: AuthMethodType.PASSWORD,
            data: {
                email,
                password
            }
        });
    }

}