import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header({ searchValue = "", onSearchChange }) {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand"><span className="brand-mark">S</span>ShopEase<span className="brand-dot">.</span></Link>
        <form className="header-search" onSubmit={(e) => { e.preventDefault(); }}>
          <Search size={18} />
          <input aria-label="Search products" placeholder="Search for products..." value={searchValue} onChange={(e) => onSearchChange?.(e.target.value)} />
        </form>
        <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}><ShoppingBag size={19} /> Cart <span className="cart-count">{count}</span></Link>
        </nav>
      </div>
    </header>
  );
}
