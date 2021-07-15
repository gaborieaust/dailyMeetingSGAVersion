package com.example.dailymeeting.repository;

import com.example.dailymeeting.model.Participation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParticipationRepository extends JpaRepository<Participation, Long>{

    List<Participation> findAllByMeeting_Id(Long id);
}
