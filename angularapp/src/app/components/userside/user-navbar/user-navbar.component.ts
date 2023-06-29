import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  constructor(private router:Router,private toastr :ToastrService){}

  faGraduationCap = faGraduationCap;
  faBuildingColumns = faBuildingColumns;
  faBookOpenReader = faBookOpenReader;
  faRightFromBracket = faRightFromBracket;

  gotToLogin()
  {
    this.toastr.success('Logout successful !', 'Login Status !');
    this.router.navigate(['/auth/login']);
  }
}
