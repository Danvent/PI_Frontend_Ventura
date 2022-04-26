import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-categoria',
  templateUrl: './dialog-categoria.component.html',
  styleUrls: ['./dialog-categoria.component.css']
})

export class DialogCategoriaComponent implements OnInit {

  categoriaForm = new FormGroup({});
  localuser: string =  JSON.parse(localStorage.getItem('user')!);
  matcher = new MyErrorStateMatcher();

  constructor(
    private categoriaService : CategoriaService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public ediData : number,
    private dialogRef : MatDialogRef<DialogCategoriaComponent>,
    private rotuer: Router
  ) { }

  ngOnInit(): void {

    this.categoriaForm = this.fb.group({
      idCategory: [''],
      descripcion: ['',[Validators.required, Validators.maxLength(15),Validators.minLength(5)]],
      area:['', [Validators.required]],
      cuartos: ['', [Validators.required]],
      cocinas: ['', [Validators.required]],
      banios: ['', [Validators.required]],
      estacionamientos: ['',[Validators.required]],
      antiguedad: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      usuario: [''],
      createdAt: [''],
      updatedAt:['']
    })

    if(this.ediData != null){
      this.llenarCategoria(this.ediData);
    }

    this.llenarDatosGenerales();
  }

  categorias: Categoria[] = [];

  llenarDatosGenerales(){
    this.categoriaForm.controls['usuario'].setValue(this.localuser);
    this.categoriaForm.controls['updatedAt'].setValue(Date.now());
    this.categoriaForm.controls['createdAt'].setValue(Date.now());
  }

  registrar(){
    console.log(this.categoriaForm.value)
    this.categoriaService.registrarCategoria(this.categoriaForm.value)
                         .subscribe({
                           next : (resp) => {
                             alert(resp.mensaje);
                             this.categoriaForm.reset();
                             this.dialogRef.close();
                          },
                           error: (err) => console.warn(err)
                         })
  }

  actualizar(){
    console.log(this.categoriaForm.value)
    this.categoriaService.actualizarCategoria(this.categoriaForm.value)
                         .subscribe({
                           next: (resp) => {
                             alert(resp.mensaje);

                             this.rotuer.navigate(['/','gestor_departamento']);
                             this.dialogRef.close();
                           }
                         })
  }

  llenarCategoria(int : number){
      this.categoriaService.listarCategoriaUnica(int)
                         .subscribe({
                           next : (resp:any) => {
                            Object.keys(this.categoriaForm.controls).forEach(key => {
                              this.categoriaForm.controls[key].setValue(resp[key]);
                             });
                           }
                         })
  }

}
