package com.HackUDC.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HackUDC.model.userModel;

@Repository
public interface userRepository extends JpaRepository<userModel, Long>{

}
