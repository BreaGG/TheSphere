package com.HackUDC.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class userModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 16, unique = true)
    private String username;

    @Column(length = 16)
    private String password;

    @Column(length = 255, unique = true)
    private String email;

    @Column()
    private String country;

    @Column(columnDefinition = "TEXT", length = 255, nullable = true)
    private String bio;

    @Column(nullable = true)
    private String profilePic;

    @Column(nullable = true)
    private String headerPic;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<postModel> posts;

}
