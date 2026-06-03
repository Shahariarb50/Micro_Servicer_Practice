import { useEffect, useState } from "react";
import { getFeaturedProducts, getOrders, getProducts, getUsers } from "./api/storeApi";
import CartPanel from "./components/CartPanel";
import Hero from "./components/Hero";
import OrdersPanel from "./components/OrdersPanel";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const [productsData, featuredData, usersData, ordersData] = await Promise.all([
          getProducts(),
          getFeaturedProducts(),
          getUsers(),
          getOrders()
        ]);

        setProducts(productsData);
        setFeatured(featuredData);
        setUsers(usersData);
        setOrders(ordersData);
      } catch (err) {
        setError(err.message || "Failed to load application data.");
      }
    };

    load();
  }, []);

  const handleOrderCreated = (order) => {
    setOrders((current) => [order, ...current]);
  };

  return (
    <div className="page-shell">
      <Hero />

      {error ? <div className="error-banner">{error}</div> : null}

      <section className="featured-strip">
        {featured.map((product) => (
          <div key={product.id} className="featured-chip">
            <span>{product.category}</span>
            <strong>{product.name}</strong>
          </div>
        ))}
      </section>

      <main className="content-grid">
        <section>
          <div className="section-heading">
            <h2>Product catalog</h2>
            <span>{products.length} products</span>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <CartPanel users={users} onOrderCreated={handleOrderCreated} />
      </main>

      <OrdersPanel orders={orders} />
    </div>
  );
}
