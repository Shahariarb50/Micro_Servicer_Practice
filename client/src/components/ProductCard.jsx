import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-content">
        <div className="product-meta">
          <span>{product.category}</span>
          <strong>${Number(product.price).toFixed(2)}</strong>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </article>
  );
}
