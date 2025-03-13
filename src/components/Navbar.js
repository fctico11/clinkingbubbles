import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo with Custom Font */}
      <div className="text-xl md:text-3xl font-bold text-yellow-500 clinking-font">
        Clinking Bubbles Co.
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link to="/" className="text-yellow-500 relative group transition">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="text-yellow-500 relative group transition">
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/alcohol-calculator" className="text-yellow-500 relative group transition">
          Alcohol Calculator
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Get a Quote Button */}
        <Link to="/contact">
          <button className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
            Get a Quote!
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none">
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (Small Dropdown) */}
      {isOpen && (
        <div className="fixed top-14 right-4 w-48 bg-black border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col space-y-3 md:hidden">
          <Link to="/" className="text-yellow-500 hover:text-white transition" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="text-yellow-500 hover:text-white transition" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/alcohol-calculator" className="text-yellow-500 hover:text-white transition" onClick={toggleMenu}>
            Alcohol Calculator
          </Link>

          {/* Get a Quote Button in Mobile Menu */}
          <Link to="/contact">
            <button className="w-full bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Get a Quote!
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


