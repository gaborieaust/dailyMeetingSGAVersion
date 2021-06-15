package com.example.dailymeeting.service;

import com.example.dailymeeting.model.AppUser;

import java.util.Collections;
import java.util.List;

public class StartMeeting {
    // fonction pour randomiser la liste

   public static List<AppUser> shuffleList(List<AppUser> appUser) {
       Collections.shuffle(appUser);
       return appUser;
   }

   // fonction pour calculer le temps total du meeting
    public static int calculateMeetingTime(int speakingTimeByReadyUsers, List<AppUser> appUser){
        return speakingTimeByReadyUsers*appUser.size();
    }
}
