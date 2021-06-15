package com.example.dailymeeting.service;

import com.example.dailymeeting.model.AppUser;

import java.util.List;

public class PresenceSignal {
   // pour ajouter un appuser à la liste des users présents.
    public static List<AppUser> AddUserToReadyUsersList (AppUser appUser, List<AppUser> appUserList) {
        appUserList.add(appUser);
        return appUserList;
    }
}
