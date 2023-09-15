import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {FactureModule} from './facture/facture.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ExempleObservableComponent } from './stream/exemple-observable/exemple-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    ExempleObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FactureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
