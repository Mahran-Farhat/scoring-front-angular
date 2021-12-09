import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor = new Doctor();
  firstnameerror='';
  lastnameerror='';
  specialiyerror='';
  errors = {}


  constructor(private http:HttpClient,private agent:DoctorService,private router:Router) {
     }

  ngOnInit(): void {
    this.doctor = new Doctor();
  }

  onSubmit(){
this.agent.createdoctor(this.doctor).subscribe(
  data => this.router.navigate(['list-doctor']),
  error =>{
    this.errors = error;
    this.firstnameerror = error.error.firstname;
    this.lastnameerror = error.error.lastname;
    this.specialiyerror = error.error.speciality;

  }
);

  }

}
