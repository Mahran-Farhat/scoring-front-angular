import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8082/clinique/api/auth'

  constructor(private http:HttpClient) { }

  login(forms : any):Observable<any>{

    return this.http.post(this.url+'/signin',
    {username:forms.username,password:forms.password});

  }

  register(forms:any):Observable<any>{
    return this.http.post(this.url+'/signup',
    {
      username:forms.username,
      email:forms.email,
      password:forms.password});
  }
}
