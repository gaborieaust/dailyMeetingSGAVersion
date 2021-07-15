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
    // inject the list of all users actives into a new list of new objects : AppUser
    this.service.getAppUsersList().subscribe(appUsersList => {
      for (let appUser of appUsersList) {
        // @ts-ignore
        this.appUsersMeetingList.push({
          "id": appUser.id,
          "name": appUser.name,
          "isParticipant": false,
          "isSpeaking": false,
          "isTimeKeeper": false,
        })
        console.log(this.appUsersMeetingList)}
      }
    )
  }

  participate(appUserMeeting : AppUserMeeting){
    appUserMeeting.isParticipant = true
  }
}




