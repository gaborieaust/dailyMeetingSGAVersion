package com.example.dailymeeting.repository;

import com.example.dailymeeting.model.Participation;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ParticipationRepository extends JpaRepository<Participation, Long>{

    List<Participation> findAllByMeeting_Id(Long id);

    Optional<Participation> findAllByMeeting_IdAndAppUser_Id(Long mId, Long uId);
}
