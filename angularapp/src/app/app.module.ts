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
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { UsersideComponent } from './components/userside/userside.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { UserComponent } from './components/adminside/user/user.component';
import { CourselistComponent } from './components/userside/courselist/courselist.component';
import { UserreviewComponent } from './components/userside/userreview/userreview.component';
import { StatusComponent } from './components/userside/status/status.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    EnrolledCourseComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    AdminNavbarComponent,
    AddinstituteComponent,
    EditinstituteComponent,
    EditcourseComponent,
    AddcourseComponent,
    AdminsideComponent,
    UsersideComponent,
    AdmissionformComponent,
    AdminreviewComponent,
    InstitutesComponent,
    UserComponent,
    CourselistComponent,
    UserreviewComponent,
    StatusComponent,
    UserhomepageComponent,
    CoursesComponent,
    AdduserComponent,
    EdituserComponent,

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
