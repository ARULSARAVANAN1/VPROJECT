import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { EnrolledCourseComponent } from './components/userside/enrolledcourse/enrolled-course.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { UsersideComponent } from './components/userside/userside.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { CourselistComponent } from './components/userside/courselist/courselist.component';
import { UserhomepageComponent } from './components/userside/userhomepage/userhomepage.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { UserComponent } from './components/adminside/user/user.component';
import { AdduserComponent } from './components/adminside/adduser/adduser.component';
import { EdituserComponent } from './components/adminside/edituser/edituser.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"user",component:UsersideComponent,children:
    [
      {path:"",component:UserhomepageComponent},
      {path:"institute",component:UserhomepageComponent},
      {path:"enrolledcourse",component:EnrolledCourseComponent},
      {path:"courses/:instituteId",component:CourselistComponent},
      {path:"admissionform/:courseId/:instituteId",component:AdmissionformComponent}
    ],
    // canActivate: [AuthComponent]
  },
  {path:"auth",component:AuthComponent,children:
   [
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
   ],

  },

  {path:"admin",component:AdminsideComponent,children:
   [
      {path:"",component:InstitutesComponent},
      {path:"institute",component:InstitutesComponent},
      {path:"course/:instituteId",component:CoursesComponent},
      {path:"addcourse/:instituteId",component:AddcourseComponent},
      {path:"editcourse/:courseId",component:EditcourseComponent},
      {path:"students",component:UserComponent},
      {path:"addstudent",component:AdduserComponent},
      {path:"editstudent",component:EdituserComponent},
      {path:"addinstitute",component:AddinstituteComponent},
      {path:"editinstitute",component:EditinstituteComponent},
      {path:"editinstitute/:instituteId",component:EditinstituteComponent},
   ],
    // canActivate: [AuthComponent]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
