import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { routes } from '../routes/app.routes';
import { ErrorResponseInterceptor } from '../../infrastructure/interceptors/error-response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([ErrorResponseInterceptor])
    ),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
