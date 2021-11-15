import { Component, OnInit } from '@angular/core';
import {UsersListService} from "../users-list.service";
import {AppUserMeeting} from "../appUser";

@Component({
  selector: 'app-setup-duration',
  templateUrl: './setup-duration.component.html',
  styleUrls: ['./setup-duration.component.css']
})
export class SetupDurationComponent implements OnInit {
  numberParticipants: number = 0;
  appUsersMeetingList: AppUserMeeting[] = [];

  constructor(
    public usersListService: UsersListService) {
  }

  ngOnInit(): void {
  }


  onEnter(value : string) { // without type info
    // @ts-ignore

  }

}
