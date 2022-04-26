import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogCategoriaComponent } from 'src/app/departamento/pages/dialog-categoria/dialog-categoria.component';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { DialogClienteComponent } from '../dialog-cliente/dialog-cliente.component';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {


  listaCliente : Cliente[] = [];

  displayedColumns: string[] = ['nombre(s)','apellido(s)','tipo','documento','correo','celular','nacimiento','botones'];

  dataSources!: MatTableDataSource<Cliente>;

  constructor(
    private dialog: MatDialog,
    private service: ClienteService,
  ) {
  }

   ngOnInit(): void {
    this.service.listarClientes()
    .subscribe({
      next: (resp) => {
        this.listaCliente = resp,
        this.dataSources = new MatTableDataSource(resp)
         },
      error: (err) => console.log(err)
    })

  }

  openDialog(){
    this.dialog.open(DialogClienteComponent , {
        width: '80%'
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  eliminarCliente(idCliente : number){
    this.service.eliminarCliente(idCliente)
                         .subscribe({
                           next: (resp) => {
                             alert(resp.mensaje);
                             this.ngOnInit();
                            },
                           error: (err) => console.log(err)
                         });
  }

  editarCliente(idCliente : number){
   let pato = this.dialog.open(DialogClienteComponent,{
     width: '80%',
     data : idCliente,
   });

   pato.afterClosed().subscribe(result => {
     if(result) this.ngOnInit();
  });
 }



}
