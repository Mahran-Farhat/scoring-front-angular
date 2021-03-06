import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from './doctors/advanced-search/advanced-search.component';
import { CreateDoctorComponent } from './doctors/create-doctor/create-doctor.component';
import { ListDoctorComponent } from './doctors/list-doctor/list-doctor.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'create-doctor',component:CreateDoctorComponent},
  {path:'list-doctor',component:ListDoctorComponent},
  {path:'update-doctor/:id',component:UpdateDoctorComponent},
  {path:'advanced-search',component:AdvancedSearchComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
