import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaViajesComponent} from './lista-viajes/lista-viajes.component';
import {FormCompraComponent} from './form-compra/form-compra.component';

const rutas: Routes = [
  {path: 'lista', component: ListaViajesComponent},
  {path: 'formulario/:id', component: FormCompraComponent},
  {path: '', redirectTo: '/lista', pathMatch: 'full'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
