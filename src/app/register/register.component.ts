import { Component, OnInit } from '@angular/core';
import { EmployeedataService } from '../employeedata.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  error: any;
  isLoading:boolean;
  log(x){console.log(x)}

  constructor(public em:EmployeedataService) { }
  register:any


  ngOnInit(): void {
  }

  addEmployee(f){
    this.isLoading = true;
    this.em.createEmployee(f.value).subscribe(res=>{
      f.reset();
      this.isLoading = false;
      // if(!res.error){
      //   this.message="Emplyoee Registered Successfully!!!"
      // }
      // else{
      //   this.error="Emplyoee Not Registered"
      // }
    },err=>{
      console.log(err);
      this.error="server error"
    })
  }


}
