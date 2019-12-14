import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { Services } from 'app/providers/services';
import { FormGroup, FormBuilder, NgForm, FormControl, ValidatorFn, AbstractControl, Form } from '@angular/forms';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {
  @ViewChild('form') form : NgForm
  confirm_senha: string

  user: User = new User();
  constructor(private router: Router, private userService: Services) {

  }
  ngAfterViewInit(){
    this.form.form.setValidators(this.checkPassword)    
  }
  checkPassword(){
    console.log(this.form)
    const confirm = document.querySelector('#confirm_senha') as any
    const senha = document.querySelector('#senha') as any
    return confirm.value === senha.value ?  null : {'password':true}  
  }

  createUser(): void {
    if(this.form.valid){
      const data = {'nome':this.user.nome,'email':this.user.email,'senha':this.user.senha}
      this.userService.createUser(data).subscribe(data=>{
        console.log(data)
      })
    }

  };

}