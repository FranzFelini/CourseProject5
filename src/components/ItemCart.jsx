import { AnimatePresence, motion } from "framer-motion";
import { Leaf, ShoppingCart, Zap } from "lucide-react";
import React, { useState } from "react";

const ItemCard = ({ item, onAddToCart }) => {
  const [interaction, setInteraction] = useState({
    isHovered: false,
    isAdded: false,
    mousePosition: { x: 0, y: 0 },
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setInteraction((prev) => ({
      ...prev,
      mousePosition: {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      },
    }));
  };

  const handleAddToCart = () => {
    onAddToCart(item);
    setInteraction((prev) => ({ ...prev, isAdded: true }));
    setTimeout(
      () => setInteraction((prev) => ({ ...prev, isAdded: false })),
      2000
    );
  };

  return (
    <motion.div
      className="relative w-full h-[500px] perspective-1000"
      onMouseEnter={() =>
        setInteraction((prev) => ({ ...prev, isHovered: true }))
      }
      onMouseLeave={() =>
        setInteraction((prev) => ({ ...prev, isHovered: false }))
      }
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-green-600 rounded-3xl overflow-hidden"
        animate={{
          rotateX: interaction.mousePosition.y * 20,
          rotateY: interaction.mousePosition.x * -20,
          scale: interaction.isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-green-500 opacity-30"
          animate={{
            rotate: interaction.isHovered ? 180 : 0,
            scale: interaction.isHovered ? 1.2 : 1,
          }}
        />

        {/* Product Image with Dynamic Transformation */}
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
          }}
          animate={{
            scale: interaction.isHovered ? 1.1 : 1,
            rotate: interaction.mousePosition.x * 10,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Product Details Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: interaction.isHovered ? 1 : 0,
            y: interaction.isHovered ? 0 : 50,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-bold text-white flex items-center">
              {item.name}
              <Leaf className="ml-2 text-green-300" size={24} />
            </h3>
            <span className="text-3xl font-bold text-green-300">
              ${item.price}
            </span>
          </div>

          <motion.button
            className={`
              w-full flex items-center justify-center py-4 rounded-full 
              ${interaction.isAdded ? "bg-green-500" : "bg-white"}
              text-black font-bold
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={interaction.isAdded}
          >
            {interaction.isAdded ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center"
                >
                  <Zap className="mr-2" />
                  Added Magically!
                </motion.div>
              </AnimatePresence>
            ) : (
              <>
                <ShoppingCart className="mr-2" />
                Add to Cart
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ItemCard;
