import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from "./app.routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeportesComponent } from './deportes/deportes.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    DeportesComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
