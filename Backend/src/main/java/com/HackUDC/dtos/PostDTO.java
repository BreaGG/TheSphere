package com.HackUDC.dtos;

import java.util.List;
import java.util.stream.Collectors;

import com.HackUDC.model.PostCategory;
import com.HackUDC.model.postModel;
import com.HackUDC.model.userModel;

import lombok.Data;

@Data
public class PostDTO {
    private Long id;
    private String title;
    private String description;
    private String media;
    private PostCategory category;
    private UserDTO user; // Añadimos el campo user

    @Data
    public static class UserDTO {
        private Long id;
        private String username;
        private String profilePic;
        private String email;
        private String country;
        private String bio;
        private String headerPic;

        public UserDTO(userModel user) {
            this.id = user.getId();
            this.username = user.getUsername();
            this.profilePic = user.getProfilePic();
            this.email = user.getEmail();
            this.country = user.getCountry();
            this.bio = user.getBio();
            this.headerPic = user.getHeaderPic();
        }
    }

    public PostDTO(postModel post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.description = post.getDescription();
        this.media = post.getMedia();
        this.category = post.getCategory(); // Asignamos el valor de category
        this.user = new UserDTO(post.getUser()); // Asignamos el usuario propietario del post
    }

    // Método estático para convertir una lista de postModel a PostDTOs
    public static List<PostDTO> fromPostModels(List<postModel> posts) {
        return posts.stream()
                .map(PostDTO::new)
                .collect(Collectors.toList());
    }
}
