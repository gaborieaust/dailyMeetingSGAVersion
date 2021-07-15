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
          // @ts-ignore
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
    this.service.getLastMeeting().subscribe(meeting =>
      (this.service.getAllParticipationsByMeetingId(meeting.id).subscribe(participationList=> {
        // @ts-ignore
        for (let participation of participationList){
          this.appUserMeeting = this.appUsersMeetingList.find(appUserMeeting=>appUserMeeting.id===participation.appUser.id)
          console.log(participation)
          this.participate(this.appUserMeeting)
          }
        }
      )))
  }

  participate(appUserMeeting: AppUserMeeting | undefined
  ) {
    // @ts-ignore
    appUserMeeting.isParticipant = true

    this.service.createParticipation({
      id: 5,
      speakingDuration: 3000,
      appUserId: 1,
      meetingId: 1
    }).subscribe()
  }

  unParticipate(appUserMeeting
                  :
                  AppUserMeeting
  ) {
    appUserMeeting.isParticipant = false
  }

// Requête pour récupérer l'id du last meeting
// Rechercher toutes les participations avec l'id du meeting
// Si participants, leurs coches passent à true
// Si ils se cochent, ajouter les modifs en base (ajouter ou se retirer de la liste participation)


}




