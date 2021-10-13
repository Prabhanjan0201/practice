import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  error:string;


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  chg(x){
    console.log(x);
  }

  onLogin(loginForm:NgForm){
    this.auth.loginUser(loginForm.value).subscribe(res=>{
      if(!res.error){
        console.log(res);
        // this.router.navigate([])
      }
      else{
        this.error = 'Login failed'

      }
     err=>{
        this.error = 'Server Error...Cannot Login'
      }
    })
  }
}
