import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../shared/user';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {

  user: User = new User();

  constructor(private userSvc: UserService) { }
  createUser() {
    this.userSvc.createUser(this.user);
    this.user = new User(); // reset item
  }
}
