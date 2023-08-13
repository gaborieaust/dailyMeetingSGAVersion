import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AppUser, AppUserMeeting} from "./appUser";
import {Meeting} from "./meeting";
import {Participation} from "./participation";
import {Subscription} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class Service {

  baseAPIUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getAppUsersList() {
    return this.http.get<AppUser[]>(this.baseAPIUrl + 'user/active')
  }

  getLastMeeting(){
    return this.http.get<Meeting>(this.baseAPIUrl + 'meetings/last')
  }

  getAllParticipationsByMeetingId(meetingId : number){
    return this.http.get<Participation>(this.baseAPIUrl+'participation/meeting/'+meetingId)
  }

  getParticipationBymeetingIdAndAppuserId(mId: number, uId: number | undefined){
    return this.http.get<Participation>(this.baseAPIUrl+ 'participation/meeting/' + mId + '/appuser/' + uId)
  }

  updateParticipation(participation: { appUser: AppUser | undefined; speakingDuration: number; timeKeeper: boolean; id: number; meeting: Meeting }){
    return this.http.put<Participation>(this.baseAPIUrl+'participation',participation)}

  createMeeting(meeting : Meeting){
    return this.http.post<Meeting>(this.baseAPIUrl +'meetings',meeting)
  }

  createParticipation(participation: { appUser: AppUser | undefined; speakingDuration: number; id: string; meeting: Meeting }){
    return this.http.post<Participation>(this.baseAPIUrl+'participation', participation)
  }

  deleteParticipation(id : number) {
    return this.http.delete(this.baseAPIUrl+ 'participation/' +  id)
  }

  createUser(appUser: { name: String | undefined; id: any; isActive: boolean }){
    return this.http.post<AppUser>(this.baseAPIUrl+'user',appUser)
  }

  deleteUser(id : number) {
    console.log(this.baseAPIUrl+ 'user/' +  id)
    return this.http.delete(this.baseAPIUrl+ 'user/' +id).subscribe()

  }
}
