import { Component, OnInit } from '@angular/core';
import {UsersListService} from "../users-list.service";
import {AppUserMeeting} from "../appUser";
import {Service} from "../service";
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-meeting-board',
  templateUrl: './meeting-board.component.html',
  styleUrls: ['./meeting-board.component.css']
})
export class MeetingBoardComponent implements OnInit {
  //lastUser = false ;
  //meetingStarted = false;
  totalSpeakingDuration : number =0;
  currentSpeaker : AppUserMeeting = {
    id: 0,
    name: "test",
    isParticipant: true,
    isSpeaking: 0,
    timeKeeper: true,
      } ;
  currTime: number = 0;
  obsTimer: Observable<number> = timer(0,1000);
  subscription: Subscription | undefined

  constructor(
    private service : Service,
    public usersListService : UsersListService
  ) { }

  ngOnInit(): void {
  }

  startMeeting () {
    this.usersListService.meetingStarted = true;

    // localStorage.setItem("isMeetingStarted", JSON.stringify(this.usersListService.meetingStarted));
    // let unTest = localStorage.getItem("isMeetingStarted")

    this.usersListService.splitParticipationOrNot();

    //générer la liste aléatoire de participants
    this.usersListService.usersListRandomlySorted();

    // afficher le premier participant dans le componant meeting board
    this.currentSpeaker = this.usersListService.appUsersMeetingList[this.usersListService.index];

    this.subscription = this.obsTimer.subscribe(currTime => this.currTime = currTime)
    this.usersListService.startChrono = new Date();
    this.totalSpeakingDuration =+this.usersListService.totalIntoSeconds+ +this.usersListService.totalTimingMinutesIntoSeconds
  }

  nextSpeaker () {

    // Récupérer le dernier speaking Duration
    this.subscription?.unsubscribe()
    this.usersListService.stopChrono = new Date();

    let speakingDuration = Math.round((this.usersListService.stopChrono.getTime()
      - this.usersListService.startChrono.getTime())/1000)

    this.service.getLastMeeting().subscribe(lastMeeting => {
      this.service.getAppUsersList().subscribe(AppUsersList => {
        let appUser = AppUsersList.find(appUser => appUser.id === this.currentSpeaker.id);
        this.service.getParticipationBymeetingIdAndAppuserId(lastMeeting.id, this.currentSpeaker.id).subscribe(participation => {
          let participationToUpdate =
            {
              "appUser": appUser,
              "id": participation.id,
              "meeting": lastMeeting,
              "speakingDuration": speakingDuration,
              "timeKeeper": this.currentSpeaker.timeKeeper
            };
          this.service.updateParticipation(participationToUpdate).subscribe()

          // Save speaking duration in appUserMeeting of AppUsersMeetingList
          // @ts-ignore
          this.usersListService.appUsersMeetingList.find(appUserMeeting => appUserMeeting.id=== this.currentSpeaker.id).isSpeaking = participationToUpdate.speakingDuration
          console.log(participation.id + " ==>" + participationToUpdate.speakingDuration)

          // Changer le currentSpeaker
          if (this.usersListService.index == this.usersListService.appUsersMeetingList.length-1){
            this.currentSpeaker = this.usersListService.appUsersMeetingList[this.usersListService.index];
          } else {
            this.usersListService.index = this.usersListService.index + 1;
            this.currentSpeaker = this.usersListService.appUsersMeetingList[this.usersListService.index];
          }

          // Changer le bouton Next à EndMeeting
          if(this.usersListService.index == this.usersListService.appUsersMeetingList.length-1){
            this.usersListService.lastUser = true;
          }

          // Réinitialiser le chrono pour le prochain participant
          this.subscription = this.obsTimer.subscribe(currTime => this.currTime = currTime)
          this.usersListService.startChrono = new Date();
        })
      })
    })
    //localStorage.setItem(this.usersListService.index);
  }

  endMeeting(){

    // Récupérer le dernier speaking Duration
    this.subscription?.unsubscribe()
    this.usersListService.stopChrono = new Date();

    let speakingDuration = Math.round((this.usersListService.stopChrono.getTime()
      - this.usersListService.startChrono.getTime())/1000)

    this.service.getLastMeeting().subscribe(lastMeeting => {
      this.service.getAppUsersList().subscribe(AppUsersList => {
        let appUser = AppUsersList.find(appUser => appUser.id === this.currentSpeaker.id);
        this.service.getParticipationBymeetingIdAndAppuserId(lastMeeting.id, this.currentSpeaker.id).subscribe(participation => {
          let participationToUpdate =
            {
              "appUser": appUser,
              "id": participation.id,
              "meeting": lastMeeting,
              "speakingDuration": speakingDuration,
              "timeKeeper": this.currentSpeaker.timeKeeper
            };
          this.service.updateParticipation(participationToUpdate).subscribe()

          // Save speaking duration in appUserMeeting of AppUsersMeetingList
          // @ts-ignore
          this.usersListService.appUsersMeetingList.find(appUserMeeting => appUserMeeting.id=== this.currentSpeaker.id).isSpeaking = participationToUpdate.speakingDuration
          console.log(participation.id + " ==>" + participationToUpdate.speakingDuration)

          this.usersListService.meetingStarted= false;
        })
      })
    })
  }
}
