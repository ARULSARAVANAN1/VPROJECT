import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // formdata = {email:"",password:""};
  login : Login = new Login();
  userRole !: String;

  constructor(private router:Router,private loginservice : LoginserviceService)
  {}

  onSubmit()
  {
    console.log(this.login);

    if(this.login.email == "admin" && this.login.password == "admin" )
    {
      this.gotoAdmin();
    }
    else if(this.login.email == "user" && this.login.password == "user" )
    {
      this.gotoUser();
    }
    else
    {
      alert("error credentials");
    }






    // the below code belongs to backend connectivity - dont remove this

    // this.loginservice.checkUserRole(this.login.email).subscribe((data) =>
    // {
    //   this.userRole = data;
    //   console.log(this.userRole);

    //   if(this.userRole == "Admin")
    //   {
    //     this.validateadmin();
    //   }
    //   else if(this.userRole == "User")
    //   {
    //     this.validateuser();
    //   }

    //   else
    //   {
    //     alert("Mail id not exist create Account");
    //   }

    // });
  }

  // validateadmin()
  // {
  //   console.log(this.login);
  //   this.loginservice.checkAdmin(this.login).subscribe((data) =>
  //   {
  //     console.log(data);
  //     this.gotoAdmin();
  //   });
  // }

  // validateuser()
  // {
  //   console.log(this.login);
  //   this.loginservice.checkUser(this.login).subscribe((data) =>
  //   {
  //     console.log(data);
  //     this.gotoUser();
  //   });
  // }

  gotoAdmin()
  {
    this.router.navigate(['/admin']);
  }

  gotoUser()
  {
    this.router.navigate(['/user']);
  }

}
