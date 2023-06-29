import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/login';
import { LoginserviceService } from 'src/app/service/loginservice/loginservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : Login = new Login();
  userRole !: String;

  constructor(private router:Router,private loginservice : LoginserviceService,
              private toastr :ToastrService){}

  onSubmit()
  {
    console.log(this.login);

    this.loginservice.checkUserRole(this.login.email).subscribe((data) =>
    {
      this.userRole = data;
      console.log(this.userRole);

      if(this.userRole == "Admin"){
        this.validateadmin();
      }

      else if(this.userRole == "User"){
        this.validateuser();
      }

      else{
        this.toastr.error('Account not exist!', 'Login Status !');
      }
    });
  }

  validateadmin()
  {
    console.log(this.login);

    this.loginservice.isAdminPresent(this.login).subscribe((data) =>
    {
      if(data == true){
        console.log(data);
        this.gotoAdmin();
        this.loginservice.loginstatus = true;
      }
      else
      {
        this.toastr.error('Incorrect Admin Password !', 'Login Status !');
      }

    });
  }

  validateuser()
  {
    console.log(this.login);
    this.loginservice.isUserPresent(this.login).subscribe((data) =>
    {
      if(data == true){
        console.log(data);
        this.gotoUser();
        this.loginservice.loginstatus = true;
      }
      else
      {
        this.toastr.error('Incorrect User Password !', 'Login Status !');
      }
    });
  }

    gotoAdmin()
    {
      //alert popup
      this.toastr.success('Admin Login successful !', 'Login Status !');
      this.router.navigate(['/admin']);
    }

    gotoUser()
    {
       //alert popup
      this.toastr.success('User Login successful !', 'Login Status !');
      this.router.navigate(['/user']);
    }




    // public showSuccess(): void {
    //   this.toastr.success('Login Successfull!', 'Login Status !',{
    //       timeOut:2000,});
    // }

    // public showInfo(): void {
    //   this.toastr.info('Message Info!', 'Title Info!');
    // }

    // public showWarning(): void {
    //   this.toastr.warning('Message Warning!', 'Title Warning!');
    // }

    // public showError(): void {
    //   this.toastr.error('Message Error!', 'Title Error!');
    // }

}
