import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { RecipeModule } from './app/Recipe.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RecipeModule)
  .catch(err => console.log(err));
