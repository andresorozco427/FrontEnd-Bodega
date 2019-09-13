import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialRoutingModule } from './historial-routing.module';
import {FormsModule} from '@angular/forms'

import {HistorialComponent} from './historial.component'
import { ListaHistorialComponent } from './lista-historial/lista-historial.component';
import {RegistroHistorialComponent} from './registro-historial/registro-historial.component';

@NgModule({
  declarations: [
    ListaHistorialComponent,
    RegistroHistorialComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    FormsModule
  ]
})
export class HistorialModule { }
