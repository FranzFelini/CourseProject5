import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const mockItems = [
    { id: 1, name: "Plant 1", price: 10, image: "/plant2.jpg" },
    { id: 2, name: "Plant 2", price: 15, image: "/plant2.jpg" },
    { id: 3, name: "Plant 3", price: 20, image: "/plant2.jpg" },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        // Increment quantity if item already exists
        return prevItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // Add new item with quantity 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateCartItemQuantity = (index, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <Header cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/product"
          element={<ProductPage items={mockItems} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateCartItemQuantity={updateCartItemQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}
