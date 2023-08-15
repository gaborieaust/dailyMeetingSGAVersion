import {Injectable} from '@angular/core';
import {AppUserMeeting} from "./appUser";
import {UsersListComponent} from "./users-list/users-list.component";
import {Service} from "./service";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root',

})

export class UsersListService {
  addUserOn: boolean = true;
  numberParticipants:number = 0;
  appUsersMeetingList: AppUserMeeting[] = [];
  appUsersMeetingListIsPart: AppUserMeeting[] = [];
  appUsersMeetingListIsNotPart: AppUserMeeting[] = [];
  meetingStarted = false;
  index: number = 0;
  lastUser = false;
  startChrono = new Date();
  stopChrono = new Date();
  totalTimingMinutesIntoSeconds: number = 0;
  totalIntoSeconds :  number = 0;
  setupDuration = true;
  minutes : number  = 0;
  seconds : number =0;
  dateMeeting: string | null | undefined;
  appUserMeeting: AppUserMeeting | undefined
  constructor(
    private service: Service,
    private datePipe: DatePipe
  )
  { }



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


  ComputeTotalTime() {
    // count number of participants
    this.numberParticipants=0;
    for (const appUser of this.appUsersMeetingList) {
      if (appUser.isParticipant === true) {
        this.numberParticipants = this.numberParticipants + 1
      }
    }
    let totalTimingintoSec : number=0 ;
    console.log("total minutes into seconds : " + this.totalTimingMinutesIntoSeconds);
    totalTimingintoSec = (+this.totalTimingMinutesIntoSeconds  );
    console.log(totalTimingintoSec);
    // to handle the fact that there could be a possiblity of no participant
    if (this.numberParticipants === 0){
      this.seconds=0;
      this.minutes=0;
    }else {
      this.minutes = Math.floor((totalTimingintoSec / this.numberParticipants)/60);
      console.log (this.minutes)
      this.seconds = (totalTimingintoSec/ this.numberParticipants) - this.minutes * 60;
      totalTimingintoSec = 0 ;
    }
  }
  initialisationUsersList() {
    this.service.getLastMeeting().subscribe(lastMeeting =>
      this.service.getAllParticipationsByMeetingId(lastMeeting.id).subscribe(
        participationList =>
          // inject the list of all users actives into a new list of new objects : AppUser
          this.service.getAppUsersList().subscribe(appUsersList => {
              for (let appUser of appUsersList) {
                this.appUsersMeetingList.push({
                  "id": appUser.id,
                  "name": appUser.name,
                  "isParticipant": false,
                  "isSpeaking": 0,
                  "timeKeeper": false,
                })
              }
              this.dateMeeting = this.datePipe.transform(lastMeeting.date, 'dd/MM/yyyy');
              // Update "isParticpant" and "isTimeKeeper" in the appUsersMeetingList from th BDD
              // @ts-ignore
              for (let participation of participationList) {
                this.appUserMeeting = this.appUsersMeetingList.find(appUserMeeting => appUserMeeting.id === participation.appUser.id)
                // @ts-ignore
                this.appUserMeeting.isParticipant = true
                // @ts-ignore
                this.appUserMeeting.timeKeeper = participation.timeKeeper
              }
            }
          )))
  }

}
