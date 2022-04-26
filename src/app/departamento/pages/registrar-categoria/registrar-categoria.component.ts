import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';
import { DialogCategoriaComponent } from '../dialog-categoria/dialog-categoria.component';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent implements OnInit {

  categoria = new FormGroup({});
  localuser: string =  JSON.parse(localStorage.getItem('user')!);
  editData?: Categoria;

  constructor(
    private categoriaService : CategoriaService,
    private fb: FormBuilder,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.localuser)

    this.categoria = this.fb.group({
      descripcion: [''],
      area:[''],
      cuartos: [''],
      cocinas: [''],
      banios: [''],
      estacionamientos: [''],
      antiguedad: [''],
      precio: [''],
      usuario: [this.localuser],
      createdAt: [Date.now()],
      updatedAt:[Date.now()]
    })
    this.categoriaService.listarCategorias()
    .subscribe({
      next : (resp) => this.categorias = [...resp],
      error: (err)  => console.log(err)
    });

    this.llenardata();
  }

  categorias: Categoria[] = [];


  llenardata(){
    this.categoria.controls['descripcion'].setValue("gato")
  }

  registrar(){
    console.log(this.categoria.value)
    this.categoriaService.registrarCategoria(this.categoria.value)
                         .subscribe({
                           next : (resp) => {alert(resp.mensaje);
                                             this.ngOnInit();
                          },
                           error: (err) => console.warn(err)
                         })
  }


  eliminarCategoria(idCategory : number){
    this.categoriaService.eliminarCategoria(idCategory)
                         .subscribe({
                           next: (resp) => {
                             alert(resp.mensaje);
                             this.ngOnInit();
                            },
                           error: (err) => console.log(err)
                         });
  }

  editarCategoria(idCategory : number){
    this.obtenerCategoria(idCategory);
   console.log(this.editData);
   this.dialog.open(DialogCategoriaComponent,{
     width: '40%',
     data : idCategory,
   });
   // this.categoriaService.listarCategoriaUnica(idCategory)
   //                      .subscribe({
   //                        next : (resp:any) => {
   //                          Object.keys(this.categoria.controls).forEach(key => {
   //                            this.categoria.controls[key].setValue(resp[key]);
   //                          });
   //                        }
   //                      })
 }

 obtenerCategoria(idCategory: number){
      this.categoriaService.listarCategoriaUnica(idCategory)
                         .subscribe({
                           next : (resp) => { this.editData = resp}
                         });
                       }


}
