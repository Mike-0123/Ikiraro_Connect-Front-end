import React from "react";
import { FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-blue-900 to-black text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-2xl font-bold tracking-wide select-none cursor-default">
            Ikiraro Connect
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Ikiraro Connect. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> <a href="mailto:support@ikiraroconnect.com" className="hover:text-blue-400 transition">support@ikiraroconnect.com</a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone /> <a href="tel:+250123456789" className="hover:text-blue-400 transition">+250 123 456 789</a>
          </p>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="cotanct" className="hover:text-blue-400 transition">Contact Us</a>
        </div>

        {/* Need Help */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
          <a href="mailto:support@ikiraroconnect.com" className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaQuestionCircle size={20} /> Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
}
