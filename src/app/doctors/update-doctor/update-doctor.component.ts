import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  id?:number
  doctor?:Doctor;

  constructor(private sniper:ActivatedRoute, private agent:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.sniper.snapshot.params['id'];
    this.agent.getdoctor(this.id).subscribe(
      data => this.doctor = data
      ,
      error => console.log(error)
    );
  }

  onSubmit(){

    this.agent.updatedoctor(this.id,this.doctor).subscribe(
      data => this.router.navigate(['list-doctor'])
      ,
      error => console.log(error)

    );

  }

}
