import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportadoraComponent} from './transportadora/transportadora.component';
import {DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {path: 'detalhes/:id', component: DetalhesComponent},
  {path: 'transportadora', component: TransportadoraComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
