import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarDepartamentoComponent } from './pages/registar-departamento/registar-departamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarCategoriaComponent } from './pages/registrar-categoria/registrar-categoria.component';



@NgModule({
  declarations: [
    RegistarDepartamentoComponent,
    RegistrarCategoriaComponent
  ],
  exports:[
    RegistarDepartamentoComponent,
    RegistrarCategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartamentoModule { }
