package com.example.dailymeeting.controller;


import com.example.dailymeeting.model.AppUser;
import com.example.dailymeeting.repository.AppUserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class AppUserController {



    private AppUserRepository appUserRepository;

    public AppUserController(AppUserRepository appUserRepository){
    this.appUserRepository = appUserRepository;

    }

    // Récupérer la liste de toutes les utilisateurs de l'application

    @GetMapping
    public List<AppUser> getAllAppUser(){
    return appUserRepository.findAll();

    }

    //Récupérer un user

    @GetMapping("/{id}")
    public Optional<AppUser> getAppUser(@PathVariable Long id){
        return appUserRepository.findById(id);
    }

    //Supprimer un user
    @DeleteMapping("/{id}")
    public void deleteAppUser(@PathVariable Long id){
        appUserRepository.deleteById(id);
    }

    //Créer un user

    @PostMapping
    public void createAppUser(@RequestBody AppUser newAppUser){
        appUserRepository.save(newAppUser);
    }
    //MAJ user
    @PutMapping("/{id}")
    public ResponseEntity<AppUser> updateAppUser(@PathVariable Long id, @RequestBody AppUser updateAppUser){
        if(!updateAppUser.getId().equals(id)) {
            return new ResponseEntity<>(updateAppUser, HttpStatus.BAD_REQUEST);
        }
            return  new ResponseEntity<>(appUserRepository.save(updateAppUser), HttpStatus.OK);
    }

}




