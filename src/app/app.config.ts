import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MarkdownPipe, MarkdownService, provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(),provideMarkdown()]
};
