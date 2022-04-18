import { Component, NgZone, OnInit } from '@angular/core';
import { Client } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styles: [
  ]
})
export class ListarClientesComponent implements OnInit {

  clientes: Client[] = [];

  constructor(
    private clienteService:ClienteService,
    private ngZone:NgZone
    )
     { }

  ngOnInit(): void {
        this.clienteService.listarClientes()
          .subscribe({
            next: (resp) =>{this.clientes= [...resp],console.log(resp)},
            error: (err) => {console.error(err);}
          })
  }

  eliminarCliente( i : number): void{
    this.clienteService.eliminarCliente(i)
                       .subscribe({
                         next: (resp) => {alert(resp.mensaje);
                                          this.ngOnInit();
                                          },
                         error: (err) => console.log(err)
                       })
  }
}
