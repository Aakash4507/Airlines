package com.bookmyflight.service;

import java.util.Collection;

import com.bookmyflight.bean.Login;
import com.bookmyflight.exception.UserException;
import com.bookmyflight.pojo.User;

public interface UserService {
	
	 int createUser(User user) throws UserException;
	
	 User fetchUserById(int user_id) throws UserException;
	 
	 User validate(Login login);
	
	 public Collection<User> fetchAllUsers();
	
}
