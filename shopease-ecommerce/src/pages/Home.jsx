import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">THE EVERYDAY EDIT</span>
          <h1>Find your next<br /><em>favorite thing.</em></h1>
          <p>Thoughtful picks for your home, style and everyday life. Discover products you'll love.</p>
          <Link to="/products" className="primary-button">Explore collection <ArrowRight size={18} /></Link>
          <div className="hero-note">Curated essentials · Simple shopping · Happy living</div>
        </div>
        <div className="hero-visual"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=90" alt="Curated lifestyle products arranged on a table" /></div>
      </section>
      <section className="benefits">
        <div><Truck /><span><b>Free shipping</b><small>On orders over $50</small></span></div>
        <div><ShieldCheck /><span><b>Secure checkout</b><small>Your details stay safe</small></span></div>
        <div><Headphones /><span><b>Here to help</b><small>Friendly customer support</small></span></div>
      </section>
      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">HANDPICKED FOR YOU</span><h2>Featured products</h2></div><Link to="/products" className="text-link">View all products <ArrowRight size={16} /></Link></div>
        <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="wide-promo"><div><span className="eyebrow">A LITTLE SOMETHING FOR YOU</span><h2>Good finds.<br />Great everyday moments.</h2><Link to="/products" className="light-button">Shop the collection <ArrowRight size={17} /></Link></div></section>
    </>
  );
}
