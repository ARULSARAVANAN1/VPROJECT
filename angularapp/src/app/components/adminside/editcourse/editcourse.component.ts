import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/class/courses';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent {

  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute){}

  courseId !:number;
  course : Courses = new Courses();

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    console.log(this.courseId);
    // this.getcourseById();

    this.adminservice.getCourseById(this.courseId).subscribe(data =>
      {
          this.course = data;
      });
  }

  // getcourseById()
  // {
  //   this.adminservice.getCourseById(this.courseId).subscribe(data =>
  //     {
  //         this.course = data;
  //         // console.log(this.course);
  //     });
  // }

  onSubmit()
  {
    this.adminservice.editCourse(this.courseId,this.course).subscribe(data =>
      {
        alert("Course Updated Sucessfully");
      },error => console.log(error));
      this.gotoCoursePage();
  }

  gotoCoursePage()
  {
    this.router.navigate(['/admin/course',this.course.instituteId]);
  }


}
