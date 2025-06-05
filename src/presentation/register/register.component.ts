import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterUseCase } from '../../app/use-cases/register.use-case';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterLink
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private registerUseCase: RegisterUseCase,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onRegister() {
    if (this.registerForm.valid) {
      this.loading = true;
      try {
        await this.registerUseCase.execute(this.registerForm.value);
        this.snackBar.open('Registration successful!', 'Close', { duration: 3000 });
        // Redirect to login page after successful registration
        await this.router.navigate(['/login']);
      } catch (err) {
        this.snackBar.open('Registration failed. Please try again.', 'Close', { duration: 4000 });
      } finally {
        this.loading = false;
      }
    }
  }
}