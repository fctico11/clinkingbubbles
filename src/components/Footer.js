import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa"; 
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EBE6D6] text-white py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Links with separators */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-6">
          <Link
            to="/"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            Home
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/about"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            About
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/services"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            Services
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/booking-process"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            Booking Process
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/alcohol-calculator"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            Alcohol Calculator
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/faq"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            FAQ
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/contact"
            className="bubbles-font text-base text-black hover:text-yellow-500 transition"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/clinkingbubbles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Clinking Bubbles Instagram"
          >
            <div className="relative inline-block w-[30px] h-[30px]">
              <FaInstagram
                size={28}
                className="absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <FaInstagram
                size={24}
                className="absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <FaInstagram
                size={26}
                className="absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2
                          text-white hover:text-yellow-500 transition"
              />
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@clinkingbubbles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Clinking Bubbles TikTok"
          >
            <div className="relative inline-block w-[30px] h-[30px]">
              <SiTiktok
                size={30}
                className="absolute top-1/2 left-1/2
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <SiTiktok
                size={20}
                className="absolute top-1/2 left-1/2
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <SiTiktok
                size={26}
                className="absolute top-1/2 left-1/2
                          transform -translate-x-1/2 -translate-y-1/2
                          text-white hover:text-yellow-500 transition"
              />
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/clinkingbubbles" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Clinking Bubbles Facebook"
          >
            <div className="relative inline-block w-[30px] h-[30px]">
              <FaFacebookF
                size={28}
                className="absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <FaFacebookF
                size={30}
                className="absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <FaFacebookF
                size={26}
                className="absolute top-1/2 left-1/2 
                          transform -translate-x-1/2 -translate-y-1/2
                          text-white hover:text-yellow-500 transition"
              />
            </div>
          </a>

          {/* Envelope */}
          <Link to="/contact" aria-label="Contact us via email">
            <div className="relative inline-block w-[30px] h-[30px]">
              <FaEnvelope
                size={30}
                className="absolute top-1/2 left-1/2
                          transform -translate-x-1/2 -translate-y-1/2
                          text-black"
              />
              <FaEnvelope
                size={26}
                className="absolute top-1/2 left-1/2
                          transform -translate-x-1/2 -translate-y-1/2
                          text-white hover:text-yellow-500 transition"
              />
            </div>
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-gray-400">
          <h3 className="text-yellow-500 font-bold">DRINK RESPONSIBLY</h3>
          <p className="mt-2">
            This website is intended for individuals 21 years of age or older. Please drink responsibly. 
            We do not condone excessive or irresponsible alcohol consumption. Always comply with the laws and 
            regulations in your area regarding alcohol use. If you or someone you know struggles with alcohol 
            dependency, please seek help from a professional organization
            <a
              href="https://www.nj.gov/humanservices/reachnj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-1"
              aria-label="Link to professional help organization for alcohol use"
            >
              <FaExternalLinkAlt size={12} />
            </a>.
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-500 text-xs">
          © {new Date().getFullYear()} Clinking Bubbles LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
