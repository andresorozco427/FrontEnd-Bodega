import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistorialComponent} from './historial.component';
import {ConsultaHistorialComponent} from './consulta-historial/consulta-historial.component';


const routes: Routes = [
  {path: '', component: HistorialComponent },
  {path: 'ver', component: ConsultaHistorialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
