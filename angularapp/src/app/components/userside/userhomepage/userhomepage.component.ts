import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent {

  searchText!:string;
  institutes ?: Institute[];

  constructor(private router: Router, private userservice :UserserviceService){}

  ngOnInit(): void {

    this.getallInstitutes();
  }

  //get the list of institutes
  getallInstitutes()
  {
      this.userservice.viewInstitute().subscribe(data =>{
      this.institutes = data;
      console.log(this.institutes);
    })
  }

  gotocourse(instituteId:number)
  {
    this.router.navigate(['/user/courses',instituteId]);
  }

}
