package com.HackUDC.services;

import com.HackUDC.model.commentModel;
import com.HackUDC.repositories.CommentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public commentModel createComment(commentModel comment) {
        return commentRepository.save(comment);
    }
}
