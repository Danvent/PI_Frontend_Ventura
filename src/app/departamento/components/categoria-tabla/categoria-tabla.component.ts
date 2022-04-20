import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-tabla',
  templateUrl: './categoria-tabla.component.html',
  styleUrls: ['./categoria-tabla.component.css']
})
export class CategoriaTablaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
                         .subscribe({
                           next : (resp) => this.categorias = [...resp],
                           error: (err)  => console.log(err)
                         });
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
}
