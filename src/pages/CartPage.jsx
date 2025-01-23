/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
    <div className="min-h-screen bg-[#1e2d3e] text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-center text-gray-300">
          Your cart is empty. Add some products to see them here!
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#2b3d4f] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <p className="text-gray-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => {
                        updateCartItemQuantity(index, item.quantity - 1);
                      }}
                      disabled={item.quantity === 1}
                      className={`px-2 py-1 rounded-l-md bg-gray-500 text-white transition-all duration-300 ${
                        item.quantity === 1
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-700 text-white font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(index, item.quantity + 1)
                      }
                      className="px-2 py-1 rounded-r-md bg-gray-500 text-white transition-all duration-300 hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-300 mb-[3em]">
          Total Items: {totalQuantity}
        </h3>
        <h3 className="text-xl font-semibold text-gray-300 mb-[3em]">
          Total: ${totalPrice.toFixed(2)}
        </h3>
        <Link
          to="/product"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
