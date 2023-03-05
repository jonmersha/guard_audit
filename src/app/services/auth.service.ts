import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  setToken(token:string): void{
    localStorage.setItem('item',token);

  }
  getToken():string|null{
    return localStorage.getItem('token')
  }
  isLogedIn(){
    return this.getToken()!=null
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({email,password}:any): Observable<any>{
if(email==='jonmersha@gmail.com' && password==='asdmin123'){
  this.setToken('asdasdasdasdasdasd')
  return of({name:'fdafu',email:'jonmersha@gmail.com'});
}
return throwError(new Error('Faild to login'))

  }
}
