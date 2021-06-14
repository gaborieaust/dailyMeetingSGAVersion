//package com.example.dailymeeting.model;
//
//import org.springframework.core.serializer.Serializer;
//
//import java.io.Serializable;
//import java.util.Objects;
//
//public class ParticipationId implements Serializable {
//    private Long userIdx;
//    private Long meetingIdx;
//
//    public ParticipationId(Long userIdx, Long meetingIdx) {
//        this.userIdx = userIdx;
//        this.meetingIdx = meetingIdx;
//    }
//
//    public Long getUserIdx() {
//        return userIdx;
//    }
//
//    public void setUserIdx(Long userIdx) {
//        this.userIdx = userIdx;
//    }
//
//    public Long getMeetingIdx() {
//        return meetingIdx;
//    }
//
//    public void setMeetingIdx(Long meetingIdx) {
//        this.meetingIdx = meetingIdx;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        ParticipationId that = (ParticipationId) o;
//        return Objects.equals(userIdx, that.userIdx) && Objects.equals(meetingIdx, that.meetingIdx);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(userIdx, meetingIdx);
//    }
//
//    public ParticipationId() {
//    }
//   }
//
