import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{CountdownModule} from 'ngx-countdown'
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MeetingBoardComponent } from './meeting-board/meeting-board.component';
import {Router, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { InitializationComponent } from './initialization/initialization.component';
import { MainBoardComponent } from './main-board/main-board.component';
import {AddUserDuringMeetingComponent} from "./adduserduringmeeting/add-user-during-meeting.component";
import {SetupDurationComponent} from "./setup-duration/setup-duration.component";
import { NewAppUserComponent } from './new-app-user/new-app-user.component';
import {DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    UsersListComponent,
    MeetingBoardComponent,
    InitializationComponent,
    MainBoardComponent,
    AddUserDuringMeetingComponent,
    SetupDurationComponent,
    NewAppUserComponent,

  ],
  imports: [
    HttpClientModule,
    CountdownModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component : InitializationComponent},
      {path:'auth', component: AuthentificationComponent},
      {path:'meeting', component: MainBoardComponent},
      ]
    ),
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
