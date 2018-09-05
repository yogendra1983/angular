import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private users:UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return this.users.getUserLoggedIn();
    if ((localStorage.getItem('checktoken')) || (localStorage.getItem('username')) ){
      return true;
      //console.log("hello yogendra");
    }      
      else{
        this.router.navigate(['login']);
        return false;
      }
     

  }
}
