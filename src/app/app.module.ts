import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

import {CoreModule} from './core';
import { PaginaNoEncontradaComponent } from './shared'
import {MenuComponent} from './shared';
import {FooterComponent} from './shared'
import { BienvenidaModule } from './feature';
import { HistorialModule } from './feature';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PaginaNoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BienvenidaModule,
    HistorialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
