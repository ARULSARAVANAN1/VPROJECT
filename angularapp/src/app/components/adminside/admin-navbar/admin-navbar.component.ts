import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  constructor(private router:Router,private toastr :ToastrService){}

  faGraduationCap = faGraduationCap;
  faBuildingColumns = faBuildingColumns;
  faBook = faBook;
  faRightFromBracket = faRightFromBracket;
  faPerson = faPerson;



  gotToLogin()
  {
    this.toastr.success('Logout successful !', 'Login Status !');
    this.router.navigate(['/auth/login']);
  }

}
