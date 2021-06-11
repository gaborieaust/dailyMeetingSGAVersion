package com.example.dailymeeting.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import java.sql.Timestamp;

@Entity
public class Participation {

    @Id
    private Long id;
    @ManyToOne
    private AppUser appUser;
    @ManyToOne
    private Meeting meeting;
    private int speakingDuration;

    public Participation(Long id, AppUser appUser, Meeting meeting, int speakingDuration) {
        this.id = id;
        this.appUser = appUser;
        this.meeting = meeting;
        this.speakingDuration = speakingDuration;
    }

    public Participation() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Meeting getMeeting() {
        return meeting;
    }

    public void setMeeting(Meeting meeting) {
        this.meeting = meeting;
    }

    public int getSpeakingDuration() {
        return speakingDuration;
    }

    public void setSpeakingDuration(int speakingDuration) {
        this.speakingDuration = speakingDuration;
    }
}
