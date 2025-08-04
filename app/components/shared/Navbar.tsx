"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-6 right-0 z-50 transition-transform duration-500 w-[90%] lg:w-[65%] left-1/2 -translate-x-1/2  ${
          isVisible ? "translate-y-0" : "-translate-y-[150%]"
        } z-50`}
      >
        <div className="bg-[#F4F2EA33] backdrop-blur-[2px] shadow-sm shadow-[#4C55FF0F]/6 rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                    <Image
                      src="/images/logo.png"
                      width={51}
                      height={35}
                      alt="logo"
                    />
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/pricing"
                  className="text-white/90 hover:text-white text-base font-medium transition-colors"
                >
                  Pricing
                </Link>
                <button className="flex items-center text-white/90 hover:text-white text-base font-medium transition-colors group">
                  Resources
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/login"
                  className="px-6 py-2.5 bg-secondary rounded-full text-white/90 hover:text-white text-base font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/get-started"
                  className="px-6 py-2.5 bg-primary text-secondary rounded-full text-base font-semibold hover:bg-[var(--color-primary)]/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white/90 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black/95 backdrop-blur-md z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center">
              <Image src="/images/logo.png" width={51} height={35} alt="logo" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 px-6 py-8 space-y-6">
            <Link
              href="/pricing"
              className="block text-lg font-medium text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <button className="w-full text-left text-lg font-medium text-white/90 hover:text-white flex items-center justify-between transition-colors">
              Resources
              <ChevronDown className="w-5 h-5" />
            </button>
            <Link
              href="/login"
              className="block text-lg font-medium text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu CTA */}
          <div className="p-6 border-t border-white/10">
            <Link
              href="/get-started"
              className="block w-full px-6 py-3 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full text-base font-semibold text-center hover:bg-[var(--color-primary)]/90 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
