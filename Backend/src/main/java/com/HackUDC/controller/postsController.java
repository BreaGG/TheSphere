package com.HackUDC.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.HackUDC.model.postModel;
import com.HackUDC.services.postsService;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("/posts")
public class postsController {

    @Autowired
    postsService postsService;

    @GetMapping("/postsList")
    public String getPosts(Model model) {
        model.addAttribute("list", postsService.getPosts());
        postModel post = new postModel();
        model.addAttribute("post", post);
        return "/posts/postsList";
    }
    

}
