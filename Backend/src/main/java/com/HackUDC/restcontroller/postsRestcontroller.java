package com.HackUDC.restcontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

import com.HackUDC.dtos.PostDTO;
import com.HackUDC.model.PostCategory;
import com.HackUDC.model.commentModel;
import com.HackUDC.model.postModel;
import com.HackUDC.services.postsService;

@RestController
@RequestMapping("/api")
public class postsRestcontroller {

    @Autowired
    postsService postsService;

    @GetMapping("/posts")
    public List<PostDTO> getPosts() {
        List<postModel> posts = postsService.getPosts();
        return PostDTO.fromPostModels(posts);
    }

    @PostMapping("/posts")
    public postModel savePost(@RequestBody postModel post) {
        return postsService.savePost(post);
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<?> getPostsById(@PathVariable("id") Long postId) {
    Optional<postModel> postOptional = postsService.getPostsById(postId);
    if (postOptional.isPresent()) {
        postModel post = postOptional.get();
        List<commentModel> comments = post.getComments();
        Map<String, Object> response = new HashMap<>();
        response.put("post", post);
        response.put("comments", comments);
        return ResponseEntity.ok(response);
    } else {
        return ResponseEntity.notFound().build();
    }
}

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<?> deletePost(@PathVariable("id") Long postId) {
    Optional<postModel> postOptional = postsService.getPostsById(postId);
    if (postOptional.isPresent()) {
        postModel post = postOptional.get();
        List<commentModel> comments = post.getComments();
        postsService.deletePost(postId);
        Map<String, Object> response = new HashMap<>();
        response.put("post", post);
        response.put("comments", comments);
        return ResponseEntity.ok(response);
    } else {
        return ResponseEntity.notFound().build();
    }
}


    // @GetMapping("/posts/{userId}")
    // public List<postModel> getPostByUserId(@PathVariable("userId") Long userId) {
    //     return postsService.getPostsByUserId(userId);
    // }

    @GetMapping("/posts/random")
    public List<postModel> getRandomPosts() {
        return postsService.getRandomPosts();
    }

    @GetMapping("/posts/design")
    public List<postModel> getDesignPosts() {
        return postsService.getPostsByCategory(PostCategory.DESIGN);
    }

    @GetMapping("/posts/development")
    public List<postModel> getDevelopmentPosts() {
        return postsService.getPostsByCategory(PostCategory.DEVELOPMENT);
    }
}
