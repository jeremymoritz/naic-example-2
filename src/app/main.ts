import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import '../img/favicon.ico';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);