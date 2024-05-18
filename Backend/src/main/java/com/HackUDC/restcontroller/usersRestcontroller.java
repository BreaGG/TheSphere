package com.HackUDC.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HackUDC.dtos.UserDetailsDTO;
import com.HackUDC.model.userModel;
import com.HackUDC.services.usersService;
import com.HackUDC.repositories.userRepository;

@RestController
@RequestMapping("/api")
public class usersRestcontroller {

    @Autowired
    userRepository userRepository;

    @Autowired
    usersService usersService;

    // @GetMapping("/users")
    // public List<userModel> getUsers() {
    //     return usersService.getUsers();
    // }

    @PostMapping("/users")
    public userModel saveUser(@RequestBody userModel user) {
        return usersService.saveUser(user);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDetailsDTO> getUserWithPosts(@PathVariable Long id) {
        UserDetailsDTO userDetailsDTO = usersService.getUserWithPosts(id);
        if (userDetailsDTO != null) {
            return ResponseEntity.ok(userDetailsDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDetailsDTO>> getAllUsers() {
        List<UserDetailsDTO> users = usersService.getAllUsers();
        return ResponseEntity.ok(users);
    }


    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") Long userId) {
        usersService.deleteUser(userId);
        return "User Deleted";
    }

    @GetMapping("/users/random")
    public List<userModel> getRandomUsers() {
        return usersService.getRandomUsers();
    }

}
