import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './presentation/main/app.config';
import { AppComponent } from './presentation/main/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
