import "reflect-metadata";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './code/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
