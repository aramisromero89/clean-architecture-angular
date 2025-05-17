import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { PasswordAuthService } from '../../framework/adapters/auth/password-auth.service';
import { AuthServiceInterface } from '../../app/ports/services/auth.service.interface';
import { LoginUseCase } from '../../app/use-cases/login.use-case';
import { AUTH_METHODS, PASSWORD_AUTH_TOKEN } from '../../app/constants/injection-token.constants';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        GoogleSigninButtonModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        CommonModule
    ],
})
export class LoginComponent {
    loginForm: FormGroup;
    private authServices: AuthServiceInterface[] = [];
    passwordAuthService: PasswordAuthService;

    constructor(
        private fb: FormBuilder,      
        private injector: Injector,
        private loginUseCase: LoginUseCase
    ) {
        this.passwordAuthService = this.injector.get<PasswordAuthService>(PASSWORD_AUTH_TOKEN);
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        for (const [key, value] of Object.entries(AUTH_METHODS)) {
            const service = this.injector.get<AuthServiceInterface>(value);
            service.credentialStatus().subscribe((authMethod) => {
                loginUseCase.execute(authMethod);
            });
        }
    }
   

    onLogin(): void {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            this.passwordAuthService.setCredentials(email, password);
        }
    }
}