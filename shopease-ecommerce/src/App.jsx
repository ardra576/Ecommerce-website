import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  return <div className="app-shell">
    <Header searchValue={searchValue} onSearchChange={setSearchValue} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products searchValue={searchValue} />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<main className="container page-section empty-state"><h1>Page not found</h1><a className="primary-button" href="/">Go home</a></main>} />
    </Routes>
    <Footer />
  </div>;
}
