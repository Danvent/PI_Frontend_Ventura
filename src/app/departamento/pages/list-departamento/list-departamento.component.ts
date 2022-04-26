import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Departamento } from '../../interfaces/departamento.interface';
import { DepartamentoService } from '../../services/departamento.service';
import { DialogDepartamentoComponent } from '../dialog-departamento/dialog-departamento.component';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.css']
})
export class ListDepartamentoComponent implements OnInit {

  listaDepartamento : Departamento[] = [];

  displayedColumns: string[] = ['descripcion','habitacion','piso','categoria','habitaciones','precio','botones'];

  dataSources!: MatTableDataSource<Departamento>;

  constructor(
    private dialog: MatDialog,
    private service: DepartamentoService,
  ) {
  }

   ngOnInit(): void {
    this.service.listarDepartamentos()
    .subscribe({
      next: (resp) => {
        this.listaDepartamento = resp,
        this.dataSources = new MatTableDataSource(resp)
         console.log(resp) },
      error: (err) => console.log(err)
    })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  eliminarDepartamento(idDepartment : number){
    this.service.eliminarDepartamento(idDepartment)
                         .subscribe({
                           next: (resp) => {
                             alert(resp.mensaje);
                             this.ngOnInit();
                            },
                           error: (err) => console.log(err)
                         });
  }

  editarDepartamento(idDepartment : number){
   this.dialog.open(DialogDepartamentoComponent,{
     width: '40%',
     data : idDepartment,
   });
 }

 openDialog(){
  this.dialog.open(DialogDepartamentoComponent , {
      width: '40%'
  })
}

}
