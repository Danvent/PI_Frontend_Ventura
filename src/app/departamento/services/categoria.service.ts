import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _apiUrl : string = 'http://localhost:8090'

  constructor(private http:HttpClient) { }

  listarCategorias() : Observable<Categoria[]>{
    const url = `${this._apiUrl}/rest/category`
    return this.http.get<Categoria[]>(url);
  }

  registrarCategoria(data:Categoria): Observable<any>{
    return this.http.post(`${this._apiUrl}/rest/category`,data);
  }
}
