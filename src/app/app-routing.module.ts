import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarClientesComponent } from "./cliente/pages/listar-clientes/listar-clientes.component";
import { RegistrarClienteComponent } from "./cliente/pages/registrar-cliente/registrar-cliente.component";
import { CategoriaTablaComponent } from "./departamento/components/categoria-tabla/categoria-tabla.component";
import { RegistarDepartamentoComponent } from "./departamento/pages/registar-departamento/registar-departamento.component";


const routes: Routes = [
    {
      path: 'cliente',
      component : RegistrarClienteComponent
    },
    {
      path: 'departamento',
      component : RegistarDepartamentoComponent
    },
    {
      path: 'cliente/lista',
      component: ListarClientesComponent
    },
    {
      path: 'categoria/lista',
      component: CategoriaTablaComponent
    }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule{

}
