/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <div className="bg-[#203f3f] p-4 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold">Test Project </h1>
      <div className="flex flex-row gap-[2em]">
        {" "}
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg ml-4 transition-all duration-300 hover:bg-gray-700"
        >
          Back to Landing Page
        </Link>
        <Link
          to="/cart"
          className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Cart ({cartItems.length})
        </Link>
      </div>
    </div>
  );
};

export default Header;
