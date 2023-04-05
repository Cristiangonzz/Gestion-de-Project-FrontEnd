import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './presetation/app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
