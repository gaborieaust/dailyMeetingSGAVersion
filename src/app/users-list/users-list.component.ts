import {Component, Injectable, Input, OnInit, Output} from '@angular/core';
import {Service} from "../service";
import {AppUser, AppUserMeeting} from "../appUser";
import {DatePipe} from "@angular/common";
import {UsersListService} from "../users-list.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [DatePipe]

})

export class UsersListComponent implements OnInit {
  appUsersMeetingList: AppUserMeeting[] = this.usersListService.appUsersMeetingList;
  dateMeeting: string | null | undefined;
   appUserMeeting: AppUserMeeting | undefined

  constructor(
    private service: Service,
    public datePipe: DatePipe,
    public usersListService : UsersListService,
  ) {
  }

  ngOnInit(): void {
    this.usersListService.initialisationUsersList()
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
            "timeKeeper": false
          };
        this.service.createParticipation(participationToCreate).subscribe()
      })
      appUserMeeting.isParticipant = true;
      this.usersListService.ComputeTotalTime();
    })
  }

  deleteUser(appUserMeeting: AppUserMeeting){
    this.service.deleteUser(appUserMeeting.id)
    //const index = this.appUsersMeetingList.indexOf(appUserMeeting);
    this.appUsersMeetingList.splice(this.appUsersMeetingList.indexOf(appUserMeeting),1)
  }




  unParticipate(appUserMeeting
                  :
                  AppUserMeeting
  ) {
    // Delete a "participation" by getting its "Id" by "appuser id" and "meeting Id"
    this.service.getLastMeeting().subscribe(
      lastMeeting => this.service.getParticipationBymeetingIdAndAppuserId(lastMeeting.id, appUserMeeting?.id).subscribe(
        participation => this.service.deleteParticipation(participation.id).subscribe()))
    appUserMeeting.isParticipant = false
    appUserMeeting.timeKeeper = false
    this.usersListService.ComputeTotalTime();
  }

  timeKeeper(appUserMeeting: AppUserMeeting) {

    // Récupérer la liste des participations pour ce meeting
    // Si il y a un timeKeeper alors rafraichissement de la page
    // Sinon changer le timeKeeper en true dans l'API et dans le front

    this.service.getLastMeeting().subscribe(lastMeeting => this.service.getAllParticipationsByMeetingId(lastMeeting.id)
      .subscribe(participationList => {
        let timeKeeperExist = false
        // @ts-ignore
        for (let participation of participationList) {
          if (participation.timeKeeper === true) {
            timeKeeperExist = true
          }
        }
        if (timeKeeperExist) {
          location.assign('http://localhost:4200/meeting/')
        } else {
          // @ts-ignore
          appUserMeeting?.timeKeeper = true;

          this.service.getLastMeeting().subscribe(lastMeeting => {
            this.service.getAppUsersList().subscribe(AppUsersList => {
              let appUser = AppUsersList.find(appUser => appUser.id === appUserMeeting.id);
              this.service.getParticipationBymeetingIdAndAppuserId(lastMeeting.id, appUser?.id).subscribe(participation => {
                let participationToUpdate =
                  {
                    "appUser": appUser,
                    "id": participation.id,
                    "meeting": lastMeeting,
                    "speakingDuration": 0,
                    "timeKeeper": true
                  };
                this.service.updateParticipation(participationToUpdate).subscribe()
              })
            })
          })
        }
      }))
  }
}




