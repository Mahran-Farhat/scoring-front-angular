import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url='http://localhost:8082/clinique/api/v1/doctors';

  constructor(private http:HttpClient) { }

  createdoctor(value:any):Observable<any>{
    return this.http.post(`${this.url}`,value);
  }

  listdoctors():Observable<any>{
    return this.http.get(`${this.url}`);
  }

  deletedoctor(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  getdoctor(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  updatedoctor(id:any,value:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,value);

  }




}
