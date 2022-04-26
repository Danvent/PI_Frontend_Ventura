import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarDepartamentoComponent } from './pages/registar-departamento/registar-departamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarCategoriaComponent } from './pages/registrar-categoria/registrar-categoria.component';
import { ComponentHeaderComponent } from './components/component-header/component-header.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogCategoriaComponent } from './pages/dialog-categoria/dialog-categoria.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DialogDepartamentoComponent } from './pages/dialog-departamento/dialog-departamento.component';
import {MatSelectModule} from '@angular/material/select';
import { ListCategoriaComponent } from './pages/list-categoria/list-categoria.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ListDepartamentoComponent } from './pages/list-departamento/list-departamento.component';
import { HeaderDepartamentoComponent } from './components/header-departamento/header-departamento.component';

@NgModule({
  declarations: [
    RegistarDepartamentoComponent,
    RegistrarCategoriaComponent,
    ComponentHeaderComponent,
    DialogCategoriaComponent,
    DialogDepartamentoComponent,
    ListCategoriaComponent,
    ListDepartamentoComponent,
    HeaderDepartamentoComponent,
  ],
  exports:[
    RegistarDepartamentoComponent,
    RegistrarCategoriaComponent,
    ListCategoriaComponent,
    HeaderDepartamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule
  ]

})
export class DepartamentoModule { }
