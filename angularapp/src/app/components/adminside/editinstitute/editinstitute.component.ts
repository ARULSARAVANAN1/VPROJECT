import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';

@Component({
  selector: 'app-editinstitute',
  templateUrl: './editinstitute.component.html',
  styleUrls: ['./editinstitute.component.css']
})
export class EditinstituteComponent {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute){}

  newinstitute : Institute = new Institute();

  instituteId !:number;

  faLocationDot=faLocationDot;
  faImage=faImage;
  faEnvelope=faEnvelope;
  faPhone = faPhone;
  faGraduationCap=faGraduationCap;
  faBook = faBook;

  ngOnInit(): void {
    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    // this.getinstititeById();
    this.adminservice.getInstituteById(this.instituteId).subscribe(data =>
      {
          this.newinstitute = data;
      });
  }

    // getinstititeById()
    // {
    //   this.adminservice.getInstituteById(this.instituteId).subscribe(data =>
    //     {
    //         this.newinstitute = data;
    //         console.log(this.newinstitute);
    //     },  error => console.log(error));
    // }

    onSubmit()
    {
      this.adminservice.editInstitute(this.instituteId,this.newinstitute).subscribe(data =>
        {
          alert("Institute Updated Sucessfully");
        },error => console.log(error));
        this.gotoInstitutePage();
    }

    gotoInstitutePage()
    {
      this.router.navigate(['/admin/institute']);
    }
}
