import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient } from '@angular/common/http';
import { MarkdownModule, MarkdownService, provideMarkdown } from 'ngx-markdown';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideMarkdown(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
