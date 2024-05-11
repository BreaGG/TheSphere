package com.HackUDC.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HackUDC.model.userModel;
import com.HackUDC.services.usersService;

@RestController
@RequestMapping("/api")
public class usersRestcontroller {

    @Autowired
    usersService usersService;

    @GetMapping("/users")
    public List<userModel> getUsers() {
        return usersService.getUsers();
    }

    @PostMapping("/users")
    public userModel saveUser(@RequestBody userModel user) {
        return usersService.saveUser(user);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") Long userId) {
        usersService.deleteUser(userId);
        return "User Deleted";
    }
}
