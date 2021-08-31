import { Injectable } from '@angular/core';
import {AppUserMeeting} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  appUsersMeetingList: AppUserMeeting[] = [];
  constructor() {
  }
  usersListRandomlySorted(){
    this.appUsersMeetingList.sort(()=> Math.random() - 0.5);
  }

}
