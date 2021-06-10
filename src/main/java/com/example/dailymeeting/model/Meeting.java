package com.example.dailymeeting.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity

public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "meeting_id_seq")
    @SequenceGenerator(name = "meeting_id_seq", allocationSize = 1)
    private Long id;
    private LocalDateTime date;

    public Meeting() {
    }

    public Meeting(Long id, LocalDateTime date) {
        this.id = id;
        this.date = date;
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
}
