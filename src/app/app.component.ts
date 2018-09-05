import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private isUserLoggedCheck;

  constructor(private users:UserService) {  this.setUserHeaderMenu(); }
   
  setUserHeaderMenu(){
    if(localStorage.getItem('checktoken')){
      this.isUserLoggedCheck = true;
    }else{
      this.isUserLoggedCheck = ''; 
    }
    
  }  
}