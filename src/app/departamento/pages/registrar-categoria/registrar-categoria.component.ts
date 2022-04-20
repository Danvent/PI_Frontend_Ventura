import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent implements OnInit {

  categoria = new FormGroup({});

  constructor(
    private categoriaService : CategoriaService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.categoria = this.fb.group({
      descripcion: [''],
      area:[''],
      cuartos: [''],
      cocinas: [''],
      banios: [''],
      estacionamientos: [''],
      antiguedad: [''],
      precio: [''],
      createdAt: [Date.now()],
      updatedAt:[Date.now()]
    })
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

  eliminarCategoria(i: number): void{
    this.categoriaService.eliminarCategoria(i)
                         .subscribe({
                           next: (resp) => {alert(resp.mensaje)},
                           error: (err) => console.log(err)
                         });
  }

}
