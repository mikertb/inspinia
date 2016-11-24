import {Routes} from "@angular/router";
import {mainViewComponent} from "../views/main-view/main-view.component";
import {minorViewComponent} from "../views/minor-view/minor-view.component";

export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'mainView', pathMatch: 'full'},

    // App views
    {path: 'mainView', component: mainViewComponent},
    {path: 'minorView', component: minorViewComponent},

    // Handle all other routes
    {path: '**',    component: mainViewComponent }
];
