import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListClienteComponent } from "../cliente/pages/list-cliente/list-cliente.component";
import { HeaderDepartamentoComponent } from "../departamento/components/header-departamento/header-departamento.component";
import { ListDepartamentoComponent } from "../departamento/pages/list-departamento/list-departamento.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [

  {path: '', component:DashboardComponent , children: [
    {path:'gestor_departamento', component:HeaderDepartamentoComponent},
    {path:'gestor_cliente', component:ListClienteComponent}
  ] },
];


@NgModule({
imports: [
  RouterModule.forChild(routes)
],
exports:[
  RouterModule
]
})


export class DashboardRoutingModule{

}
