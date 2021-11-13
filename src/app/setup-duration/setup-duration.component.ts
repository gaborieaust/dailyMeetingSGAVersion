import { Component, OnInit } from '@angular/core';
import {UsersListService} from "../users-list.service";

@Component({
  selector: 'app-setup-duration',
  templateUrl: './setup-duration.component.html',
  styleUrls: ['./setup-duration.component.css']
})
export class SetupDurationComponent implements OnInit {

  constructor(
    public usersListService: UsersListService) {
  }

  ngOnInit(): void {
  }


  onEnter(value : string) { // without type info
    // @ts-ignore

  }

}
