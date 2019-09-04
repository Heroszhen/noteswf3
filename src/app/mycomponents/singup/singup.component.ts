import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirstService } from '../../myservices/first.service';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signUpForm:FormGroup;
  errorMessage:string;
  constructor(private fs:FirstService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,/)]]
    });
  }

  inscription(){
    const email = this.signUpForm.get("email").value;
    const password = this.signUpForm.get("password").value;
    this.fs.createNewUser(email,password).then(
     ()=>{
       alert("Inscription réussie");
       this.signUpForm.reset();
     },
     (error)=>{
      this.errorMessage = error;
     }
    );
  }
}
