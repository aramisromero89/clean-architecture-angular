import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { API_CLIENT_TOKEN, AUTH_METHODS } from '../../app/constants/injection-token.constants';
import { ApiClientInterface } from '../../app/ports/services/api-service.interface';
import { LoginUseCase } from '../../app/use-cases/login.use-case';
import { AppStateService } from '../../app/state/app-state.service';
import { LoginComponent } from '../login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { effect } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatCardModule, MatIconModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    @Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface,
    public appState: AppStateService,
    private router: Router
  ) {
    // Create an effect to watch auth state changes
    effect(() => {
      const authToken = this.appState.authToken();
      if (!authToken && !window.location.pathname.includes('/login') && !window.location.pathname.includes('/register')) {
        this.router.navigate(['/login']);
      }
    });
  }

  title = 'Todo';
}
