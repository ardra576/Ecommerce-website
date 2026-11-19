import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../store/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <main className="container page-section">
    <div className="page-intro"><span className="eyebrow">YOUR SELECTION</span><h1>Shopping cart</h1><p>{totalItems} {totalItems === 1 ? "item" : "items"} in your cart</p></div>
    {!items.length ? <div className="empty-state"><div className="empty-icon"><ShoppingBag size={30} /></div><h2>Your cart is looking a little empty</h2><p>Discover something you'll love.</p><Link to="/products" className="primary-button">Start shopping</Link></div> :
      <div className="cart-layout"><div className="cart-items">{items.map((item) => <article className="cart-item" key={item.id}><img src={item.image} alt={item.name} /><div className="cart-item-info"><Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link><span>{item.category}</span><strong>${item.price.toFixed(2)}</strong><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button></div></div><button className="remove-button" aria-label={`Remove ${item.name}`} onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={18} /></button></article>)}
      <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button><Link to="/products" className="back-link"><ArrowLeft size={16} /> Continue shopping</Link></div>
      <aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal ({totalItems} items)</span><strong>${subtotal.toFixed(2)}</strong></div><div><span>Shipping</span><strong>{subtotal >= 50 ? "Free" : "$5.00"}</strong></div><div><span>Tax</span><strong>Calculated at checkout</strong></div><div className="summary-total"><span>Total</span><strong>${(subtotal + (subtotal >= 50 ? 0 : 5)).toFixed(2)}</strong></div><button className="primary-button checkout-button" onClick={() => window.alert("Demo checkout: your cart is ready!")}>Proceed to checkout</button><p className="checkout-note">This is a frontend demo. No payment will be collected.</p></aside></div>}
  </main>;
}
