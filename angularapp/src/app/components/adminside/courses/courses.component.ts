import { Component } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { Courses } from 'src/app/class/courses';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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

  instituteId !:number;
  courses ?: Courses[];


  constructor(private router: Router,private adminservice :AdminserviceService,
              private route:ActivatedRoute,private modalService: NgbModal){}

  ngOnInit(): void {

    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    this.getInstituteCourses();
  }

  //to get the courses in the institutes
  getInstituteCourses()
  {
    this.adminservice.viewCoursesFromInstitute(this.instituteId).subscribe(data =>{
      this.courses = data;
      console.log(this.courses);
    })
  }

    goteditcourse(courseId :number)
    {
      this.router.navigate(['/admin/editcourse',courseId]);
    }

    addcourse()
    {
      this.router.navigate(['/admin/addcourse',this.instituteId]);
    }

    //for delete popup modal
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          console.log(result);
      }, (reason) => {
        console.log(reason);
      });
    }

    //delete the course by the course id
    delete(courseId :number)
    {
        this.modalService.dismissAll();
        this.adminservice.deleteCourse(courseId).subscribe(data =>
          {
            console.log(courseId);
            this.getInstituteCourses();
        });

    }



}
