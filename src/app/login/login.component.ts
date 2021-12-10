import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenstorageService } from '../services/tokenstorage.service';

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

  constructor(private authservice:AuthService, private tokenservice: TokenstorageService) { }

  ngOnInit(): void {
    if(this.tokenservice.getToken() != null){
      this.isLoggedIn = true;
      this.roles = this.tokenservice.getUser().role;
      alert('on est connecté'+this.isLoggedIn+" role :"+this.roles);
    }
  }

  onSubmit(){

    this.authservice.login(this.form).subscribe(

      data => {
        this.tokenservice.saveToken(data.token)
        this.tokenservice.saveUser(JSON.stringify(data));

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenservice.getUser().role;
        window.location.reload();
      },
      error => {
        this.isLoginFailed = true;
        this.isLoggedIn = false;
      }

    );

  }

}
