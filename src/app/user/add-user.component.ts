import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { Services } from 'app/providers/services';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: Services) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("Usuário criado com sucesso!:).");
        });

  };

}