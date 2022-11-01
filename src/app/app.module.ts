import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';
import { DatosUsuarioComponent } from './paginas/datos-usuario/datos-usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PreguntasComponent } from './paginas/formulario/preguntas/preguntas.component';
import { CargandoComponent } from './paginas/formulario/cargando/cargando.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadosComponent,
    DatosUsuarioComponent,
    PreguntasComponent,
    CargandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgToastModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
