import { Component } from '@angular/core';
import { Course } from 'src/app/class/course';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {

  searchText!:string;

      courses ?: Course[]=[
        new Course("M.E(VSI)",10,"20days","YYYY",50),
        new Course("M.E",10,"30days","ZZZZ",60),
        new Course("PHD",15,"40days","XXXX",40),
        new Course("MCA",9,"10days","XYZA",25),
        new Course("MBA",11,"15days","AAAA",50),
        new Course("MBA",11,"15days","AAAA",50),
      ]

}
