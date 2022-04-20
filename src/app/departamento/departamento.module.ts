import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarDepartamentoComponent } from './pages/registar-departamento/registar-departamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarCategoriaComponent } from './pages/registrar-categoria/registrar-categoria.component';
import { CategoriaTablaComponent } from './components/categoria-tabla/categoria-tabla.component';



@NgModule({
  declarations: [
    RegistarDepartamentoComponent,
    RegistrarCategoriaComponent,
    CategoriaTablaComponent
  ],
  exports:[
    RegistarDepartamentoComponent,
    RegistrarCategoriaComponent,
    CategoriaTablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartamentoModule { }
