import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCategoriaComponent } from '../../pages/dialog-categoria/dialog-categoria.component';
import { DialogDepartamentoComponent } from '../../pages/dialog-departamento/dialog-departamento.component';

@Component({
  selector: 'app-header-departamento',
  templateUrl: './header-departamento.component.html',
  styleUrls: ['./header-departamento.component.css']
})
export class HeaderDepartamentoComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogCategoriaComponent , {
        width: '40%'
    })
  }

  openDialog2(){
    this.dialog.open(DialogDepartamentoComponent , {
      width: '50%'
    })
  }

}
