import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

/*
 * Bootstrap Angular app with a top level NgModule
 */

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));