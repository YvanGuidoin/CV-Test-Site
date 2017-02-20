import "zone.js"
import "reflect-metadata";
import './styles.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './code/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
