import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaViajesComponent } from './lista-viajes/lista-viajes.component';
import { FormCompraComponent } from './form-compra/form-compra.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component';
import { TicketCompraComponent } from './ticket-compra/ticket-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaViajesComponent,
    FormCompraComponent,
    ListaDeComprasComponent,
    TicketCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
