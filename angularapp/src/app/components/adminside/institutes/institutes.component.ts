import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { Institute } from 'src/app/class/institute';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent {

  searchText!:string;

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faCirclePlus = faCirclePlus;

  institutes ?: Institute[];

  constructor(private router: Router,private adminservice :AdminserviceService,private modalService: NgbModal){}

    ngOnInit(): void {

      this.getallInstitutes();
    }

    //get the list of institutes
    getallInstitutes()
    {
        this.adminservice.viewInstitute().subscribe(data =>{
        this.institutes = data;
        console.log(this.institutes);
      })
    }

    // //delete the institute component
    // deleteInstitute(instituteId : number)
    // {
    //     if(confirm('Are you sure to delete this record ?')){
    //       this.adminservice.deleteInstitute(instituteId).subscribe(data =>
    //         {
    //           console.log(instituteId);
    //           alert("Institute Deleted sucessfully");
    //           this.getallInstitutes();
    //       });
    //     }
    //   }


    //send the instituteId to editinstitute component
    editInstitute(instituteId : number)
    {
      this.router.navigate(['/admin/editinstitute',instituteId]);
    }

    //Redirect to the course with institute id
    gotoCourse(instituteId:number)
    {
      this.router.navigate(['/admin/course',instituteId]);
    }

    //for delete popup modal
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(result);
      }, (reason) => {
        console.log(reason);
      });
    }

      //delete the institute component
      delete(instituteId : number)
      {
          this.modalService.dismissAll();
            this.adminservice.deleteInstitute(instituteId).subscribe(data =>
              {
                console.log(instituteId);
                // alert("Institute Deleted sucessfully");
                this.getallInstitutes();
            });

        }

}
