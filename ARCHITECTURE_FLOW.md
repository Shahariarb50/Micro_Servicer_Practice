# E-Commerce Microservices Flow

```mermaid
flowchart TD
    A["User / Customer"] --> B["React Frontend"]
    B --> C["Nginx"]
    C --> D["API Gateway"]

    D --> E["User Service<br/>Spring Boot"]
    D --> F["Product Service<br/>Spring Boot"]
    D --> G["Order Service<br/>Spring Boot"]

    E --> H[("users_db<br/>PostgreSQL")]
    F --> I[("products_db<br/>PostgreSQL")]
    G --> J[("orders_db<br/>PostgreSQL")]

    G -. fetch user details .-> E
    G -. fetch product details .-> F
```

## Notes

- Frontend is served through Nginx.
- All client API calls go through the API Gateway.
- Each Spring Boot service uses its own PostgreSQL database.
- Order Service communicates with User Service and Product Service while placing orders.
