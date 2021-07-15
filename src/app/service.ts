import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AppUser} from "./appUser";
import {Meeting} from "./meeting";


@Injectable({
  providedIn: 'root'
})
export class Service {

  baseAPIUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

// to get the list of users
  getAppUsersList() {
    return this.http.get<AppUser[]>(this.baseAPIUrl + 'user/active')
  }

  getLastMeeting(){
    return this.http.get<Meeting>(this.baseAPIUrl + 'meetings/last')
  }
}
