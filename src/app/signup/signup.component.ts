import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {

  constructor(){}

  ngOnInit(){ }

form =new FormGroup({
  username : new FormControl('',[Validators.required,Validators.minLength(3)]),
  password : new FormControl('',[Validators.required,Validators.minLength(3)]),
  mail     : new FormControl('',[Validators.required,Validators.email])
});

get username(){
  return this.form.get('username')
}

get password(){
  return this.form.get('password')
}

get mail(){
  return this.form.get('mail')
}

}
