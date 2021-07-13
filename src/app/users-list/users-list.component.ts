import { Component, OnInit } from '@angular/core';
import {Service} from "../service";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  appUsersList= this.service.getAppUsersList();

  constructor(
    private service: Service,
  ) {
  }

  ngOnInit(): void {
  console.log(this.appUsersList)
  }
}
