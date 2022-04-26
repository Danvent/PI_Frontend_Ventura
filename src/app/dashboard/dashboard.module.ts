import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-router.module';
import { ClienteModule } from '../cliente/cliente.module';
import { DepartamentoModule } from '../departamento/departamento.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ClienteModule,
    DepartamentoModule
  ]
})
export class DashboardModule { }
