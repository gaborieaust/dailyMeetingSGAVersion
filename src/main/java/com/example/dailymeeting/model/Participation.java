package com.example.dailymeeting.model;

import javax.persistence.*;

@Entity
public class Participation {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "participation_id_seq")
    @SequenceGenerator(name = "participation_id_seq", allocationSize = 1)
    private Long id;
    @ManyToOne//(fetch = FetchType.LAZY)
    //@JoinColumn (name = "appUser")
    private AppUser appUser;
    @ManyToOne//(fetch = FetchType.LAZY)
    //@JoinColumn (name = "meeting")
    private Meeting meeting;
    private int speakingDuration;
    private boolean isTimeKeeper;

    public Participation(Long id, AppUser appUser, Meeting meeting, int speakingDuration, boolean isTimeKeeper) {
        this.id = id;
        this.appUser = appUser;
        this.meeting = meeting;
        this.speakingDuration = speakingDuration;
        this.isTimeKeeper = isTimeKeeper;
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

    public boolean isTimeKeeper() {
        return isTimeKeeper;
    }

    public void setTimeKeeper(boolean timeKeeper) {
        isTimeKeeper = timeKeeper;
    }
}
