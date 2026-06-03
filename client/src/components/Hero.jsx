export default function Hero() {
  return (
    <section className="hero">
      <div>
        <span className="eyebrow">Spring Boot Microservices</span>
        <h1>NovaMart keeps your storefront fast and your services clean.</h1>
        <p>
          React storefront, Nginx delivery, API Gateway routing, and independent
          Spring Boot services for users, products, and orders.
        </p>
      </div>
      <div className="hero-card">
        <p>Architecture</p>
        <strong>Frontend to Gateway to Product, User, and Order services</strong>
        <small>Each service runs with its own PostgreSQL database.</small>
      </div>
    </section>
  );
}
