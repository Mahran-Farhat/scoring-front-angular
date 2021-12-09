import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './doctors/create-doctor/create-doctor.component';
import { ListDoctorComponent } from './doctors/list-doctor/list-doctor.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';

const routes: Routes = [
  {path:'create-doctor',component:CreateDoctorComponent},
  {path:'list-doctor',component:ListDoctorComponent},
  {path:'update-doctor/:id',component:UpdateDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
