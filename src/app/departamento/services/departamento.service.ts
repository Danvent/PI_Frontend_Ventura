import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../interfaces/departamento.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private _apiUrl : string = 'http://localhost:8090'

  constructor(private http:HttpClient) { }

  listarDepartamentos(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this._apiUrl}/rest/department`);
  }

  registarDepartamento(data:any): Observable<any>{
    return this.http.post(`${this._apiUrl}/rest/department`,data);
  }

  actualizarDepartamento(data:Departamento): Observable<any>{
    return this.http.put(`${this._apiUrl}/rest/department`,data);
  }

  eliminarDepartamento(idDepartment: number): Observable<any>{
    return this.http.delete(`${this._apiUrl}/rest/department/${idDepartment}`);
  }

  listarDepartamentoUnico(idDepartment: number): Observable<Departamento>{
    return this.http.get<Departamento>(`${this._apiUrl}/rest/department/${idDepartment}`);
  }

}
