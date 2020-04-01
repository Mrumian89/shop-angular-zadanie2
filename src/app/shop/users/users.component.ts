import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {UserStorageService} from '../../user-storage.service';
import {HttpClientService} from '../../http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }
  removeUser(id: number) {
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }

  constructor(private userStorage: UserStorageService, private httpClient: HttpClientService) {}

  getUsers() {
    this.httpClient.getUsers().subscribe(users => this.users = users);
  }

}
