import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel} from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly apiUrl = "https://localhost:7258/api/users/"
  constructor(private http:HttpClient) { }

getAllUsersWithUslov(kolone: string, tabela:string, uslov:string):Observable<UserModel[]>{
  return this.http.get<UserModel[]>(this.apiUrl + kolone + '/' + tabela + '/' + uslov);
}
getAllUsers():Observable<UserModel[]>{
  return this.http.get<UserModel[]>(this.apiUrl );
  }
addUser(user: UserModel):Observable<UserModel>{
  return this.http.post<UserModel>(this.apiUrl , user);
}
deleteUser(id: number):Observable<UserModel>{
 return this.http.delete<UserModel>(this.apiUrl + id);
}
}