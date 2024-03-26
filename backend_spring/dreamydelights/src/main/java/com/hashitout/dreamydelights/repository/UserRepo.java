package com.hashitout.dreamydelights.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hashitout.dreamydelights.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}