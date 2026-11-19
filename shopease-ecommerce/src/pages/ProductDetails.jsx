import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { addToCart } from "../store/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const dispatch = useDispatch();
  if (!product) return <main className="container page-section empty-state"><h2>Product not found</h2><Link to="/products" className="primary-button">Back to shop</Link></main>;
  return <main className="container page-section">
    <Link to="/products" className="back-link"><ArrowLeft size={17} /> Back to products</Link>
    <div className="details-layout"><div className="details-image"><img src={product.image} alt={product.name} /></div><div className="details-copy"><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><div className="details-rating"><Star size={17} fill="currentColor" /> {product.rating} <span>· Customer favorite</span></div><div className="details-price">${product.price.toFixed(2)}</div><p>{product.description}</p><ul className="detail-points"><li>Carefully selected everyday essential</li><li>Simple, versatile design</li><li>Easy returns within 30 days</li></ul><button className="primary-button" onClick={() => dispatch(addToCart(product))}><ShoppingCart size={18} /> Add to cart</button><small className="stock-note">In stock · Ready to ship</small></div></div>
  </main>;
}
