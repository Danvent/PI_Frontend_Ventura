import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarClienteComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { DialogClienteComponent } from './pages/dialog-cliente/dialog-cliente.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_NATIVE_DATE_FORMATS} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    RegistrarClienteComponent,
    ListarClientesComponent,
    HeaderNavComponent,
    DialogClienteComponent,
    ListClienteComponent
  ],
  exports: [
    RegistrarClienteComponent,
    ListarClientesComponent,
    ListClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatMomentDateModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-Es'},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict : true}}
  ]

})
export class ClienteModule { }
