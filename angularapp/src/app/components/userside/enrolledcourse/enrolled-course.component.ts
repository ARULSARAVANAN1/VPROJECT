import { Component } from '@angular/core';
import { EnrollCourse } from 'src/app/class/enrollCourse';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent {

  enrollcourse:EnrollCourse[]=[
    new EnrollCourse("M.E(VSI)","10/12/2022","10/10/2023"),
    new EnrollCourse("B.Tech(VSI)","21/1/2023","20/12/2024"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023"),
    new EnrollCourse("M.E(VSI)","16/7/2022","23/7/2023")
  ];

}
