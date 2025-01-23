/* eslint-disable react/prop-types */
import { useState } from "react";

const ItemCard = ({ item, onAddToCart }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // State to track if item is added

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item);
    }
    setShowMessage(true);
    setIsAdded(true); // Disable the button
    setTimeout(() => setShowMessage(false), 1000);
  };

  return (
    <div className="bg-[#1e2d3e] p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold text-white mb-2">{item.name}</h3>
      <p className="text-lg font-extralight text-gray-300 mb-4">
        lorem ipsum cavta no endorum sum tu len orecu te nesto lupam flung
        {item.description}
      </p>
      <p className="text-lg font-semibold text-gray-300 mb-4">${item.price}</p>
      <button
        onClick={handleAddToCart}
        className={`px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform ${
          isAdded
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 hover:scale-105 text-white"
        }`}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
      {showMessage && (
        <p className="text-white mt-3 font-extralight">Item added to cart!</p>
      )}
    </div>
  );
};

export default ItemCard;
