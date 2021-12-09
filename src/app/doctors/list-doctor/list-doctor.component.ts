import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

  doctors?:Observable<Doctor[]>;

  constructor(private agent:DoctorService, private router:Router) { }

  ngOnInit(): void {
    this.doctors = this.agent.listdoctors();
  }

  delete(id:any){

    this.agent.deletedoctor(id).subscribe(
      data => this.doctors = this.agent.listdoctors()
      ,
      error => console.log(error)
    );

  }

  update(id:any){
this.router.navigate(['update-doctor',id]);
  }

}
