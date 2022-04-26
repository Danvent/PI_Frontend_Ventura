import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { DialogClienteComponent } from '../dialog-cliente/dialog-cliente.component';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styles: [
  ]
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService:ClienteService,
    private dialog: MatDialog
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


  openDialog(){
    this.dialog.open(DialogClienteComponent , {
      width: '80%'
    })
  }

  editDialog(idCustomer : number){
    this.dialog.open(DialogClienteComponent, {
      width: '80%',
      data: idCustomer
    })
  }


}
