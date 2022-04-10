package com.bookmyflight.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmyflight.pojo.Ticket;
import com.bookmyflight.pojo.User;

import java.util.List;


public interface TicketRepository extends JpaRepository<Ticket, Integer> {
	//Finds the list of tickets by user 
	List<Ticket> findByUser(User user);
}
