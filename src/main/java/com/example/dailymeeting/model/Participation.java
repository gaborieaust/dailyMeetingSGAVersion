package com.example.dailymeeting.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.sql.Timestamp;

@Entity
@IdClass(ParticipationId.class)
public class Participation {
    @Id
    private Long userIdx;
    @Id
    private Long meetingIdx;
    private int speakingDuration;

    public Participation(Long userIdx, Long meetingIdx, int speakingDuration) {
        this.userIdx = userIdx;
        this.meetingIdx = meetingIdx;
        this.speakingDuration = speakingDuration;
    }

    public Participation(){
    }

    public Long getUserIdx() {
        return userIdx;
    }

    public void setUserIdx(Long userIdx) {
        this.userIdx = userIdx;
    }

    public Long getMeetingIdx() {
        return meetingIdx;
    }

    public void setMeetingIdx(Long meetingIdx) {
        this.meetingIdx = meetingIdx;
    }

    public int getSpeakingDuration() {
        return speakingDuration;
    }

    public void setSpeakingDuration(int speakingDuration) {
        this.speakingDuration = speakingDuration;
    }

}
