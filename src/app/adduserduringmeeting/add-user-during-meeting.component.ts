import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {UsersListService} from "../users-list.service";
import {AppUserMeeting} from "../appUser";

@Component({
  selector: 'app-add-user-during-meeting',
  templateUrl: './add-user-during-meeting.component.html',
  styleUrls: ['./add-user-during-meeting.component.css']
})
export class AddUserDuringMeetingComponent implements OnInit {
  private appUserMeeting: AppUserMeeting | undefined;

  constructor(

    public usersListService : UsersListService
  ) {

   }

  ngOnInit(): void {



  }
  participate(appUserMeeting : AppUserMeeting ){
    // je prends mon objet appuserMeeting et je l'insère dans la list en cours
    appUserMeeting.isParticipant=true;
    this.usersListService.appUsersMeetingListIsPart.push(appUserMeeting);
    this.usersListService.appUsersMeetingListIsNotPart.splice(this.usersListService.appUsersMeetingListIsNotPart.indexOf(appUserMeeting),1)
    this.usersListService.participate(appUserMeeting);
  }
}
