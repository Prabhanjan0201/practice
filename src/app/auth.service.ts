import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  createEmployee(create:any){
    return this.http.post('http://localhost:1996/api/register',create)
  }
  loginUser(credentials){
    return this.http.post<any>('http://localhost:1996/api/login',credentials)
  }

}
