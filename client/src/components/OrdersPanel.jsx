export default function OrdersPanel({ orders }) {
  return (
    <section className="orders-panel">
      <div className="section-heading">
        <h2>Recent orders</h2>
        <span>{orders.length} total</span>
      </div>

      {orders.length === 0 ? (
        <p className="empty-state">No order has been placed yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article key={order.id} className="order-card">
              <div className="order-header">
                <strong>#{order.id}</strong>
                <span>{order.status}</span>
              </div>
              <p>{order.customerName}</p>
              <small>{order.shippingAddress}</small>
              <div className="order-items">
                {order.items.map((item) => (
                  <span key={item.id || `${order.id}-${item.productId}`}>
                    {item.productName} x {item.quantity}
                  </span>
                ))}
              </div>
              <strong>${Number(order.totalAmount).toFixed(2)}</strong>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
