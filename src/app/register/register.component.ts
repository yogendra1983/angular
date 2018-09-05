import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regResult:any;
  constructor(private router:Router, private users:UserService) { }
  ngOnInit() {
  }

 allstate = ['Noida','South Delhi','Delhi','Bangalore','Hyderabad','Gujarat'];

  registerUser = {
    email : '',
    password : '',
    address : '',
    city : '',
    state : '',
    zip : '',
    checkmeout:''
  }  

  registerForm({value,valid}){
    if(value){
     //console.log(value);
      let jsonData =  JSON.stringify(value);  
      //console.log(jsonData);
      this.users.saveProfile(jsonData).subscribe(res =>{
    console.log(res); 
        if(res.error =='false' || res.message =='User created'){
          this.router.navigate(['login']);  
        }            
      });           
    }
    else{
      console.log('form is InValid');
    }
  }



  // registerForm({value,valid}){
  //   if(value){
  //    //console.log(value);
  //     let jsonData =  JSON.stringify(value);  
  //     this.users.saveProfile().subscribe(res =>{
  //       //console.log(res.error); 
  //       if(res.error =='false'){
  //         this.router.navigate(['login']);  
  //       }            
  //     });           
  //   }
  //   else{
  //     console.log('form is InValid');
  //   }
  // }

}
