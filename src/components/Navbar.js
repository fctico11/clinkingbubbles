import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Force navbar to be black on any route except homepage
  const forceBlack = location.pathname !== "/";

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll to update navbar background (only if not forced black)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside the overlay content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Disable scrolling when overlay is open (set on both body and html)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 transition-all duration-300 z-[999] ${
        forceBlack ? "bg-black" : (isScrolled ? "bg-black shadow-lg" : "bg-transparent")
      }`}
      style={{ minHeight: "64px" }}
    >
      {/* Logo remains at top-left (always visible) */}
      <Link
        to="/"
        className="text-xl md:text-3xl font-bold text-yellow-500 clinking-font hover:opacity-80 transition"
      >
        Clinking Bubbles Co.
      </Link>

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
        <Link to="/booking-process" className="text-yellow-500 relative group transition">
          Booking Process
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/alcohol-calculator" className="text-yellow-500 relative group transition">
          Alcohol Calculator
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
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

      {/* Full-Screen Mobile Overlay Menu */}
      {isOpen && (
        <div ref={menuRef} className={`mobile-drawer ${isOpen ? "open" : ""}`}>
          <div className="drawer-content">
            {/* Close button in top-right; always yellow */}
            <button onClick={toggleMenu} className="close-btn">
              <FiX />
            </button>
            {/* Navigation Links */}
            <nav className="drawer-links">
              <Link to="/" className="drawer-link" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="drawer-link" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/booking-process" className="drawer-link" onClick={toggleMenu}>
                Booking Process
              </Link>
              <Link to="/alcohol-calculator" className="drawer-link" onClick={toggleMenu}>
                Alcohol Calculator
              </Link>
              <Link to="/contact" className="drawer-link quote-btn" onClick={toggleMenu}>
                Get a Quote!
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
