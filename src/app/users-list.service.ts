import { Injectable } from '@angular/core';
import {AppUserMeeting} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  appUsersMeetingList: AppUserMeeting[] = [];
  appUsersMeetingListIsPart : AppUserMeeting[] = [];
  meetingStarted = false;
  index : number =0;
  lastUser = false ;



  constructor() {
  }
  usersListRandomlySorted(){
    this.appUsersMeetingList.sort(()=> Math.random() - 0.5);
  }
  splitIntoParticipantNot(){
    // while et slice pour injecter la liste des participants dans la liste des appUsersMeetingList
    for ( let appUserMeeting  : this.appUsersMeetingList){

    }
  }


}
