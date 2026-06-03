package com.example.orderservice.repository;

import com.example.orderservice.model.OrderEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    @Override
    @EntityGraph(attributePaths = "items")
    List<OrderEntity> findAll();

    @Override
    @EntityGraph(attributePaths = "items")
    Optional<OrderEntity> findById(Long id);
}
