package com.bookmyflight.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookmyflight.dao.TicketRepository;

@Service
public class TicketServiceImpl implements TicketService {
	
	@Autowired
	private TicketRepository trepo;
	
	@Transactional
	@Override
	public void removeTicket(int ticketNumber) {
		// TODO Auto-generated method stub
		
		    
			trepo.deleteById(ticketNumber);
			System.out.println("Deleted Ticket");
		}

}
