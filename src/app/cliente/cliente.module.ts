import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarClienteComponent } from './pages/registrar-cliente/registrar-cliente.component';
import { ListarClientesComponent } from './pages/listar-clientes/listar-clientes.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';



@NgModule({
  declarations: [
    RegistrarClienteComponent,
    ListarClientesComponent,
    HeaderNavComponent
  ],
  exports: [
    RegistrarClienteComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ]
})
export class ClienteModule { }
