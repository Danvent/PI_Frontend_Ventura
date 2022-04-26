import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _apiUrl : string = 'http://localhost:8090'

  constructor(private http:HttpClient) { }

  listarClientes() : Observable<Cliente[]> {
    const url = `${this._apiUrl}/rest/customer`
    return this.http.get<Cliente[]>(url);
  }

  obtenerCliente(idcustomer : number) : Observable<Cliente>{
    const url = `${this._apiUrl}/rest/customer/${idcustomer}`
    return this.http.get<Cliente>(url);
  }

  registrarCliente(data:any): Observable<any>{
    return this.http.post(`${this._apiUrl}/rest/customer`,data);
  }

  eliminarCliente(idcustomer:any) : Observable<any>{
    return this.http.delete(`${this._apiUrl}/rest/customer/${idcustomer}`);
  }

  actualizarCliente(data:any) : Observable<any>{
    return this.http.put(`${this._apiUrl}/rest/customer`,data);
  }
}
