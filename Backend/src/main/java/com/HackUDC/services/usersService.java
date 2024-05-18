package com.HackUDC.services;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HackUDC.model.userModel;
import com.HackUDC.repositories.userRepository;

@Service
public class usersService {

    @Autowired
    userRepository userRepository;

    public List<userModel> getUsers() {
        return userRepository.findAll();
    }

    public userModel saveUser(userModel user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public userModel getUserById(Long userId) {
        Optional<userModel> userOptional = userRepository.findById(userId);
        return userOptional.orElse(null);
    }

    public List<userModel> getRandomUsers() {
        List<userModel> allUsers = userRepository.findAll();
        Collections.shuffle(allUsers);
        return allUsers.subList(0, 3); 
    }
    
}
