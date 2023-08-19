import {Component, OnDestroy, Input} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {EventServiceService} from "../event-service.service";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent  implements OnDestroy  {
  countdown: number | undefined;
  private intervalSubscription: Subscription | undefined;
  @Input() meetingStarted : boolean | undefined;
  disclosedCountdown : boolean = false;
  eventSubscription : Subscription | undefined;
  constructor(private eventService : EventServiceService) {

  }

  ngOnInit() {
    this.eventSubscription = this.eventService.eventEmitter.subscribe(
      (startService : boolean) => {
        if(startService == true) {
          this.startCountdown()
        }
      }
    )
  }

  startCountdown() {
    this.disclosedCountdown = true;
    this.countdown = 3;
    const interval$ = interval(1000);
    this.intervalSubscription = interval$.subscribe(() => {
      // @ts-ignore
      this.countdown--;
      if (this.countdown === 0) {
        // @ts-ignore
        this.intervalSubscription.unsubscribe(); // Arrêtez l'intervalle lorsque le décompte est terminé
        this.eventService.countDownFinished();
        this.disclosedCountdown = false;
      }
    });

  }

  ngOnDestroy() {

    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    this.eventSubscription?.unsubscribe();
  }

}
