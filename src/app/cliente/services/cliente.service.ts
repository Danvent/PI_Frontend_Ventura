import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _apiUrl : string = 'http://localhost:8090'

  constructor(private http:HttpClient) { }

  listarClientes() : Observable<Client[]> {
    const url = `${this._apiUrl}/rest/customer`
    return this.http.get<Client[]>(url);
  }

  registrarCliente(data:any): Observable<any>{
    return this.http.post(`${this._apiUrl}/rest/customer`,data);
  }

  eliminarCliente(idcustomer:any) : Observable<any>{
    return this.http.delete(`${this._apiUrl}/rest/customer/${idcustomer}`);
  }
}
