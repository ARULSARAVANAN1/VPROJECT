import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/class/courses';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {

  searchText!:string;

  instituteId !:number;
  courses ?: Courses[];


  constructor(private router: Router,private userservice :UserserviceService,private route:ActivatedRoute){}

  ngOnInit(): void {

    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    this.getInstituteCourses();
  }

  //to get the courses in the institutes
  getInstituteCourses()
  {
    this.userservice.viewCoursesFromInstitute(this.instituteId).subscribe(data =>{
      this.courses = data;
      console.log(this.courses);
    })
  }


  goToAdmission(courseId:number)
  {
    this.router.navigate(['/user/admissionform',courseId,this.instituteId]);
  }


}
