import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { EnrolledCourseComponent } from './components/userside/enrolledcourse/enrolled-course.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AdmincourseComponent } from './components/adminside/admincourse/admincourse.component';
import { EditcourseComponent } from './components/adminside/editcourse/editcourse.component';
import { AddcourseComponent } from './components/adminside/addcourse/addcourse.component';
import { AdminstudentComponent } from './components/adminside/adminstudent/adminstudent.component';
import { AddstudentComponent } from './components/adminside/addstudent/addstudent.component';
import { AddinstituteComponent } from './components/adminside/addinstitute/addinstitute.component';
import { EditinstituteComponent } from './components/adminside/editinstitute/editinstitute.component';
import { UsersideComponent } from './components/userside/userside.component';
import { ViewacademyComponent } from './components/userside/viewacademy/viewacademy.component';
import { CoursesComponent } from './components/userside/courses/courses.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AdminacademyComponent } from './components/adminside/adminacademy/adminacademy.component';
import { EditstudentComponent } from './components/adminside/editstudent/editstudent.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"user",component:UsersideComponent,children:
    [
      {path:"",component:ViewacademyComponent},
      {path:"institute",component:ViewacademyComponent},
      {path:"enrolledcourse",component:EnrolledCourseComponent},
      {path:"courses",component:CoursesComponent},
      {path:"admissionform",component:AdmissionformComponent}
    ]
  },
  {path:"auth",component:AuthComponent,children:
   [
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
   ]
  },

  {path:"admin",component:AdminsideComponent,children:
   [
      {path:"",component:AdminacademyComponent},
      {path:"institute",component:AdminacademyComponent},
      {path:"course",component:AdmincourseComponent},
      {path:"addcourse",component:AddcourseComponent},
      {path:"editcourse",component:EditcourseComponent},
      {path:"students",component:AdminstudentComponent},
      {path:"addstudent",component:AddstudentComponent},
      {path:"editstudent",component:EditstudentComponent},
      {path:"addinstitute",component:AddinstituteComponent},
      {path:"editinstitute",component:EditinstituteComponent}

   ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
