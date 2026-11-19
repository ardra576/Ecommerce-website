import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products({ searchValue }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const visibleProducts = useMemo(() => {
    let result = products.filter((p) => (category === "All" || p.category === category) && p.name.toLowerCase().includes(searchValue.toLowerCase()));
    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [category, sort, searchValue]);
  return <main className="container page-section">
    <div className="page-intro"><span className="eyebrow">THE SHOP</span><h1>All products</h1><p>Explore our collection of everyday favorites.</p></div>
    <div className="filter-bar"><div className="category-filters"><SlidersHorizontal size={17} />{categories.map((item) => <button key={item} className={category === item ? "filter-chip active" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div><select aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Sort: Featured</option><option value="low">Price: Low to high</option><option value="high">Price: High to low</option><option value="rating">Top rated</option></select></div>
    {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><h3>No products found</h3><p>Try another search or category.</p><button className="primary-button" onClick={() => { setCategory("All"); }}>Clear category</button></div>}
  </main>;
}
