import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {UsersListService} from "../users-list.service";
import {AppUserMeeting} from "../appUser";
import {FormGroup, NgForm} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'app-new-app-user',
  templateUrl: './new-app-user.component.html',
  styleUrls: ['./new-app-user.component.css'],
})
export class NewAppUserComponent implements OnInit {
  test : string | undefined;
  nom : string = "";
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
    key: 'Input',
    type: 'input',
    templateOptions: {
      label: 'new participant',
      placeholder: 'name',
      description: 'here to insert a new participant in the list',
      required: true,
    },
  },
];
    constructor(
    private service : Service,
    private userlistservice : UsersListService,
  ) { }

  ngOnInit(): void {
  }


  createNewUser(f: NgForm) {

    // id max
    console.log(f.value)
    let list = (this.userlistservice.appUsersMeetingList.map(appUser => appUser.id));
    let nextId = Math.max.apply(Math,list)+1
    // Start to create a new user from scratch
    let newUser = ({
      "id": nextId,
      "name": f.value,
      "isActive": true
    })
    console.log(newUser)
    // créer le lien avec le service
    this.service.createUser(newUser).subscribe();
    // faire appel à la liste des utilisateurs en cours
    this.userlistservice.appUsersMeetingList.push({
      "id": nextId,
      "name": f.value,
      "isParticipant": false,
      "isSpeaking": 0,
      "timeKeeper": false,
    })
  }


}
