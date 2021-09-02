package com.example.dailymeeting.service;

import com.example.dailymeeting.model.AppUser;

import java.util.Collections;
import java.util.List;

public class StartMeeting {

    // fonction pour randomiser la liste
    // Edit (depuis Angular) : fonctionnalité gérée dans le Front
   public static List<AppUser> shuffleList(List<AppUser> appUserList) {
       Collections.shuffle(appUserList);
       return appUserList;
   }

    // fonction pour calculer le temps total du meeting
    // Edit (depuis Angular) : fonctionnalité qui sera gérée dans le Front
    public static int calculateMeetingTime(int speakingTimeByReadyUsers, List<AppUser> appUserList){
        return speakingTimeByReadyUsers*appUserList.size();
    }
}
