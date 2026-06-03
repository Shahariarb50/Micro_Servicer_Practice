package com.example.orderservice.client;

import com.example.orderservice.dto.ProductSnapshot;
import com.example.orderservice.dto.UserSnapshot;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class CatalogClient {

    private final RestClient userClient;
    private final RestClient productClient;

    public CatalogClient(@Value("${services.user-service.url}") String userServiceUrl,
                         @Value("${services.product-service.url}") String productServiceUrl) {
        this.userClient = RestClient.builder()
            .baseUrl(userServiceUrl)
            .build();
        this.productClient = RestClient.builder()
            .baseUrl(productServiceUrl)
            .build();
    }

    public UserSnapshot getUser(Long userId) {
        return userClient.get()
            .uri("/users/{id}", userId)
            .retrieve()
            .body(UserSnapshot.class);
    }

    public ProductSnapshot getProduct(Long productId) {
        return productClient.get()
            .uri("/products/{id}", productId)
            .retrieve()
            .body(ProductSnapshot.class);
    }
}
