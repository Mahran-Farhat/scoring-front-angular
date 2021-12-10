import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  form:any ={};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage='';
  roles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  logout(){

  }

}
