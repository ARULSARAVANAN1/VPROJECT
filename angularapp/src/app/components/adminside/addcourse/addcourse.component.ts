import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { Courses } from 'src/app/class/courses';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute) { }

  course : Courses = new Courses();
  instituteId !:number;

  ngOnInit(): void {

    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
  }

  onSubmit()
  {
    console.log(this.course);
    this.addCourse();
  }

  addCourse()
  {
    this.course.instituteId = this.instituteId;
    this.adminservice.addCourse(this.course).subscribe(data =>
      {
        console.log(data);
        alert("Institute Course added Sucessfully");
        this.router.navigate(['/admin/course',this.instituteId]);
      })
   }

}



