# E-Commerce Microservices Demo

This project contains a Docker-based e-commerce system with:

- `client`: React storefront served by Nginx
- `gateway`: Spring Cloud Gateway entry point
- `user-service`: Spring Boot user catalog
- `product-service`: Spring Boot product catalog
- `order-service`: Spring Boot order processing
- `user-db`, `product-db`, `order-db`: PostgreSQL databases

## Run

```bash
docker compose up --build
```

## URLs

- Frontend: `http://localhost:8088`
- API Gateway: `http://localhost:4015`

## Example APIs

- `GET /api/products`
- `GET /api/products/featured`
- `GET /api/users`
- `GET /api/orders`
- `POST /api/orders`
