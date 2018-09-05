import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  private isUserLoggedin;

  constructor(private router:Router, private _http: Http) {
    this.isUserLoggedin= false;
   }

   setUserLoggedIn(){
     this.isUserLoggedin = true;
   }

   getUserLoggedIn(){
     return this.isUserLoggedin;
   }

   saveProfile(jsonData){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
   //console.log(jsonData);
     let _url: string ='http://localhost:3000/user/signup';

   //let datas = {"username":"yogendra@gmail.com", "password":123456 ,"address":"New ashok Nager", "state":"Bihar", "city":"Patna", "zip":110096 , "checkmeout":true};
     return this._http.post(_url, jsonData, {headers:headers})
     .map(res => res.json());
    
   }


   loginUser(jsonData){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //console.log(jsonData);
    let _url: string = 'http://localhost:3000/user/login';
    return this._http.post(_url, jsonData, {headers:headers})
  .map(res => res.json());
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('checktoken');
    localStorage.removeItem('username');
    this.router.navigate(['login']);
    //localStorage.setItem('checktoken', null);
    //localStorage.setItem('username', null);
}

 






}
