// Mobile full-screen drawer, split out of Navbar so framer-motion stays out
// of the main bundle. Loaded after window load (see Navbar.jsx).
import React from "react";
import { FiX } from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
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

const NavbarDrawer = ({ isOpen, onClose }) => (
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
          <button onClick={onClose} className="close-btn" aria-label="Close menu">
            <FiX size={30} />
          </button>

          {/* Navigation Links */}
          <nav className="drawer-links">
            <a href="/" className="bubbles-font drawer-link" onClick={onClose}>
              Home
            </a>
            <a href="/about" className="bubbles-font drawer-link" onClick={onClose}>
              About
            </a>
            <a href="/services" className="bubbles-font drawer-link" onClick={onClose}>
              Services
            </a>
            <a href="/packages" className="bubbles-font drawer-link" onClick={onClose}>
              Packages
            </a>
            <a href="/service-areas" className="bubbles-font drawer-link" onClick={onClose}>
              Service Areas
            </a>
            <a
              href="/booking-process"
              className="bubbles-font drawer-link"
              onClick={onClose}
            >
              Booking Process
            </a>
            <a
              href="/alcohol-calculator"
              className="bubbles-font drawer-link"
              onClick={onClose}
            >
              Alcohol Calculator
            </a>
            <a
              href="/faq"
              className="bubbles-font drawer-link"
              onClick={onClose}
            >
              FAQ
            </a>
            <a
              href="/contact"
              className="bubbles-font drawer-link quote-btn"
              onClick={onClose}
            >
              Get a Quote!
            </a>
          </nav>

          {/* Social Icons */}
          <div className="drawer-social">
            <a
              href="https://www.instagram.com/clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              aria-label="Clinking Bubbles Instagram"
            >
              <FaInstagram size={30} aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              aria-label="Clinking Bubbles TikTok"
            >
              <SiTiktok size={30} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/clinkingbubbles"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon"
              aria-label="Clinking Bubbles Facebook"
            >
              <FaFacebook size={30} aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default NavbarDrawer;
