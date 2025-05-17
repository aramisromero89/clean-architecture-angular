
import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Observable, Subject } from 'rxjs';
import { AuthServiceInterface } from '../../../app/ports/services/auth.service.interface';
import { AuthMethodType } from '../../../app/constants/injection-token.constants';
import { AuthMethod } from '../../../domain/objetcs/auth-method.object';



@Injectable({
    providedIn: 'root',
})
export class GoogleAuthService implements AuthServiceInterface {
    private credentials: Subject<AuthMethod> = new Subject<AuthMethod>();
    constructor(private socialAuthService: SocialAuthService) {

        this.socialAuthService.authState.subscribe((socialUser) => {
            if (socialUser) {
                this.credentials.next({
                    method: AuthMethodType.GOOGLE,
                    data: socialUser.idToken,                    
                });
            }
        });
    }
    credentialStatus(): Observable<AuthMethod> {
        return this.credentials;
    }

}