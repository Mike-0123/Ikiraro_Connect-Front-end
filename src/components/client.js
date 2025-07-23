import React from "react";
import { FaHome, FaSmile, FaUserTie, FaAward } from "react-icons/fa";

export default function Clients() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-8 md:space-y-0 md:space-x-6">
        {/* Properties Sold */}
        <div className="flex flex-col items-center">
          <FaHome className="text-blue-700 text-5xl mb-2" />
          <span className="text-3xl font-bold">500+</span>
          <span className="text-gray-700">Properties Sold</span>
        </div>

        {/* Happy Clients */}
        <div className="flex flex-col items-center">
          <FaSmile className="text-green-500 text-5xl mb-2" />
          <span className="text-3xl font-bold">1000+</span>
          <span className="text-gray-700">Happy Clients</span>
        </div>

        {/* Expert Agents */}
        <div className="flex flex-col items-center">
          <FaUserTie className="text-purple-600 text-5xl mb-2" />
          <span className="text-3xl font-bold">50+</span>
          <span className="text-gray-700">Expert Agents</span>
        </div>

        {/* Years Experience */}
        <div className="flex flex-col items-center">
          <FaAward className="text-yellow-500 text-5xl mb-2" />
          <span className="text-3xl font-bold">15+</span>
          <span className="text-gray-700">Years Experience</span>
        </div>
      </div>
    </section>
  );
}
