import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              Botanic Dream
            </h3>
            <p className="text-gray-300">
              Transforming spaces with carefully curated plants that bring life
              and serenity to your environment.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/product"
                  className="hover:text-green-300 transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/care"
                  className="hover:text-green-300 transition-colors"
                >
                  Plant Care
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-green-400">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Botanic Dream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
