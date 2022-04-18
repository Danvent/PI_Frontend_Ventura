import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private _apiUrl : string = 'http://localhost:8090'

  constructor(private http:HttpClient) { }

  registarDepartamento(data:any): Observable<any>{
    return this.http.post(`${this._apiUrl}/rest/department`,data);
  }

}
