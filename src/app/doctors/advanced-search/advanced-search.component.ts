import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  speciality?:string;
  pseudo?:string;
  doctors?:Observable<Doctor[]>;

  constructor(private agent:DoctorService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.doctors = this.agent.searchdoctor(this.speciality,this.pseudo);
  }

  delete(id:any){

  }

  update(id:any){

  }

}
