import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {UsersListService} from "../users-list.service";
import {AppUserMeeting} from "../appUser";


@Component({
  selector: 'app-new-app-user',
  templateUrl: './new-app-user.component.html',
  styleUrls: ['./new-app-user.component.css']
})
export class NewAppUserComponent implements OnInit {

  constructor(
    private service : Service,
    private userlistservice : UsersListService,
  ) { }

  ngOnInit(): void {
  }
  createNewUser() {
// id max
   let list = (this.userlistservice.appUsersMeetingList.map(appUser => appUser.id));
   let nextId = Math.max.apply(Math,list)+1
// Start to create a new user from scratch
    let newUser = ({
      "id": nextId,
      "name": "Jerome",
      "isActive": true
    })
// créer le lien avec le service
    this.service.createUser(newUser).subscribe();
  }



}
