import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MeetingBoardComponent } from './meeting-board/meeting-board.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    UsersListComponent,
    MeetingBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component: UsersListComponent },
      {path:'auth', component: AuthentificationComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
