import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserNavbarComponent } from './components/userside/user-navbar/user-navbar.component';
import { EnrolledCourseComponent } from './components/userside/enrolledcourse/enrolled-course.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminNavbarComponent } from './components/adminside/admin-navbar/admin-navbar.component';
import { AdmincourseComponent } from './components/adminside/admincourse/admincourse.component';
import { AdminstudentComponent } from './components/adminside/adminstudent/adminstudent.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { AddstudentComponent } from './components/adminside/addstudent/addstudent.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { UsersideComponent } from './components/userside/userside.component';
import { ViewacademyComponent } from './components/userside/viewacademy/viewacademy.component';
import { CoursesComponent } from './components/userside/courses/courses.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { EditstudentComponent } from './components/adminside/editstudent/editstudent.component';
import { AdminacademyComponent } from './components/adminside/adminacademy/adminacademy.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    EnrolledCourseComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    AdminNavbarComponent,
    AdmincourseComponent,
    AdminstudentComponent,
    AddinstituteComponent,
    EditinstituteComponent,
    EditcourseComponent,
    AddcourseComponent,
    AddstudentComponent,
    AdminsideComponent,
    UsersideComponent,
    ViewacademyComponent,
    CoursesComponent,
    AdmissionformComponent,
    EditstudentComponent,
    AdminacademyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
