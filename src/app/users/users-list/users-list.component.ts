import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';

import { User } from '../shared/user';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>;
  showSpinner = true;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsersList();
  }

  ngOnInit() {
    this.users.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteUsers() {
    this.userService.deleteAll();
  }
}
