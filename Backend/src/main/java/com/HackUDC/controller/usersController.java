package com.HackUDC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.HackUDC.model.userModel;
import com.HackUDC.services.usersService;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("/users")
public class usersController {

    @Autowired
    usersService usersService;

    @GetMapping("listUsers")
    public String getUsers(Model model) {
        model.addAttribute( "list", usersService.getUsers());
        userModel user = new userModel();
        model.addAttribute("user", user);
        return "/users/listUsers";
    }
    

}
