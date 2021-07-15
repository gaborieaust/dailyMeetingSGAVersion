package com.example.dailymeeting.repository;

import com.example.dailymeeting.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.Optional;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {

    @Override
    Optional<Meeting> findById(Long aLong);

    Optional<Meeting> findFirstByOrderByDateDesc();
}

