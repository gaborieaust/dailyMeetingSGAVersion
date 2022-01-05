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
import {User} from "../user";

@Component({
  selector: 'app-new-app-user',
  templateUrl: './new-app-user.component.html',
  styleUrls: ['./new-app-user.component.css'],
})
export class NewAppUserComponent implements OnInit {
  user : User = {} ;
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
    public userlistservice : UsersListService,
  ) { }

  ngOnInit(): void {
  }


  createNewUser() {

    // id max
    //console.log(f.value)
    // @ts-ignore
    this.nom = this.user.nom

    let list = (this.userlistservice.appUsersMeetingList.map(appUser => appUser.id));
    let nextId =1 ;
    if (list.length > 0){
    nextId = Math.max.apply(Math,list)+1
    }
    console.log(nextId)
    // Start to create a new user from scratch
    // @ts-ignore
    let newUser = ({
      "id": nextId,
      "name": this.user.nom,
      "isActive": true
    })
    console.log(newUser)
    // créer le lien avec le service
    this.service.createUser(newUser).subscribe();
    // faire appel à la liste des utilisateurs en cours
    this.userlistservice.appUsersMeetingList.push({
      "id": nextId,
      "name": this.nom,
      "isParticipant": false,
      "isSpeaking": 0,
      "timeKeeper": false,
    })
    // remettre le champ vierge
    this.user.nom="";
  }


}
