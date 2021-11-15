import {Injectable} from '@angular/core';
import {AppUserMeeting} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  numberParticipants:number =0;
  appUsersMeetingList: AppUserMeeting[] = [];
  appUsersMeetingListIsPart: AppUserMeeting[] = [];
  appUsersMeetingListIsNotPart: AppUserMeeting[] = [];
  meetingStarted = false;
  index: number = 0;
  lastUser = false;
  startChrono = new Date();
  stopChrono = new Date();
  totalTimingMinutesIntoSeconds: number = 0;
  totalIntoSeconds :  number =0;
  setupDuration = true;
  minutes : number  = 0;
  seconds : number =0;
  constructor()
  {
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
  // I catch the minutes converted into seconds
  // @ts-ignore
  totalMinute($event: any) {
    this.minutes =0;
    this.totalTimingMinutesIntoSeconds = 0;
    this.totalTimingMinutesIntoSeconds = $event.target.value * 60;
    console.log(this.totalTimingMinutesIntoSeconds)
    this.ComputeTotalTime();
  }

  // I catch the seconds
  // @ts-ignore
  totalSeconds($event: any) {
    this.totalIntoSeconds =0 ;
    this.totalIntoSeconds = $event.target.value ;
    this.ComputeTotalTime();
  }

  ComputeTotalTime() {
    // count number of participants
    this.numberParticipants =0;
    for (const appUser of this.appUsersMeetingList) {
      if (appUser.isParticipant === true) {
        this.numberParticipants = this.numberParticipants + 1
      }
    }
    let totalTimingintoSec : number =0 ;
    console.log("total minutes into seconds : " + this.totalTimingMinutesIntoSeconds);
    console.log("total Into Seconds : " + this.totalIntoSeconds);
    totalTimingintoSec = (+this.totalTimingMinutesIntoSeconds + +this.totalIntoSeconds)*(+this.numberParticipants);
    console.log(totalTimingintoSec);
    this.minutes = Math.floor(totalTimingintoSec / 60);
    this.seconds = totalTimingintoSec - this.minutes * 60;
    totalTimingintoSec = 0 ;
  }
}
