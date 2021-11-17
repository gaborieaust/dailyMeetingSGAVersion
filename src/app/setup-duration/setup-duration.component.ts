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
// to handle the fact that we should limit the value choosed by the users.
  handleChange($event: any) {
    if ($event.target.value < 0) $event.target.value = 0;
    if ($event.target.value > 59) $event.target.value= 59;
  }

  onEnter(value : string) { // without type info
    // @ts-ignore

  }

}
