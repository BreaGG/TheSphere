package com.HackUDC.restcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HackUDC.model.postModel;
import com.HackUDC.services.postsService;

@RestController
@RequestMapping("/api")
public class postsRestcontroller {

    @Autowired
    postsService postsService;

    @GetMapping("/posts")
    public List<postModel> getPosts() {
        return postsService.getPosts();
    }

    @PostMapping("/posts")
    public postModel savePost(@RequestBody postModel post) {
        return postsService.savePost(post);
    }

    @GetMapping("/posts/{id}")
    public Optional<postModel> getPostsById(@PathVariable("id") Long postId) {
        return postsService.getPostsById(postId);
    }

    @DeleteMapping("/posts/{id}")
    public String deletePost(@PathVariable("id") Long postId) {
        postsService.deletePost(postId);
        return "Post deleted successfully";
    }

    // @GetMapping("/posts/{userId}")
    // public List<postModel> getPostByUserId(@PathVariable("userId") Long userId) {
    //     return postsService.getPostsByUserId(userId);
    // }


}
