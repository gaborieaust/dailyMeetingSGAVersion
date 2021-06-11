package com.example.dailymeeting.repository;
import com.example.dailymeeting.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository <AppUser, Long> {

}
