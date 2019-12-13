import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Services } from 'app/providers/services';
import { DataManager } from 'app/providers/manager';
import { AuthService } from 'app/providers/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: AuthService, private manager:DataManager, private route:Router) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }

  login(){
    const data = {'user':this.loginForm.value.email,'senha':this.loginForm.value.password}
    this.loginService.login(data).subscribe(info=>{
      console.log(info)
      if(info['token']){
      this.manager.setUser(info['token'],data.user)
      this.loginService.setToken()
      this.route.navigateByUrl('/home')
      }
      else{
        console.log(info)
        alert("Erro ao fazer o login")
      }
    },err=>{
      alert("Erro ao fazer o login")
      console.log(err)
    })
  }

}
