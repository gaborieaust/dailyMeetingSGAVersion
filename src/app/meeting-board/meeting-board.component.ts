import { Component, OnInit } from '@angular/core';
import {UsersListService} from "../users-list.service";

@Component({
  selector: 'app-meeting-board',
  templateUrl: './meeting-board.component.html',
  styleUrls: ['./meeting-board.component.css']
})
export class MeetingBoardComponent implements OnInit {
  meetingStarted = false;
  constructor(
    private usersListService : UsersListService
  ) { }

  ngOnInit(): void {
  }

  startMeeting () {
    this.meetingStarted = true;
    //générer la liste aléatoire de participants
    this.usersListService.usersListRandomlySorted();
    //location.assign('http://localhost:4200/meeting/')
    //remise en ordre suivant la liste dans le composant app users list
    // afficher le premier participant dans le componant meeting board
    //faire apparaître les boutons Break/next/end meeting
  }
}
