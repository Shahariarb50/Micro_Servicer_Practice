package com.example.productservice.config;

import com.example.productservice.model.Product;
import com.example.productservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedProducts(ProductRepository repository) {
        return args -> {
            if (repository.count() > 0) {
                return;
            }

            repository.saveAll(List.of(
                new Product(null, "Gaming Laptop", "Electronics", "High performance laptop for gaming and work.", new BigDecimal("1250.00"), "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80", true, 12),
                new Product(null, "Wireless Headphones", "Accessories", "Noise cancelling headset with premium sound.", new BigDecimal("180.00"), "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80", true, 25),
                new Product(null, "Minimal Desk Lamp", "Home", "Modern LED desk lamp with warm brightness control.", new BigDecimal("45.00"), "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80", false, 40),
                new Product(null, "Smart Watch", "Wearables", "Fitness and notification tracking for daily use.", new BigDecimal("210.00"), "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80", true, 18),
                new Product(null, "Travel Backpack", "Lifestyle", "Water resistant backpack with laptop compartment.", new BigDecimal("68.00"), "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", false, 30),
                new Product(null, "Mechanical Keyboard", "Accessories", "Tactile keyboard built for long sessions.", new BigDecimal("95.00"), "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80", true, 14)
            ));
        };
    }
}
