package com.example.swd39.controller;

import com.example.swd39.service.ServicesService;
import com.example.swd39.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
@RequestMapping("api/services")
public class ServicesController {
    @Autowired
    private ServicesService servicesService;
    @Autowired
    private UserService userService;
    @GetMapping("/getAllServices")
    ResponseEntity<?> getAllServices() {
        return ResponseEntity.ok(servicesService.getAllServices());
    }

    @GetMapping("/getAllUser")
    ResponseEntity<?> getAllDocs() {
        return ResponseEntity.ok(userService.getAllUser());
    }
}
