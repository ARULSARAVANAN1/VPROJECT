import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Institute } from 'src/app/class/institute';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/class/courses';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  //get the list of institutes
  public viewInstitute(): Observable<Institute[]>{
    return this.http.get<Institute[]>(`http://localhost:8080/admin/viewInstitutes`);
  }

  //get the list of courses in institutes
   public viewCoursesFromInstitute(instituteId : number): Observable<Courses[]>{
    return this.http.get<Courses[]>(`http://localhost:8080/admin/findByInstituteId/`+instituteId);
  }

}
