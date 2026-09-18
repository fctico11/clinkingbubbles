import "./Navbar.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { FiMenu } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

// The mobile drawer (and framer-motion with it) lives in its own chunk so the
// main bundle stays small; it's preloaded after window load below.
const NavbarDrawer = lazy(() => import("./NavbarDrawer.jsx"));

const Navbar = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);

  // Force navbar background to be chocolate brown on any route except homepage
  const forceBrown = path !== "/";

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Warm the drawer chunk once the page has loaded so the first tap is instant
  useEffect(() => {
    const preload = () => {
      import("./NavbarDrawer.jsx").then(() => setDrawerReady(true));
    };
    if (document.readyState === "complete") {
      preload();
    } else {
      window.addEventListener("load", preload, { once: true });
      return () => window.removeEventListener("load", preload);
    }
  }, []);

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
          <a
            href="/"
            className="text-xl md:text-3xl font-bold text-yellow-500 clinking-font transition"
          >
            Clinking Bubbles
          </a>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            Home
          </a>
          <a href="/about" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            About
          </a>
          <a href="/services" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            Services
          </a>
          <a href="/packages" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            Packages
          </a>
          <a href="/service-areas" className="desktop-link bubbles-font text-lg text-yellow-500 transition">
            Service Areas
          </a>
          <a
            href="/booking-process"
            className="desktop-link bubbles-font text-lg text-yellow-500 transition"
          >
            Booking Process
          </a>
          <a
            href="/alcohol-calculator"
            className="desktop-link bubbles-font text-lg text-yellow-500 transition"
          >
            Alcohol Calculator
          </a>
          <a
            href="/faq"
            className="desktop-link bubbles-font text-lg text-yellow-500 transition"
          >
            FAQ
          </a>

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

          <a href="/contact">
            <button className="bubbles-font text-lg bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Get a Quote!
            </button>
          </a>
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
