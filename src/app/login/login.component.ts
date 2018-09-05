import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private users:UserService) {
    this.userLogout();
    //console.log(localStorage.getItem('checktoken'));
   // console.log(localStorage.getItem('username'));
   }

  ngOnInit() {
     // reset login status
   
  }

  userLogout(){
    this.users.logout();
  }

  /*  one type
  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
      //console.log(username, password);

      if(username=='admin'&& password=='123456'){
        this.users.setUserLoggedIn();
        this.router.navigate(['myaccount'])
      }
  }
*/

 /* two type login form with validation  when error then disable button
  username="";
  password="";
  
  loginUser(form: any): void{
    console.log(form);
    this.username = form.username;
    this.password = form.password;
    console.log(this.username,this.password);
}

*/


// three type login form with validation
  user = {
    email : '',
    password : ''
  }

  loginUserValidForm({value,valid}){
    if(value){
      //console.log(value.username);  
      let jsonData =  JSON.stringify(value);    
      this.users.loginUser(jsonData).subscribe(res =>{
        //console.log(res); 
            if(res.error =='false'){
              this.users.setUserLoggedIn();
              localStorage.setItem('checktoken', res.token);
              localStorage.setItem('username', value.email);
              this.router.navigate(['myaccount']);
            }            
          });
    }
    else{
      console.log('form is InValid');
    }
  }
  
 




}
