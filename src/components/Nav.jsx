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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="items-center py-4">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-lightyellow hover:text-green-200 transition-colors duration-200 font-medium drop-shadow-lg backdrop-blur-sm px-3 py-1 rounded cursor-pointer"
            >
              Home
            </button>

            <div className="text-lightyellow">|</div>

            <button
              onClick={() => scrollToSection("about")}
              className="text-lightyellow hover:text-green-200 transition-colors duration-200 font-medium drop-shadow-lg backdrop-blur-sm px-3 py-1 rounded cursor-pointer"
            >
              About
            </button>

            <div className="text-lightyellow">|</div>

            <button
              onClick={() => scrollToSection("services")}
              className="text-lightyellow hover:text-green-200 transition-colors duration-200 font-medium drop-shadow-lg backdrop-blur-sm px-3 py-1 rounded cursor-pointer"
            >
              Services
            </button>

            <div className="text-lightyellow">|</div>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-lightyellow hover:text-green-200 transition-colors duration-200 font-medium drop-shadow-lg backdrop-blur-sm px-3 py-1 rounded cursor-pointer"
            >
              Portfolio
            </button>

            <div className="text-lightyellow">|</div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-lightyellow hover:text-green-200 transition-colors duration-200 font-medium drop-shadow-lg backdrop-blur-sm px-3 py-1 rounded cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-200 focus:outline-none focus:text-green-200 drop-shadow-lg"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-darkgreen bg-opacity-95 backdrop-blur-lg rounded-lg shadow-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-white hover:bg-green hover:bg-opacity-50 rounded-md font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-white hover:bg-green hover:bg-opacity-50 rounded-md font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-white hover:bg-green hover:bg-opacity-50 rounded-md font-medium transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-3 py-2 text-white hover:bg-green hover:bg-opacity-50 rounded-md font-medium transition-colors duration-200"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-white hover:bg-green hover:bg-opacity-50 rounded-md font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
