import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _apiUrl : string = 'http://localhost:8090/rest/login'

  constructor(private http:HttpClient) { }

  login(data:User) : Observable<any>{
    return this.http.post(this._apiUrl, data);
  }



}
