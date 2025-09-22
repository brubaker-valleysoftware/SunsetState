"use client";

import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-700/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/long-logo.png" alt="Sunset State Junk Removal Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center items-center space-x-8 flex-1">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sand hover:text-teal transition-colors duration-200 font-medium cursor-pointer"
            >
              Home
            </button>

            <div className="text-sand">|</div>

            <button
              onClick={() => scrollToSection("about")}
              className="text-sand hover:text-teal transition-colors duration-200 font-medium cursor-pointer"
            >
              About
            </button>

            <div className="text-sand">|</div>

            <button
              onClick={() => scrollToSection("services")}
              className="text-sand hover:text-teal transition-colors duration-200 font-medium cursor-pointer"
            >
              Services
            </button>

            <div className="text-sand">|</div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sand hover:text-teal transition-colors duration-200 font-medium cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => scrollToSection("contact-form")}
              className="bg-red text-sand font-montserrat text-sm font-semibold px-4 py-2 rounded-md hover:text-teal"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-teal focus:outline-none focus:text-teal drop-shadow-lg"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-15 backdrop-blur-lg rounded-lg shadow-lg">
              {/* Navigation items */}
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-center px-3 py-2 text-sand hover:text-teal rounded-md font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-center px-3 py-2 text-sand hover:text-teal rounded-md font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-center px-3 py-2 text-sand hover:text-teal rounded-md font-medium transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-center px-3 py-2 text-sand hover:text-teal rounded-md font-medium transition-colors duration-200"
              >
                Contact
              </button>

              {/* CTA Button at bottom - full width */}
              <div className="pt-3 border-t border-gray-600 flex justify-center">
                <button
                  onClick={() => scrollToSection("contact-form")}
                  className="bg-red text-sand font-montserrat text-sm font-semibold px-4 py-3 rounded-md hover:text-teal"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
