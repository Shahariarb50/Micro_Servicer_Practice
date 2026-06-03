package com.example.userservice.config;

import com.example.userservice.model.AppUser;
import com.example.userservice.repository.AppUserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedUsers(AppUserRepository repository) {
        return args -> {
            if (repository.count() > 0) {
                return;
            }

            repository.saveAll(List.of(
                new AppUser(null, "Amin Rahman", "amin@example.com", "Dhaka, Bangladesh", "01700000001"),
                new AppUser(null, "Nusrat Jahan", "nusrat@example.com", "Chattogram, Bangladesh", "01800000002"),
                new AppUser(null, "Tanvir Ahmed", "tanvir@example.com", "Khulna, Bangladesh", "01900000003")
            ));
        };
    }
}
