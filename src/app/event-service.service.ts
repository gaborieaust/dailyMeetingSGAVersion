import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  public eventEmitter: EventEmitter <any> = new EventEmitter<any>();

  private countDownFinishedSource= new Subject<void>();

  countDownFinished$ = this.countDownFinishedSource.asObservable();

  startCountdown(startService: boolean) {
    this.eventEmitter.emit(startService);
  }

  countDownFinished() {
    this.countDownFinishedSource.next();
  }

}
