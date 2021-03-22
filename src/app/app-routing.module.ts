import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componente par visualizar aquelas fotos já classificadas

import { ClassificadosComponent } from './classificados/classificados.component';

//Componente para classificar as NOVAS fotos

import { NovosComponent } from './novos/novos.component';

const routes: Routes = [
  { path: 'classificados/:parametro', component: ClassificadosComponent },
  { path: 'novos/:parametro', component: NovosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
