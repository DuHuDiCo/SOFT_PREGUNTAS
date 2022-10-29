import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';
import { DatosUsuarioComponent } from './paginas/datos-usuario/datos-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadosComponent,
    DatosUsuarioComponent
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
