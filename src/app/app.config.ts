import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http'
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
