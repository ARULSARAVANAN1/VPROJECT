import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editinstitute',
  templateUrl: './editinstitute.component.html',
  styleUrls: ['./editinstitute.component.css']
})
export class EditinstituteComponent {

  faLocationDot=faLocationDot;
  faImage=faImage;
  faEnvelope=faEnvelope;
  faPhone = faPhone;
  faGraduationCap=faGraduationCap;

  formdata = {academyname:"",contactnumber:"", image:"", email:"", location:"", discription:""};

  onSubmit(){
    console.log(this.formdata)
  }


}
