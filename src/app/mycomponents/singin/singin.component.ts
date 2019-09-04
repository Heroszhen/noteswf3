import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirstService } from '../../myservices/first.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  errorMessage:string;
  signInForm:FormGroup;
  constructor(private fs:FirstService,private formBuilder:FormBuilder,private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.signInForm = this.formBuilder.group({
      emailc:['',[Validators.required,Validators.email]],
      passwordc:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,/)]]
    });
  }

  connexion(){
    const email = this.signInForm.get("emailc").value;
    const password = this.signInForm.get("passwordc").value;
    this.fs.signInUser(email,password).then(
     ()=>{
       alert(email+" : Connexion réussie");
       this.fs.connecte$.next([true]);
       this.fs.setItem("connection",{"connected":true,"name":email});
       this.router.navigate(['/']);
       this.signInForm.reset();
     },
     (error)=>{
      this.errorMessage = error;
     }
    );
  }

}
