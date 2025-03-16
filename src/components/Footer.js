import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; 
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/booking-process" className="hover:text-yellow-500 transition">Booking Process</Link>
          <Link to="/alcohol-calculator" className="hover:text-yellow-500 transition">Alcohol Calculator</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/clinkingbubbles" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://www.tiktok.com/@clinkingbubbles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok size={30} className="hover:text-yellow-500 transition" />
          </a>
          <Link to="/contact">
            <FaEnvelope size={30} className="hover:text-yellow-500 transition" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-gray-400">
          <h3 className="text-yellow-500 font-bold">DRINK RESPONSIBLY</h3>
          <p className="mt-2">
            This website is intended for individuals 21 years of age or older. Please drink responsibly. 
            We do not condone excessive or irresponsible alcohol consumption. Always comply with the laws and 
            regulations in your area regarding alcohol use. If you or someone you know struggles with alcohol 
            dependency, please seek help from a professional organization.
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-500 text-xs">
          © {new Date().getFullYear()} Clinking Bubbles Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
