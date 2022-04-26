import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartamentoService } from '../../services/departamento.service';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-registar-departamento',
  templateUrl: './registar-departamento.component.html',
  styleUrls: ['./registar-departamento.component.css']
})
export class RegistarDepartamentoComponent implements OnInit {

  categorias: Categoria[] = [];

  department= new FormGroup({});

  constructor(
    private categoriaService: CategoriaService,
    private departamentoService: DepartamentoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
        .subscribe({
          next: (resp) => this.categorias = [...resp],
          error: (err) => console.error(err)
        })

    console.log(this.categorias);

    this.department= this.fb.group({
      descripcion: [''],
      numero: [''],
      piso:[''],
      category: this.fb.group({
        idCategory: []
      })
    })
  }

  registrar(){
    console.log(this.department.value)
    this.departamentoService.registarDepartamento(this.department.value)
                            .subscribe({
                              next : (resp) => alert(resp.mensaje),
                              error: (err) => console.log(err)
                            })
  }

}
