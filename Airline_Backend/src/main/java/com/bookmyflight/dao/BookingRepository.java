package com.bookmyflight.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmyflight.pojo.Booking;


public interface BookingRepository extends JpaRepository<Booking, Integer>{

}
