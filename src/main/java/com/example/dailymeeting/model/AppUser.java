package com.example.dailymeeting.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
    @SequenceGenerator(name = "user_id_seq", allocationSize = 1)
    private Long id;

    @JsonIgnore
    @OneToMany//(mappedBy = "Participation")
    private List<Participation> participationList;
    private String name;
    @JsonIgnore
    private boolean isActive;
    //private List<UserRole> roles;

    public AppUser(Long id, String name) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.participationList = participationList;
    }

    public AppUser() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public AppUser(boolean isActive) {
        this.isActive = isActive;
    }
    @JsonProperty("isActive")
    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public List<Participation> getParticipationList() {
        return participationList;
    }

    public void setParticipationList(List<Participation> participation) {
        this.participationList = participation;
    }

    @Override
    public String toString() {
        return "AppUser{" +
                "id=" + id +
                ", participationList=" + participationList +
                ", name='" + name + '\'' +
                ", isActive=" + isActive +
                '}';
    }
}