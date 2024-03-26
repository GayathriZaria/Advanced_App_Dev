package com.hashitout.dreamydelights.service;

import com.hashitout.dreamydelights.model.User;
import com.hashitout.dreamydelights.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    
    public User createUser(User user) {
        return userRepository.save(user);
    }

    
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long id, User user) {
        user.setUid(id);
        return userRepository.save(user);
    }

    
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
