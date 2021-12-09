import { Component, OnInit } from '@angular/core';
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

  constructor(private agent:DoctorService) { }

  ngOnInit(): void {
    this.doctors = this.agent.listdoctors();
  }

  delete(id:any){

  }

}
