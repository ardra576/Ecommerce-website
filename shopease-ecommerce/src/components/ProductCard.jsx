import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-wrap">
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-info">
        <span className="category-label">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>
          <span className="rating"><Star size={14} fill="currentColor" /> {product.rating}</span>
        </div>
        <button className="add-button" onClick={() => dispatch(addToCart(product))}><ShoppingCart size={16} /> Add to cart</button>
      </div>
    </article>
  );
}
