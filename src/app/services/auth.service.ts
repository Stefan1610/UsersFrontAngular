import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/RegisterModel';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  readonly authApi = "https://localhost:7258/api/Auth"
  constructor(private http: HttpClient) { }
  login(login: any): Observable<any> {
    return this.http.post<any>(this.authApi + '2/login',login, httpOptions);
  }
  register(model: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(this.authApi + '2/register',model, httpOptions);
  }
}
