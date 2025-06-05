import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { API_CLIENT_TOKEN } from '../../app/constants/injection-token.constants';
import { ApiClientInterface } from '../../app/ports/services/api-service.interface';
import { AppStateService } from '../../app/state/app-state.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LogoutCase } from '../../app/use-cases/logout.use-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatCardModule, MatIconModule],

  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

  constructor(
    @Inject(API_CLIENT_TOKEN) private apiClient: ApiClientInterface,
    public appState: AppStateService,
    private logoutUseCase: LogoutCase
  ) { }

  title = 'Todo';

  async logout() {
    await this.logoutUseCase.execute();
  }
}
