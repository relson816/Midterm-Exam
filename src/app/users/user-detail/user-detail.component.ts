import { Component, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() user: User;

  constructor(private userSvc: UserService) { }

  updateTimeStamp() {
    const date = new Date().getTime();
    this.userSvc.updateUser(this.user.$key, { timeStamp: date });
  }

  updateActive(value: boolean) {
    this.userSvc.updateUser(this.user.$key, { active: value });
  }

  deleteUser() {
    this.userSvc.deleteUser(this.user.$key);
  }

}
