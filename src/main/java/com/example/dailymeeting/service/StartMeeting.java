package com.example.dailymeeting.service;

import com.example.dailymeeting.model.AppUser;

import java.util.Collections;
import java.util.List;

public class StartMeeting {
    // fonction pour randomiser la liste

   public static List<AppUser> shuffleList(List<AppUser> appUserList) {
       Collections.shuffle(appUserList);
       return appUserList;
   }

   // fonction pour calculer le temps total du meeting
    public static int calculateMeetingTime(int speakingTimeByReadyUsers, List<AppUser> appUserList){
        return speakingTimeByReadyUsers*appUserList.size();
    }
}
