import { Component } from '@angular/core';
import { Course } from 'src/app/class/course';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faCirclePlus=faCirclePlus;

  searchText!:string;


  constructor(private router: Router){}

  Courses:Course[]=[
    new Course(" M.E(VSI)",2," 9am to 4pm","yyy",222),
    new Course(" M.SC(CS)",2," 9am to 4pm","yyy",122),
    new Course(" M.E(ECE)",2," 9am to 4pm","yyy",50)
  ];


    alert()
    {
      alert("Institute deleted successfully");
    }

    goteditcourse()
    {
      this.router.navigate(['/admin/editcourse']);
    }


}
