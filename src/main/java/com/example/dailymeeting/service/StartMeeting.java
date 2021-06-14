package com.example.dailymeeting.service;

import com.example.dailymeeting.model.AppUser;

import java.util.Collections;
import java.util.List;

public class StartMeeting {
    // fonction pour randomiser la liste

   public static List<AppUser> shuffleList(List<AppUser> AppUser) {
       Collections.shuffle(AppUser);
       return AppUser;
   }

}
