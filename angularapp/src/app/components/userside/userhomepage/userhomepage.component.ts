import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from 'src/app/class/institute';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent {

  constructor(private router: Router){}
  searchText!:string;

  institutes ?: Institute[]=[
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
    new Institute(1,"PSG CAS","https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80","Coimbatore",5),
    new Institute(2,"BIT","https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg","Sathyamangalam",4),
    new Institute(3,"SRI KRISHNA","https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg","Coimbatore",3),
  ]

  gotocourse()
  {
    this.router.navigate(['/user/courses']);
  }

}
