package com.example.dailymeeting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity

public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "meeting_id_seq")
    @SequenceGenerator(name = "meeting_id_seq", allocationSize = 1)
    private Long id;

    @JsonIgnore
    @OneToMany
    private List<Participation> participationList;
    private LocalDateTime date;

    public Meeting() {
    }

    public Meeting(Long id, LocalDateTime date) {
        this.id = id;
        this.date = date;
        this.participationList = participationList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
    public List<Participation> getParticipationList() {
        return participationList;
    }

    public void setParticipationList(List<Participation> participation) {
        this.participationList = participation;
    }
}
