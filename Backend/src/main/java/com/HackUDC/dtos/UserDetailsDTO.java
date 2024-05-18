package com.HackUDC.dtos;

import java.util.List;
import java.util.stream.Collectors;

import com.HackUDC.model.postModel;
import com.HackUDC.model.userModel;

import lombok.Data;

@Data
public class UserDetailsDTO {
    private Long id;
    private String username;
    private String email;
    private String country;
    private String bio;
    private String profilePic;
    private String headerPic;
    private List<PostDTO> posts;

    public UserDetailsDTO(userModel user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.country = user.getCountry();
        this.bio = user.getBio();
        this.profilePic = user.getProfilePic();
        this.headerPic = user.getHeaderPic();
        // Convertir los postModel a PostDTOs
        this.posts = PostDTO.fromPostModels(user.getPosts());
    }

    // Método estático para convertir una lista de userModel a UserDetailsDTOs
    public static List<UserDetailsDTO> fromUserModels(List<userModel> users) {
        return users.stream()
                .map(UserDetailsDTO::new)
                .collect(Collectors.toList());
    }
}
