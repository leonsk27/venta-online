import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any) {
    return this.http.post<any>(`${this.API_URI}/user/sigin`, user);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    
  }
  VerifyToken() {
    console.log('tezt token: ', !!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getIdPrivilege() {
    if (this.getToken() !== null) {
      const localVar = this.getToken();
      const decode: any = jwt_decode(localVar);
      return Number(decode.idRol);
    } else {
      return -1;
    }
  }
}
