import "./Navbar.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

// The mobile drawer (and framer-motion with it) lives in its own chunk so the
// main bundle stays small; it's preloaded after window load below.
const NavbarDrawer = lazy(() => import("./NavbarDrawer"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);
  const location = useLocation();

  // Force navbar background to be chocolate brown on any route except homepage
  const forceBrown = location.pathname !== "/";

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Warm the drawer chunk once the page has loaded so the first tap is instant
  useEffect(() => {
    const preload = () => {
      import("./NavbarDrawer").then(() => setDrawerReady(true));
    };
    if (document.readyState === "complete") {
      preload();
    } else {
      window.addEventListener("load", preload, { once: true });
      return () => window.removeEventListener("load", preload);
    }
  }, []);

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
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 transition-colors duration-300 z-[999] ${forceBrown
            ? "bg-[#493423]"
            : isScrolled
              ? "bg-[#493423] shadow-lg"
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
          <Link to="/services" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            Services
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
          <Link
            to="/faq"
            className="desktop-link bubbles-font text-lg text-yellow-500 transition"
          >
            FAQ
          </Link>

          {/* Desktop Social Icons */}
          <div className="social-icons hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-500 transition"
              aria-label="Clinking Bubbles Instagram"
            >
              <FaInstagram size={30} aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-500 transition"
              aria-label="Clinking Bubbles TikTok"
            >
              <SiTiktok size={30} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-500 transition"
              aria-label="Clinking Bubbles Facebook"
            >
              <FaFacebook size={30} aria-hidden="true" />
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
            <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none" aria-label="Open navigation menu">
              <FiMenu size={30} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay (above the navbar) */}
      {(drawerReady || isOpen) && (
        <Suspense fallback={null}>
          <NavbarDrawer isOpen={isOpen} onClose={toggleMenu} />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
