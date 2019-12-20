import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/providers/auth';
import { DataManager } from 'app/providers/manager';


@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  isLogged:boolean = false
  user:string = ""
  constructor(private auth:AuthService, private manager:DataManager) {}

  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn()
    this.user = this.manager.getUser()
  }
  logout(){
    this.manager.clearData()
    window.location.href = '/login'
  } 
}
