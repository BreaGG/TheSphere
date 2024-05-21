package com.HackUDC.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "posts")
@Data
public class postModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255,  nullable = false)
    private String title;

    @Column(nullable = false)
    private String technologies;

    @Column(length = 255,  nullable = false)
    private String subTitle;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(length = 255, nullable = true)
    private String subTitle2;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String description2;

    @Column(length = 255, nullable = true)
    private String subTitle3;

    @Column(columnDefinition = "TEXT",  nullable = true)
    private String description3;

    @Column(nullable = false)
    private String media;

    @ManyToOne
    @JoinColumn(nullable = true)
    private userModel user;

    @JsonIgnore
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<commentModel> comments;
}
