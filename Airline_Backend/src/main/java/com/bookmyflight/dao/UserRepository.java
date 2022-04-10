package com.bookmyflight.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmyflight.pojo.Ticket;
import com.bookmyflight.pojo.User;


public interface UserRepository extends JpaRepository<User, Integer> {
	//Finds the User from database with matching username and password
	User findByUsernameAndPassword(String username,String password);
	
}
