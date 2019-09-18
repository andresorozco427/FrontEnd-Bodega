  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNoEncontradaComponent } from './shared';

const routes: Routes = [
  {path: 'inicio', loadChildren: () => import('./feature').then(h => h.BienvenidaModule)},
  {path: 'historialAlmacenamiento', loadChildren: () => import('./feature').then(h => h.HistorialModule)},
  {path: 'ver', loadChildren: ()=> import('./feature').then(h => h.HistorialModule)},
  {path: "**", component: PaginaNoEncontradaComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }