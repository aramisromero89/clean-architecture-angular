import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { API_CLIENT_TOKEN, GOOGLE_AUTH_TOKEN, PASSWORD_AUTH_TOKEN } from '../../app/constants/injection-token.constants';
import { ApiClientGeneratedService } from '../../framework/adapters/api/api-client-generated.service';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { environment } from '../../environments/environment';
import { GoogleAuthService } from '../../framework/adapters/auth/google-auth.service';
import { PasswordAuthService } from '../../framework/adapters/auth/password-auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    { provide: GOOGLE_AUTH_TOKEN, useClass: GoogleAuthService },
    { provide: PASSWORD_AUTH_TOKEN, useClass: PasswordAuthService },
    { provide: API_CLIENT_TOKEN, useClass: ApiClientGeneratedService },
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
  ]
};
