/* eslint-disable react/prop-types */
import {
  Minus,
  Plus,
  ShoppingBag,
  SquareChevronLeft,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, updateCartItemQuantity, removeFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);

    const newTotalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  return (
    <div className="min-h-[30em] bg-gray-800 text-white p-8 mt-[4em] rounded-xl">
      <header className="max-w-4xl mx-auto mb-12 flex justify-between items-center">
        <h2 className="text-3xl font-bold flex items-center">
          <ShoppingBag className="mr-4 text-white" />
          Your Cart
        </h2>
        <Link
          to="/product"
          className="bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
        >
          {" "}
          <SquareChevronLeft> nesto </SquareChevronLeft>
        </Link>
      </header>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-200">
            Your cart is empty. Add some products to see them here!
          </p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-green-200">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2 bg-white/10 rounded-md">
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                      className="p-2 text-white disabled:opacity-50"
                    >
                      <Minus />
                    </button>
                    <span className="px-4 py-1 text-white font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, item.quantity + 1)
                      }
                      className="p-2 text-white"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-400 hover:text-red-500 transition-colors"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      )}

      <footer className="max-w-4xl mx-auto mt-12 text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Total Items</h3>
          <span className="text-xl">{totalQuantity}</span>
        </div>
        <div className="flex justify-between mt-4">
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
          onClick={() => alert("Checkout functionality coming soon!")}
        >
          Proceed to Checkout
        </button>
      </footer>
    </div>
  );
};

export default CartPage;
