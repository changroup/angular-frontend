import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
  }

}
