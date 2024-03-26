package com.hashitout.dreamydelights.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hashitout.dreamydelights.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}
