import {Component, OnInit} from '@angular/core';
import {Service} from "../service";
import {AppUserMeeting} from "../appUser";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  appUsersMeetingList: AppUserMeeting[] = [];
  private appUserMeeting: AppUserMeeting | undefined

  constructor(
    private service: Service,
  ) {
  }

  ngOnInit(): void {
    // inject the list of all users actives into a new list of new objects : AppUser
    this.service.getAppUsersList().subscribe(appUsersList => {
        for (let appUser of appUsersList) {
            this.appUsersMeetingList.push({
            "id": appUser.id,
            "name": appUser.name,
            "isParticipant": false,
            "isSpeaking": false,
            "isTimeKeeper": false,
          })
        }
      }
    )

    // Change "isParticipant" to "true" for each "AppuUserMeeting" who has a "participation" in the DB for this meeting
    this.service.getLastMeeting().subscribe(meeting =>
      (this.service.getAllParticipationsByMeetingId(meeting.id).subscribe(participationList => {

          // @ts-ignore
        for (let participation of participationList) {
            this.appUserMeeting = this.appUsersMeetingList.find(appUserMeeting => appUserMeeting.id === participation.appUser.id)
            console.log(participation)
            // @ts-ignore
            this.appUserMeeting.isParticipant = true
          }
        }
      )))
  }

  // Initialize a "participation" for the AppUserMeeting and change his status "isParticipant" to "true"
  participate(appUserMeeting: AppUserMeeting) {
    this.service.getLastMeeting().subscribe(lastMeeting => {
      this.service.getAppUsersList().subscribe(AppUsersList => {
        let appUser = AppUsersList.find(appUser => appUser.id === appUserMeeting.id);
        let participationToCreate =
          {
            "appUser": appUser,
            "id": '',
            "meeting": lastMeeting,
            "speakingDuration": 0,
            "isTimeKeeper" : false
          };
        this.service.createParticipation(participationToCreate).subscribe()
      })
      appUserMeeting.isParticipant = true;
    })
  }

  unParticipate(appUserMeeting
                  :
                  AppUserMeeting
  ) {
      // Delete a "participation" by getting its "Id" by "appuser id" and "meeting Id"
    this.service.getLastMeeting().subscribe(
      lastMeeting =>  this.service.getParticipationBymeetingIdAndAppuserId(lastMeeting.id,appUserMeeting?.id ).subscribe(
        participation => this.service.deleteParticipation(participation.id).subscribe()))
    appUserMeeting.isParticipant = false
  }

  timeKeeper(appUserMeeting : AppUserMeeting){

    // Récupérer la liste des participations pour ce meeting
    // Si il y a un timeKeeper alors rafraichissement de la page
    // Sinon changer le isTimeKeeper en true dans l'API et dans le front

    this.service.getAllParticipationsByMeetingId()

  }
}




