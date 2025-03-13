// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-yellow-500">Clinking Bubbles Co.</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-500">Home</Link>
        <Link to="/about" className="hover:text-yellow-500">About</Link>
        <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
