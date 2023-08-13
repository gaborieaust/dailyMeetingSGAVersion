import {Component, OnInit} from '@angular/core';
import {Service} from "../service";
import {UsersListService} from "../users-list.service";
import {AppUser} from "../appUser";

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  constructor(private service: Service,
              private userlistservice: UsersListService) {
  }
  newUser : AppUser | undefined;
  // présente le boutton permettant d'initaliser le meeting
  // au clic: vérifie en bdd la présence ou non d'un meeting pour la date du jour
  // si oui => route vers user-list-component
  // si non => crée le meeting en bdd et lance la fonction d'initialisation de la usersMeetingList

  ngOnInit(): void {
    // to test if the meeting has been created
    this.service.getLastMeeting().subscribe(lastMeeting => {
        let lastMeetingDate: string = new Date(lastMeeting.date).toISOString().substring(0, 10);
        console.log(lastMeetingDate)
        // comparison date of the day with date of the last meeting
        let today = new Date();
        let dateOfTheDay = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate()
        console.log(dateOfTheDay)
        if (lastMeetingDate == dateOfTheDay) {
          location.assign('http://localhost:4200/meeting')
        }
      }
    )
  }

  initMeeting() {
    // todo régler l'issue lorsque deux utilisateurs cliquent en même temps sur la fonction de création d'un meeting;

    // @ts-ignore
    this.service.createMeeting({
      "date": new Date(Date.now())
    }).subscribe()
    location.assign('http://localhost:4200/meeting')
  }


}
