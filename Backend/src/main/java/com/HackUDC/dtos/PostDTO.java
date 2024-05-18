package com.HackUDC.dtos;

import java.util.List;
import java.util.stream.Collectors;

import com.HackUDC.model.postModel;

import lombok.Data;

@Data
public class PostDTO {
    private Long id;
    private String title;
    private String description;
    private String media;

    public PostDTO(postModel post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.description = post.getDescription();
        this.media = post.getMedia(); // Añadir el campo media
    }

    // Método estático para convertir una lista de postModel a PostDTOs
    public static List<PostDTO> fromPostModels(List<postModel> posts) {
        return posts.stream()
                .map(PostDTO::new)
                .collect(Collectors.toList());
    }
}
