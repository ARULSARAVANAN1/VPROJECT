import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';

@Component({
  selector: 'app-addinstitute',
  templateUrl: './addinstitute.component.html',
  styleUrls: ['./addinstitute.component.css']
})
export class AddinstituteComponent {

  constructor(private router:Router,private adminservice:AdminserviceService){}
  newinstitute : Institute = new Institute();

  faLocationDot=faLocationDot;
  faImage=faImage;
  faEnvelope=faEnvelope;
  faPhone = faPhone;
  faGraduationCap=faGraduationCap;
  faBook = faBook;


  onSubmit(){
    console.log(this.newinstitute);
    this.addInstitute();
  }

    addInstitute()
    {
      this.newinstitute.instituteRating = 5;
      this.adminservice.addInstitute(this.newinstitute).subscribe(data =>
        {
          console.log(data);
          alert("Institute added Sucessfully");
          this.router.navigate(['/admin']);
        })
    }
}
