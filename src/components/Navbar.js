import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

// Framer Motion variants for the overlay slide-down
const overlayVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Force navbar background to be black on any route except homepage
  const forceBlack = location.pathname !== "/";

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Detect scroll (for non-forced backgrounds)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scrolling on body/html when overlay is open
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
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 transition-all duration-300 z-[999] ${
          forceBlack
            ? "bg-black"
            : isScrolled
            ? "bg-black shadow-lg"
            : "bg-transparent"
        }`}
        style={{ minHeight: "64px" }}
      >
        {/* Hide Logo if the menu is open */}
        {!isOpen && (
          <Link
            to="/"
            className="text-xl md:text-3xl font-bold text-yellow-500 clinking-font transition"
          >
            Clinking Bubbles
          </Link>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            Home
          </Link>
          <Link to="/about" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            About
          </Link>
          <Link
            to="/booking-process"
            className="desktop-link bubbles-font text-lg text-yellow-500 transition"
          >
            Booking Process
          </Link>
          <Link
            to="/alcohol-calculator"
            className="desktop-link bubbles-font text-lg text-yellow-500 transition"
          >
            Alcohol Calculator
          </Link>

          {/* Desktop Social Icons */}
          <div className="social-icons hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-500 transition"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.tiktok.com/@clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-500 transition"
            >
              <SiTiktok size={30} />
            </a>
          </div>

          <Link to="/contact">
            <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Get a Quote!
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          {!isOpen && (
            <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none">
              <FiMenu size={30} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay (above the navbar) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="mobile-drawer"
          >
            <div className="drawer-content">
              {/* Close Button */}
              <button onClick={toggleMenu} className="close-btn">
                <FiX size={30} />
              </button>

              {/* Navigation Links */}
              <nav className="drawer-links">
                <Link to="/" className="bubbles-font drawer-link" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/about" className="bubbles-font drawer-link" onClick={toggleMenu}>
                  About
                </Link>
                <Link
                  to="/booking-process"
                  className="bubbles-font drawer-link"
                  onClick={toggleMenu}
                >
                  Booking Process
                </Link>
                <Link
                  to="/alcohol-calculator"
                  className="bubbles-font drawer-link"
                  onClick={toggleMenu}
                >
                  Alcohol Calculator
                </Link>
                <Link
                  to="/contact"
                  className="bubbles-font drawer-link quote-btn"
                  onClick={toggleMenu}
                >
                  Get a Quote!
                </Link>
              </nav>

              {/* Social Icons */}
              <div className="drawer-social">
                <a
                  href="https://www.instagram.com/clinkingbubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://www.tiktok.com/@clinkingbubbles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                >
                  <SiTiktok size={30} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
