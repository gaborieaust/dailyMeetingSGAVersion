package com.example.dailymeeting.repository;

import com.example.dailymeeting.model.AppUser;
import com.example.dailymeeting.model.Meeting;
import com.example.dailymeeting.model.Participation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipationRepository extends JpaRepository<Participation, Long>{

}
