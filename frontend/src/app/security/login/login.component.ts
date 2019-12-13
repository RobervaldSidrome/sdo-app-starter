import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Services } from 'app/providers/services';
import { DataManager } from 'app/providers/manager';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: Services, private manager:DataManager) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }

  login(){
    const data = {'email':this.loginForm.value.email,'senha':this.loginForm.value.password}
    this.loginService.login(data).subscribe(user=>{
      this.manager.setUser(user['token'],data.email)
      
    })
  }

}
