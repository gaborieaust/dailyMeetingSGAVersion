import { Component, OnInit } from '@angular/core';
import {UsersListService} from "../users-list.service";
import {AppUserMeeting} from "../appUser";

@Component({
  selector: 'app-meeting-board',
  templateUrl: './meeting-board.component.html',
  styleUrls: ['./meeting-board.component.css']
})
export class MeetingBoardComponent implements OnInit {
  //lastUser = false ;
  //meetingStarted = false;
  currentSpeaker : AppUserMeeting = {
    id: 0,
    name: "test",
    isParticipant: true,
    isSpeaking: true,
    timeKeeper: true,
      } ;
  //index : number =0;
  constructor(
    public usersListService : UsersListService
  ) { }

  ngOnInit(): void {
  }

  startMeeting () {
    this.usersListService.meetingStarted = true;
    // boucler sur la liste des appUserMeetingList et mettre dans la boucle un push si le user est participant sinon le retirer et le mettre dans une autre
    for ( let appUserMeeting  in this.usersListService.appUsersMeetingList) {
        console.log(appUserMeeting)
    }
    //générer la liste aléatoire de participants

    this.usersListService.usersListRandomlySorted();
    //remise en ordre suivant la liste dans le composant app users list
    // afficher le premier participant dans le componant meeting board
    this.currentSpeaker = this.usersListService.appUsersMeetingList[this.usersListService.index];
    //faire apparaître les boutons Break/next/end meeting
  }

  nextSpeaker () {
    if (this.usersListService.index == this.usersListService.appUsersMeetingList.length-1){
      this.usersListService.lastUser = true;
    } else {
      this.usersListService.index = this.usersListService.index + 1;
      this.currentSpeaker = this.usersListService.appUsersMeetingList[this.usersListService.index];
    }
    //sessionStorage.setItem(this.usersListService.index);
    //if (this.usersListService.index == this.usersListService.appUsersMeetingList.length){

  }



}
