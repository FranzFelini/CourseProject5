/* eslint-disable react/prop-types */
import ItemCard from "../components/ItemCart";

const ProductPage = ({ items, addToCart }) => {
  if (!items || items.length === 0) {
    return (
      <p className="text-white text-center">No items available to display.</p>
    );
  }

  return (
    <div className="bg-[#203F3F] min-h-screen py-12 px-6 sm:px-12">
      <h1 className="text-4xl text-center text-white mb-[2em] font-semibold">
        Discover your true self with plants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>

      <div className="mt-[6em] text-center"></div>
    </div>
  );
};

export default ProductPage;
