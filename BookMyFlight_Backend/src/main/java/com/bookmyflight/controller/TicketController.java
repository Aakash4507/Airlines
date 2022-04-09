package com.bookmyflight.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyflight.service.TicketService;

@CrossOrigin()
@RestController
@RequestMapping("/book")
public class TicketController {
  
	@Autowired
	private TicketService ticketService;
	
	
	
	@DeleteMapping(value="/remove/{ticketNumber}")
	public String removeFlight(@PathVariable int ticketNumber, HttpSession session) {

			ticketService.removeTicket(ticketNumber);
			return "Ticket cancled " + ticketNumber;

}
}