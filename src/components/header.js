import React, { useState } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">YourLogo</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">Properties</a>
          <a href="#" className="hover:text-blue-300">Searching Map</a>
          <a href="#" className="hover:text-blue-300">Contact Us</a>
          <a href="#" className="hover:text-blue-300">About Us</a>
          <a
            href="#"
            className="text-white bg-blue-800 px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            Become an Agent
          </a>
          <a
            href="#"
            className="text-white bg-black flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3 1.343 3 3v2H9v-2c0-1.657 1.343-3 3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 11V9a5 5 0 00-10 0v2M5 20h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"
              />
            </svg>
            Login
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:block">
          <FaHeart className="text-blue-900 text-xl" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-blue-300">Home</a>
          <a href="#" className="block hover:text-blue-300">Properties</a>
          <a href="#" className="block hover:text-blue-300">Searching Map</a>
          <a href="#" className="block hover:text-blue-300">Contact Us</a>
          <a href="#" className="block hover:text-blue-300">About Us</a>
          <a
            href="#"
            className="text-blue-900 block px-3 py-2 rounded bg-blue-800 hover:bg-blue-700 transition-colors"
          >
            Become an Agent
          </a>
          <a
            href="#"
            className="text-white bg-black flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800 hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3 1.343 3 3v2H9v-2c0-1.657 1.343-3 3-3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 11V9a5 5 0 00-10 0v2M5 20h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"
              />
            </svg>
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
