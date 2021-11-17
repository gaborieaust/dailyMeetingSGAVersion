import { Component, OnInit } from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-new-app-user',
  templateUrl: './new-app-user.component.html',
  styleUrls: ['./new-app-user.component.css']
})
export class NewAppUserComponent implements OnInit {

  constructor(
    private service : Service
  ) { }

  ngOnInit(): void {
  }
  createNewUser() {
// Start to create a new user from scratch
    let newUser = {
      "id": 9,
      "name": "Jerome",
      "isActive": true
    }
// créer le lien avec le service
    this.service.createUser(newUser).subscribe();

  }


}
