import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/app/class/courses';
import { Institute } from 'src/app/class/institute';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }

  //get the list of institutes
  public viewInstitute(): Observable<Institute[]>{
    return this.http.get<Institute[]>(`http://localhost:8080/admin/viewInstitutes`);
  }

  //add the institutes
  public addInstitute(newinstitute:Institute): Observable<any>{
    return this.http.post<Institute>(`http://localhost:8080/admin/addInstitute`,newinstitute);
  }

  //get the institute by instituteId
  public getInstituteById(instituteId : number): Observable<Institute>{
    return this.http.get<Institute>(`http://localhost:8080/admin/getInstituteById/`+instituteId);
  }

  //update the institute by instituteId and institute details
  public editInstitute(instituteId:number, institute:Institute): Observable<Institute>{
    return this.http.put<Institute>(`http://localhost:8080/admin/editInstitute/`+instituteId,institute);
  }

  //delete the institute by instituteId
  public deleteInstitute(instituteId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<String>(`http://localhost:8080/admin/deleteInstitute/`+instituteId,requestOptions);
  }

   //get the list of courses in institutes
   public viewCoursesFromInstitute(instituteId : number): Observable<Courses[]>{
    return this.http.get<Courses[]>(`http://localhost:8080/admin/findByInstituteId/`+instituteId);
  }

  //add the institutes courses
  public addCourse(newcourse:Courses): Observable<any>{
    return this.http.post<Courses>(`http://localhost:8080/admin/addCourse`,newcourse);
  }

  //delete the course by courseId
  public deleteCourse(courseId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<String>(`http://localhost:8080/admin/deleteCourse/`+courseId,requestOptions);
  }

  //get the course by courseId
  public getCourseById(courseId : number): Observable<Courses>{
    return this.http.get<Courses>(`http://localhost:8080/admin/getcourseById/`+courseId);
  }


   //update the institute by instituteId and institute details
   public editCourse(courseId:number, updatedCourse:Courses): Observable<Courses>{
    return this.http.put<Courses>(`http://localhost:8080/admin/editCourse/`+courseId,updatedCourse);
  }
}
