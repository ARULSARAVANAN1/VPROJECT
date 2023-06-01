import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  faGraduationCap = faGraduationCap;
  faBuildingColumns = faBuildingColumns;
  faBookOpenReader = faBookOpenReader;
  faRightFromBracket = faRightFromBracket;
}
