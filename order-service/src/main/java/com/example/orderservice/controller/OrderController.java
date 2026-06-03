package com.example.orderservice.controller;

import com.example.orderservice.dto.CreateOrderRequest;
import com.example.orderservice.model.OrderEntity;
import com.example.orderservice.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<OrderEntity> findAll() {
        return orderService.findAll();
    }

    @GetMapping("/{id}")
    public OrderEntity findById(@PathVariable Long id) {
        return orderService.findById(id);
    }

    @PostMapping
    public OrderEntity create(@Valid @RequestBody CreateOrderRequest request) {
        return orderService.createOrder(request);
    }
}
