import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DeportesComponent } from "./deportes/deportes.component";
import { PrincipalComponent } from "./principal/principal.component";

const appRoutes:Routes = [
    {path:'deportes', component:DeportesComponent},
    {path:'principal', component:PrincipalComponent},
    {path:'**', pathMatch: 'full', redirectTo:'principal'}
];

export const appRoutingProvider: any []= [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);