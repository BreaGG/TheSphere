package com.HackUDC.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "posts")
@Data
public class postModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, unique = true, nullable = false)
    private String title;

    @Column(unique = true, nullable = false)
    private String technologies;

    @Column(length = 255, unique = true, nullable = false)
    private String subTitle;

    @Column(columnDefinition = "TEXT", unique = true, nullable = false)
    private String description;

    @Column(length = 255, unique = true, nullable = true)
    private String subTitle2;

    @Column(columnDefinition = "TEXT", unique = true, nullable = true)
    private String description2;

    @Column(length = 255, unique = true, nullable = true)
    private String subTitle3;

    @Column(columnDefinition = "TEXT", unique = true, nullable = true)
    private String description3;

    @Column(unique = true, nullable = false)
    private String media;

    @ManyToOne
    @JoinColumn(nullable = true)
    private userModel user;
}
