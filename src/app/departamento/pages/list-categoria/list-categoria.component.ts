import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';
import { DialogCategoriaComponent } from '../dialog-categoria/dialog-categoria.component';


@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})

export class ListCategoriaComponent implements OnInit {

  listaCategoria : Categoria[] = [];

  displayedColumns: string[] = ['descripcion','cuartos','cocinas','banios','area','antiguedad','precio','botones'];

  dataSources!: MatTableDataSource<Categoria>;

  constructor(
    private dialog: MatDialog,
    private service: CategoriaService,
  ) {
  }

   ngOnInit(): void {
    this.service.listarCategorias()
    .subscribe({
      next: (resp) => {
        this.listaCategoria = resp,
        this.dataSources = new MatTableDataSource(resp)
         console.log(resp) },
      error: (err) => console.log(err)
    })

  }

  openDialog(){
    this.dialog.open(DialogCategoriaComponent , {
        width: '40%'
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  eliminarCategoria(idCategory : number){
    this.service.eliminarCategoria(idCategory)
                         .subscribe({
                           next: (resp) => {
                             alert(resp.mensaje);
                             this.ngOnInit();
                            },
                           error: (err) => console.log(err)
                         });
  }

  editarCategoria(idCategory : number){
   let pato = this.dialog.open(DialogCategoriaComponent,{
     width: '40%',
     data : idCategory,
   });
   pato.afterClosed().subscribe(result => {
     console.log(result)
     if(result) this.ngOnInit();
  });
 }



}
