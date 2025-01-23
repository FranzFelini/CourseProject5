import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const mockItems = [
    { id: 1, name: "Name 1", price: 10, image: "/test.jpg" },
    { id: 2, name: "Name 2", price: 15, image: "/2.jpeg" },
    { id: 3, name: "Name 3", price: 20, image: "/3.jpeg" },
    { id: 4, name: "Name 4", price: 10, image: "/test2.jpg" },
    { id: 5, name: "Name 5", price: 15, image: "/test3.jpg" },
    { id: 6, name: "Name 6", price: 20, image: "/2.jpeg" },
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        return prevItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

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
      <Footer />
    </Router>
  );
}
