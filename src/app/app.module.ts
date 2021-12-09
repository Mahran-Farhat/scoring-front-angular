import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateDoctorComponent } from './doctors/create-doctor/create-doctor.component';
import { ListDoctorComponent } from './doctors/list-doctor/list-doctor.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';
import { AdvancedSearchComponent } from './doctors/advanced-search/advanced-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateDoctorComponent,
    ListDoctorComponent,
    UpdateDoctorComponent,
    AdvancedSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
