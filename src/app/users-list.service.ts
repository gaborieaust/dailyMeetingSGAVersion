import {Injectable} from '@angular/core';
import {AppUserMeeting} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  appUsersMeetingList: AppUserMeeting[] = [];
  appUsersMeetingListIsPart: AppUserMeeting[] = [];
  appUsersMeetingListIsNotPart: AppUserMeeting[] = [];
  meetingStarted = false;
  index: number = 0;
  lastUser = false;
  startChrono = new Date();
  stopChrono = new Date();
  totalTimingMinutes : number =0;
  totalTimingSeconds : number | undefined;
  setupDuration=true;
  constructor() {
  }

  usersListRandomlySorted() {
    this.appUsersMeetingList.sort(() => Math.random() - 0.5);
  }

  splitParticipationOrNot() {
    // while et slice pour injecter la liste des participants dans la liste des appUsersMeetingList
    while (this.appUsersMeetingList.length > 0) {
      if (this.appUsersMeetingList[0].isParticipant) {
        this.appUsersMeetingListIsPart.push(this.appUsersMeetingList[0]);
        this.appUsersMeetingList.splice(0, 1)
      } else {
        this.appUsersMeetingListIsNotPart.push(this.appUsersMeetingList[0]);
        this.appUsersMeetingList.splice(0, 1)
      }
    }
    this.appUsersMeetingList = this.appUsersMeetingListIsPart;
  }
}
