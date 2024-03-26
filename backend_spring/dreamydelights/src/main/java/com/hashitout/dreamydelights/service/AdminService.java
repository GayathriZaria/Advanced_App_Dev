package com.hashitout.dreamydelights.service;

import com.hashitout.dreamydelights.model.Admin;
import com.hashitout.dreamydelights.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin createAdmin() {
        Admin admin = new Admin();
        admin.setName("New Admin");
        admin.setEmail("admin@example.com");
        admin.setPassword("password123");
        admin.setPhone("1234567890");
        admin.setAddress("Admin Address");
        return adminRepository.save(admin);
    }

    public Admin getAdminById(Long id) {
        
        
        Optional<Admin> adminOptional = adminRepository.findById(id);
        return adminOptional.orElse(null);
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin updateAdmin(Long id, Admin admin) {
        
        Optional<Admin> adminOptional = adminRepository.findById(id);
        if (adminOptional.isPresent()) {
            admin.setId(id);
            return adminRepository.save(admin);
        } else {
            return null; 
        }
    }

    
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}
