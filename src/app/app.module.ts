import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ListaComponent } from './lista/lista.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AgregarMedicamentoComponent } from './agregar-medicamento/agregar-medicamento.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarioComponent,
    ListaComponent,
    DetallesComponent,
    AgregarMedicamentoComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
