import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {AppUser, AppUserMeeting} from "../appUser";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  appUsersMeetingList: AppUserMeeting[] = [];

  constructor(
    private service: Service,
  ) {
  }

  ngOnInit(): void {

    this.service.getAppUsersList().subscribe(appUsersList => {
      for (let appUser of appUsersList) {
        // @ts-ignore
        this.appUsersMeetingList.push([{
          "id": appUser.id,
          "name": appUser.name,
          "isParticipant": true,
          "isSpeaking": true,
          "isTimeKeeper": true,
        }])
        console.log(this.appUsersMeetingList)}
      }
    )
  }
}




