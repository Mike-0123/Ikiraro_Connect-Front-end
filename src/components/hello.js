import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaHome, FaDollarSign, FaBed } from "react-icons/fa";

const images = [
  "https://picsum.photos/seed/ik1/1200/800",
  "https://picsum.photos/seed/ik2/1200/800",
  "https://picsum.photos/seed/ik3/1200/800",
  "https://picsum.photos/seed/ik4/1200/800",
];

export default function HeroWithAnimatedBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center px-4 py-12 overflow-hidden bg-gray-50">
      {/* Background images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            currentIndex === idx ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
          style={{ backgroundImage: `url(${img})` }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" aria-hidden="true" />

      {/* Content above background */}
      <div className="relative z-20 max-w-3xl text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Tuguhaye Ikaze kuri Ikiraro Connect
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          The trustest one real estate in Rwanda. Come and explore all.
        </p>
        <button className="bg-blue-900 bg-opacity-90 hover:bg-opacity-100 px-6 py-3 rounded-lg font-semibold transition">
          Contact the Agent
        </button>
      </div>

      {/* Search Section */}
      <div className="relative z-20 mt-16 w-full max-w-5xl px-6 bg-white bg-opacity-90 rounded-lg shadow-lg py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Find Your Property
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Location */}
          <div className="flex items-center border rounded-md px-3 py-2 shadow-sm">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="w-full outline-none"
            />
          </div>

          {/* Property Type */}
          <div className="flex items-center border rounded-md px-3 py-2 shadow-sm">
            <FaHome className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Property Type"
              className="w-full outline-none"
            />
          </div>

          {/* Price Range */}
          <div className="flex items-center border rounded-md px-3 py-2 shadow-sm">
            <FaDollarSign className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Price Range"
              className="w-full outline-none"
            />
          </div>

          {/* Bedrooms */}
          <div className="flex items-center border rounded-md px-3 py-2 shadow-sm">
            <FaBed className="text-gray-500 mr-2" />
            <input
              type="number"
              min="0"
              placeholder="Bedrooms"
              className="w-full outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-blue-900 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-800 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
