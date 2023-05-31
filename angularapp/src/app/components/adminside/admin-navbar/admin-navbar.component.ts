import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  faGraduationCap = faGraduationCap;
  faBuildingColumns = faBuildingColumns;
  faBook = faBook;
  faRightFromBracket = faRightFromBracket;
  faPerson = faPerson;

}
