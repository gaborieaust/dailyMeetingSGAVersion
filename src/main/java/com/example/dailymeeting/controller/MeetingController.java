package com.example.dailymeeting.controller;

import com.example.dailymeeting.model.Meeting;
import com.example.dailymeeting.repository.MeetingRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/meetings")
public class MeetingController {

    private MeetingRepository meetingRepository;

    public MeetingController(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    // Récupérer la liste de tous les meetings

    @GetMapping
    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    // Créer un meeting

    @PostMapping
    public void createMeeting(@RequestBody Meeting meeting) {
        meetingRepository.save(meeting);
    }

    // Récupérer un meeting

    @GetMapping("/{id}")
    public Optional<Meeting> getMeeting(@PathVariable long id) {
        return meetingRepository.findById(id);
    }

    // Supprimer un meeting

    @DeleteMapping("/{id}")
    public void deleteMapping(@PathVariable long id) {
        meetingRepository.deleteById(id);
    }

    // Mettre à jour un meeting

    @PutMapping("/{id}")
    public ResponseEntity<Meeting> updateMeeting(@PathVariable long id, @RequestBody Meeting meeting) {
        if (!meeting.getId().equals(id)) {
            return new ResponseEntity<>(meeting, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(meetingRepository.save(meeting), HttpStatus.OK);
    }
}



