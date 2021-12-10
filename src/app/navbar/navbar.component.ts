import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from '../services/tokenstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles:string[]=[];

  isLoggedIn = false;
  showAdminpart = false;
  ShowUserpart = false;
  showSecpart = false;
  username!: string;

  constructor(private tokenservice: TokenstorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenservice.getToken();

    if(this.isLoggedIn){
      const user = this.tokenservice.getUser();
      this.roles = user.role;

      this.showAdminpart = this.roles.includes('ROLE_ADMIN');
      this.ShowUserpart = this.roles.includes('ROLE_USER');
      this.showSecpart = this.roles.includes('ROLE_SECRETAIRE');

      this.username = user.username;

    }

  }

  logout(){
    this.tokenservice.signOut();
    window.location.reload();
  }

}
