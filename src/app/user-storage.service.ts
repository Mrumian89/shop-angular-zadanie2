import {Injectable} from '@angular/core';
import {User} from './shop/users/User';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() {
  }

  private users: User[] = [
    {id: 0, login: 'malgo', email: 'malgo@malgo.pl', age: 30, country: 'Polska', active: false},
    {id: 1, login: 'karo', email: 'karo@karo.pl', age: 20, country: 'Niemcy', active: true},
  ];

  private idCount: number = 2;

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  removeUser(id: number) {
    const productIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(productIndex, 1);
  }

  saveUser(user: User) {
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }
}
