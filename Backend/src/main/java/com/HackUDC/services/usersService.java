package com.HackUDC.services;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HackUDC.dtos.UserDetailsDTO;
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
        // Filtro para que no salga el administrador
        List<userModel> filteredUsers = allUsers.stream()
                                                .filter(user -> !user.getEmail().equals("admin@thesphere.com"))
                                                .collect(Collectors.toList());
        Collections.shuffle(filteredUsers);
        return filteredUsers.subList(0, Math.min(3, filteredUsers.size())); 
    }
    
    public UserDetailsDTO getUserWithPosts(Long id) {
        userModel user = userRepository.findById(id).orElse(null);
        if (user != null) {
            return new UserDetailsDTO(user);
        } else {
            return null;
        }
    }

    public List<UserDetailsDTO> getAllUsers() {
        List<userModel> users = userRepository.findAll();
        return UserDetailsDTO.fromUserModels(users);
    }

    public userModel authenticateUser(String email, String password) {
        Optional<userModel> userOptional = userRepository.findByEmailAndPassword(email, password);
        return userOptional.orElse(null);
    }

    public userModel updateUser(Long id, userModel updatedUser) {
        Optional<userModel> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            userModel user = optionalUser.get();
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setCountry(updatedUser.getCountry());
            user.setBio(updatedUser.getBio());
            user.setProfilePic(updatedUser.getProfilePic());
            user.setHeaderPic(updatedUser.getHeaderPic());
            return userRepository.save(user);
        } else {
            return null;
        }
    }

    public userModel findByEmailAndPassword(String email, String password) {
        Optional<userModel> userOptional = userRepository.findByEmailAndPassword(email, password);
        return userOptional.orElse(null);
    }
}
