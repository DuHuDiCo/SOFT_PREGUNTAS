import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';

const routes: Routes = [
    {path: '', redirectTo:'formulario' , pathMatch:'full' },
    {path:'formulario', component:FormularioComponent},
    {
      path:'resultados', 
      component:ResultadosComponent,
      children:[]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
