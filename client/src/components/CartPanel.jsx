import { useState } from "react";
import { createOrder } from "../api/storeApi";
import { useCart } from "../context/CartContext";

export default function CartPanel({ users, onOrderCreated }) {
  const { items, removeFromCart, clearCart } = useCart();
  const [customerId, setCustomerId] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  const placeOrder = async () => {
    if (!customerId || !shippingAddress || items.length === 0) {
      return;
    }

    setSubmitting(true);
    try {
      const order = await createOrder({
        customerId: Number(customerId),
        shippingAddress,
        items: items.map((item) => ({
          productId: item.id,
          quantity: item.quantity
        }))
      });

      clearCart();
      setShippingAddress("");
      setCustomerId("");
      onOrderCreated(order);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <aside className="cart-panel">
      <div className="section-heading">
        <h2>Your cart</h2>
        <span>{items.length} items</span>
      </div>

      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty-state">Add products to create an order.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong>
                <p>
                  {item.quantity} x ${Number(item.price).toFixed(2)}
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      <label>
        Customer
        <select
          value={customerId}
          onChange={(event) => setCustomerId(event.target.value)}
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.fullName}
            </option>
          ))}
        </select>
      </label>

      <label>
        Shipping address
        <textarea
          value={shippingAddress}
          onChange={(event) => setShippingAddress(event.target.value)}
          placeholder="Enter delivery address"
        />
      </label>

      <div className="cart-footer">
        <strong>Total: ${total.toFixed(2)}</strong>
        <button onClick={placeOrder} disabled={submitting || items.length === 0}>
          {submitting ? "Placing..." : "Place order"}
        </button>
      </div>
    </aside>
  );
}
