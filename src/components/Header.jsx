/* eslint-disable react/prop-types */
import { Home, ShoppingCart, SquareChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`
        bg-gray-800 
        shadow-lg 
        fixed 
        top-0 
        left-0 
        right-0 
        z-50 
        transition-all 
        duration-500 
        ease-in-out
        justify-end
        flex
      
        ${isHovered ? "h-20" : "h-16"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex justify-end mr-[8em]">
        <div className="flex flex-row items-center h-full relative gap-[3em] p-[2em] ">
          <p className="text-white text-2xl mr-[37em] w-[10em] font-sans font-extralight">
            Botanic Dream
          </p>
          <Link to="/" className="flex items-center group">
            <Home
              className={`
                h-8 
                w-8 
                text-white 
                transition-colors 
                group-hover:text-green-400
              `}
            />
          </Link>

          <Link
            to="/"
            className="bg-transparent text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors"
          >
            {" "}
            <SquareChevronLeft
              className="h-8 
                w-8 "
            >
              {" "}
              nesto{" "}
            </SquareChevronLeft>
          </Link>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative flex items-center text-white hover:text-green-200 transition-colors group"
            >
              <ShoppingCart
                className={`
                h-8 
                w-8 
                  text-white 
                  transition-colors 
                  group-hover:text-green-400
                `}
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-lime-500 text-white rounded-full px-2 py-1 text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
