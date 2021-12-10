import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:any ={};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage='';
  roles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
