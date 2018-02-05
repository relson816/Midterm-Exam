import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { User } from './user';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private basePath = '/users';

  usersRef: AngularFireList<User>;
  userRef:  AngularFireObject<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list('/users');
  }

  // Return an observable list of Items
  getUsersList(): Observable<User[]> {
    return this.usersRef.snapshotChanges().map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }

  // Return a single observable item
  getUser(key: string): Observable<User | null> {
    const userPath = `${this.basePath}/${key}`;
    const user = this.db.object(userPath).valueChanges() as Observable<User | null>;
    return user;
  }

  // Create a brand new item
  createUser(user: User): void {
    this.usersRef.push(user);
  }

  // Update an exisiting item
  updateUser(key: string, value: any): void {
    this.usersRef.update(key, value);
  }

  // Deletes a single item
  deleteUser(key: string): void {
    this.usersRef.remove(key);
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.usersRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }
}
