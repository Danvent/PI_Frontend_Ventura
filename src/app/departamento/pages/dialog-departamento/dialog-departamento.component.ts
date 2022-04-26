import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-dialog-departamento',
  templateUrl: './dialog-departamento.component.html',
  styleUrls: ['./dialog-departamento.component.css']
})
export class DialogDepartamentoComponent implements OnInit {

  categorias: Categoria[] = [];
  localuser: string =  JSON.parse(localStorage.getItem('user')!);
  departmentForm= new FormGroup({});
  value = "Moderno";

  constructor(
    private categoriaService: CategoriaService,
    private departamentoService: DepartamentoService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public ediData : number,
    private dialogRef : MatDialogRef<DialogDepartamentoComponent>
  ) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
        .subscribe({
          next: (resp) => this.categorias = [...resp],
          error: (err) => console.error(err)
        })

    this.departmentForm= this.fb.group({
      descripcion: [''],
      letra: [''],
      numero: [''],
      piso:[''],
      createdAt: [''],
      updatedAt: [''],
      usuario : [''],
      category: this.fb.group({
        idCategory: [],
        area: [],
        cuartos: [],
        banios: [],
        cocinas: [],
        estacionamientos: [],
        antiguedad: [],
        precio: [],
        descripcion: [],
        createdAt: [],
        updatedAt: [],
        usuario: [],
      })


    })

    if(this.ediData !=null){
      this.llernarDepartamento(this.ediData);
    }

    this.llenarDatosGenerales();
  }

  llenarDatosGenerales(){
    this.departmentForm.controls['usuario'].setValue(this.localuser);
    this.departmentForm.controls['updatedAt'].setValue(Date.now());
    this.departmentForm.controls['createdAt'].setValue(Date.now());
  }

  registrar(){
    console.log(this.departmentForm.value)
    this.departamentoService.registarDepartamento(this.departmentForm.value)
                            .subscribe({
                              next : (resp) => {
                                alert(resp.mensaje),
                                this.dialogRef.close();
                              },
                              error: (err) => console.log(err)
                            })
  }

  actualizar(){
    this.departamentoService.actualizarDepartamento(this.departmentForm.value)
                            .subscribe({
                              next: (resp) => {
                                alert(resp.mensaje)
                              }
                            })
  }

  llernarDepartamento(int: number){
    this.departamentoService.listarDepartamentoUnico(int)
                            .subscribe({
                              next: (resp:any) => {console.log(resp['category'].idCategory)
                              const pato = resp['category'].descripcion;
                              console.log(pato)
                                Object.keys(this.departmentForm.controls).forEach(key => {
                                  this.departmentForm.controls[key].setValue(resp[key],
                                    );
                                 });
                               }
                              }
                            )
  }

}
