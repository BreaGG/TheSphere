package com.HackUDC.restcontroller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HackUDC.dtos.UserDetailsDTO;
import com.HackUDC.model.userModel;
import com.HackUDC.services.usersService;

import lombok.Data;

import com.HackUDC.repositories.userRepository;

@Data
class LoginRequest {
    private String email;
    private String password;
}

@RestController
@RequestMapping("/api")
public class usersRestcontroller {

    @Autowired
    userRepository userRepository;

    @Autowired
    usersService usersService;

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

    @PutMapping("/users/{id}")
    public ResponseEntity<userModel> updateUser(@PathVariable Long id, @RequestBody userModel updatedUser) {
        userModel user = usersService.updateUser(id, updatedUser);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
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

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        userModel user = usersService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (user != null) {
            if (user.getEmail().equals("admin@mail.com") && user.getPassword().equals("admin")) {
                user.setRole("admin");
                usersService.saveUser(user); // Save user with updated role
            }
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
