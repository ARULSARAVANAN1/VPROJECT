import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  searchText!:string;

  students =[
    {
      'studentId': 1232213,
      'studentName': 'Anil',
      'enrolledCourse': 'Boxing Drills',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2238631,
      'studentName': 'Sai',
      'enrolledCourse': 'Strength Training',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    },
    {
      'studentId': 2346871,
      'studentName': 'Monaj',
      'enrolledCourse': 'Conditioning Work',
      'mobileNumber': 2971234445,
    }
  ]

  addStudent(){
    this.students.push({
      'studentId': 19003144,
      'studentName': 'Deepika',
      'enrolledCourse': 'Frontend',
      'mobileNumber': 8096254335,
    })
  }

  deleteStudent(){
    this.students.pop();
  }
}
