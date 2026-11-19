import { createSlice } from "@reduxjs/toolkit";

const savedCart = (() => {
  try {
    return JSON.parse(localStorage.getItem("shopease-cart")) || [];
  } catch {
    return [];
  }
})();

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: savedCart },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
      localStorage.setItem("shopease-cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("shopease-cart", JSON.stringify(state.items));
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("shopease-cart", JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((product) => product.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      localStorage.setItem("shopease-cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("shopease-cart");
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
