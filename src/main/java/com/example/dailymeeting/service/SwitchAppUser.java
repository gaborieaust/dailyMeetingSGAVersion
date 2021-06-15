package com.example.dailymeeting.service;

import com.example.dailymeeting.model.AppUser;
import com.example.dailymeeting.model.Meeting;
import com.example.dailymeeting.model.Participation;
import com.example.dailymeeting.repository.ParticipationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public class SwitchAppUser {
    ParticipationRepository participationRepository;

    // renvoie le participant suivant de la liste des ready randomisée
    public AppUser switchAppUser (AppUser currentAppUser, List<AppUser> appUserList ) {
        int currentAppUserIndex = appUserList.indexOf(currentAppUser);
        return appUserList.get(currentAppUserIndex + 1);
    }

}

