import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { EntitlementAwarePreloadStrategy } from './shared/services/preload-strategy/entitlement.aware.preload.strategy.service';
import { InitializeAppService } from './shared/services/initialize-app/initialize-app.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withPreloading(EntitlementAwarePreloadStrategy)
    ),
    provideHttpClient(),
    provideAppInitializer(() => {
      const initializeAppService = inject(InitializeAppService);
      return initializeAppService.initialize();
    })
  ]
};
