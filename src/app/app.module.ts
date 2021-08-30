import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MeetingBoardComponent } from './meeting-board/meeting-board.component';
import {Router, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { InitializationComponent } from './initialization/initialization.component';
import { MainBoardComponent } from './main-board/main-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    UsersListComponent,
    MeetingBoardComponent,
    InitializationComponent,
    MainBoardComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component : InitializationComponent},
      {path:'auth', component: AuthentificationComponent},
      {path:'meeting', component: MainBoardComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
