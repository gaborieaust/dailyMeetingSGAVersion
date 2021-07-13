package com.example.dailymeeting.controller;

import com.example.dailymeeting.model.Participation;
import com.example.dailymeeting.repository.ParticipationRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/participation")
public class ParticipationController {

   private ParticipationRepository participationRepository;

    public ParticipationController(ParticipationRepository participationRepository) {
        this.participationRepository = participationRepository;
    }

    @GetMapping
    public List<Participation> getAllParticipations(){
        return participationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional getParticipation(@PathVariable Long id){
        return participationRepository.findById(id);
    }

    @PostMapping
    public void createParticipation(@RequestBody Participation newParticipation){
        participationRepository.save(newParticipation);
    }

    @PutMapping("/{id}")
    public void updateParticipation(@PathVariable Long id, @RequestBody Participation updateParticipation){
        participationRepository.save(updateParticipation);
    }

    @DeleteMapping("/{id}")
    public void deleteParticipation(@PathVariable Long id){
        participationRepository.deleteById(id);
    }
}
