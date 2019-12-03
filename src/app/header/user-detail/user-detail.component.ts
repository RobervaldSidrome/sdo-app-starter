import { Component, OnInit } from '@angular/core';
import { Services } from 'app/providers/services';


@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: Services) {}

  ngOnInit() {
  
  }

  // user(): User{
  //   return this.loginService.user
  // }
 
}
