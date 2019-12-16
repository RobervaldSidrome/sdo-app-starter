import { Component, OnInit } from '@angular/core';
import { Services } from 'app/providers/services';
import { AuthService } from 'app/providers/auth';
import { DataManager } from 'app/providers/manager';
import { Router } from '@angular/router';


@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  isLogged:boolean = false
  user:string = ""
  constructor(private loginService: Services, private auth:AuthService, private manager:DataManager, private route:Router) {}

  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn()
    this.user = this.manager.getUser()
  }
  logout(){
    this.manager.clearData()
    window.location.href = '/login'
  } 
}
