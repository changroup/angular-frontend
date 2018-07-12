import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  mail : string;
  password : string;

  forgot() {
    console.log("Forgot password ?   " + this.mail);
  }

  login() {
    console.log("User '" + this.mail + "' Logged in.");
  }

  register() {
    console.log("New user '" + this.mail + "' is registering.");
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
