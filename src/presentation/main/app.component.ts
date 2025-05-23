import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { API_CLIENT_TOKEN, AUTH_METHODS } from '../../app/constants/injection-token.constants';
import { ApiClientInterface } from '../../app/ports/services/api-service.interface';
import { LoginUseCase } from '../../app/use-cases/login.use-case';
import { AppStateService } from '../../app/state/app-state.service';
import { LoginComponent } from '../login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LoginOutCase } from '../../app/use-cases/logout.use-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, LoginComponent, MatCardModule, MatIconModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    @Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface,
    private loginUseCase: LoginUseCase,
    public appState: AppStateService,
    private logoutUseCase: LoginOutCase
  ) { }

  title = 'clean-architecture-angular';

  async logout() {
    await this.logoutUseCase.execute();
  }
}
