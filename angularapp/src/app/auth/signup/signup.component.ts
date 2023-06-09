import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './_helpers/must-match.validator';
import { User } from 'src/app/class/user';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userAdmin:string='';
  email:string='';
  userName:string='';
  mobileNumber:any;
  password:string='';
  cpassword:string='';

  newuser : User = new User();

  registerForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,private loginservice : LoginserviceService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userAdmin: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            cpassword:['', Validators.required],
        },{
          validator: MustMatch('password', 'cpassword')
      });

    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
        this.newuser.email = this.email;
        this.newuser.mobileNumber = this.mobileNumber;
        this.newuser.password = this.password;
        this.newuser.userRole = this.userAdmin;
        this.newuser.username = this.userName;
        console.log(this.newuser);

      }

    // the below code belongs to backend connectivity - dont remove this

      // //check the mailid with db,to check if exist or not
      // checkmailid()
      // {
      //   this.loginservice.checkUserAvailabilityByEmail(this.newuser.email).subscribe((data) =>
      //   {
      //     // console.log(data);
      //     if(data == true)
      //     {
      //       alert("Account already exist..! Go to Login page");
      //       this.registerForm.reset();
      //     }
      //     else
      //       this.createaccount();
      //   });
      // }

      // createaccount()
      // {
      //   if(this.newuser.userRole == "Admin")
      //   {
      //     this.loginservice.RegisterAdmin(this.newuser).subscribe((data) =>
      //     {console.log(data);});
      //     alert("Admin Account created sucessfully");
      //     this.registerForm.reset();
      //   }
      //   else if(this.newuser.userRole == "User")
      //   {
      //     this.loginservice.RegisterUser(this.newuser).subscribe((data) =>
      //     {console.log(data);});
      //     alert("User Account created sucessfully");
      //     this.registerForm.reset();
      //   }
      // }

    }
