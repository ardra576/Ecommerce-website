# ShopEase – E-commerce Frontend

A responsive e-commerce frontend built with React, Vite, React Router and Redux Toolkit.

## Features
- Home page with featured products
- Product listing with search, category filters and sorting
- Product details page
- Shopping cart: add, remove, increase and decrease quantity
- Automatic item count, subtotal, shipping and total calculations
- Cart saved in browser Local Storage
- Responsive layout for mobile, tablet and desktop

## Requirements
- Node.js (LTS recommended)
- npm

## Run the project
1. Extract the ZIP file.
2. Open the extracted `shopease-ecommerce` folder in VS Code.
3. Open the VS Code terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Production build
Run `npm run build`. Vite creates the production-ready files in the `dist` folder.

## Folder structure
```text
shopease-ecommerce/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── data/
    │   └── products.js
    ├── store/
    │   ├── store.js
    │   └── cartSlice.js
    ├── components/
    │   ├── Header.jsx
    │   ├── ProductCard.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── ProductDetails.jsx
        └── Cart.jsx
```

## State management
Redux Toolkit manages the cart globally. Product data is stored in `src/data/products.js`. The cart is persisted using browser Local Storage.

## Notes
- Product photos are loaded from Unsplash, so an internet connection is needed for those images.
- Checkout is a frontend demonstration only; it does not process payments.
- Update the project title, student details and screenshots in the README before submitting.
