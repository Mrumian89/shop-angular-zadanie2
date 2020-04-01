import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserStorageService} from '../../../user-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../http-client.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private router: Router, private activeRoute: ActivatedRoute, private httpClient: HttpClientService) { }

  user: User = new User();

  ngOnInit(): void {
    this.getUserToEdit();
  }

  saveUsers(user: User) {
      this.httpClient.saveUser(user).subscribe(r => this.router.navigate(['/shop/users']));
  }

  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.httpClient.getUser(Number.parseInt(id)).subscribe(p => this.user = p);
      }
    });
  }
}
