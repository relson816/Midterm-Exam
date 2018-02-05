import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { UserService } from './user.service';

import { UsersListComponent } from '../users-list/users-list.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    UsersListComponent,
    UserFormComponent,
    UserDetailComponent,
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
