package com.HackUDC.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HackUDC.model.postModel;
import com.HackUDC.repositories.postRepository;

@Service
public class postsService {

    @Autowired
    postRepository postRepository;

    public List<postModel> getPosts() {
        return postRepository.findAll();
    }

    public postModel savePost(postModel post) {
        return postRepository.save(post);
    }

    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }

    public List<postModel> getPostsByUserId(Long userId) {
        return postRepository.findByUserId(userId);
    }

    public Optional<postModel> getPostsById(Long postId) {
        return postRepository.findById(postId);
    }
}
