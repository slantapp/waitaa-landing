"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on the landing page
  const isLandingPage = pathname === "/";
  const isContactPage = pathname === "/contact-us";

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY <= 10);

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

  useEffect(() => {
    if (!isLandingPage) return;

    const syncFromHash = () => {
      const hash = window.location.hash?.replace("#", "");
      if (hash) setActiveSection(hash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const sectionIds = ["home", "features", "products"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      return () => {
        window.removeEventListener("hashchange", syncFromHash);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        const id = visible?.target?.id;
        if (id) setActiveSection(id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75] }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [isLandingPage]);

  const isProductsActive =
    isLandingPage && ["products", "ringa", "menu"].includes(activeSection);
  const isHomeActive = isLandingPage && activeSection === "home";
  const isFeaturesActive = isLandingPage && activeSection === "features";

  const scrollToSection = (id: string) => {
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    if (isLandingPage) {
      setActiveSection(id);
      tryScroll();
      return;
    }

    router.push(`/#${id}`);
    // Give Next a tick to render the page before scrolling
    window.setTimeout(() => {
      tryScroll();
    }, 50);
  };

  return (
    <>
      <nav
        className={`fixed top-6 right-0 z-50 transition-transform duration-500 w-[90%] lg:w-[65%] left-1/2 -translate-x-1/2  ${isVisible ? "translate-y-0" : "-translate-y-[150%]"
          } z-50`}
      >
        <div
          className={`${isLandingPage
            ? isAtTop
              ? "bg-[#F4F2EA33] backdrop-blur-[2px]"
              : "bg-black/95 backdrop-blur-md"
            : "bg-black"
            } shadow-sm shadow-[#4C55FF0F]/6 rounded-3xl`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="w-10 lg:w-12 relative">
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
                <button
                  type="button"
                  onClick={() => scrollToSection("home")}
                  className={`text-base font-medium transition-colors ${isHomeActive
                    ? "text-[var(--color-primary)]"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  Home
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("features")}
                  className={`text-base font-medium transition-colors ${isFeaturesActive
                    ? "text-[var(--color-primary)]"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  Features
                </button>

                <div
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsProductsOpen((v) => !v)}
                    className={`flex items-center text-base font-medium transition-colors group ${isProductsActive
                      ? "text-[var(--color-primary)]"
                      : "text-white/90 hover:text-white"
                      }`}
                    aria-haspopup="menu"
                    aria-expanded={isProductsOpen}
                  >
                    Products
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  </button>

                  {isProductsOpen && (
                    <div className="absolute top-full left-0 mt-3 w-44 rounded-2xl bg-black/95 backdrop-blur-md shadow-lg ring-1 ring-white/10 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setIsProductsOpen(false);
                          scrollToSection("ringa");
                        }}
                        className="w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        Ringa
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsProductsOpen(false);
                          scrollToSection("menu");
                        }}
                        className="w-full text-left px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        Menu
                      </button>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact-us"
                  className={`text-base font-medium transition-colors ${isContactPage
                    ? "text-[var(--color-primary)]"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  Contact us
                </Link>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
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
                  className="p-2 text-gray-300"
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black/95 backdrop-blur-md z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
            <button
              type="button"
              className={`block w-full text-left text-lg font-medium transition-colors ${isHomeActive
                ? "text-[var(--color-primary)]"
                : "text-white/90 hover:text-white"
                }`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("home");
              }}
            >
              Home
            </button>

            <button
              type="button"
              className={`block w-full text-left text-lg font-medium transition-colors ${isFeaturesActive
                ? "text-[var(--color-primary)]"
                : "text-white/90 hover:text-white"
                }`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("features");
              }}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => setIsMobileProductsOpen((v) => !v)}
              className={`w-full text-left text-lg font-medium flex items-center justify-between transition-colors ${isProductsActive
                ? "text-[var(--color-primary)]"
                : "text-white/90 hover:text-white"
                }`}
              aria-expanded={isMobileProductsOpen}
            >
              Products
              <ChevronDown
                className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isMobileProductsOpen && (
              <div className="pl-4 space-y-3">
                <button
                  type="button"
                  className="block w-full text-left text-base font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileProductsOpen(false);
                    scrollToSection("ringa");
                  }}
                >
                  Ringa
                </button>
                <button
                  type="button"
                  className="block w-full text-left text-base font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileProductsOpen(false);
                    scrollToSection("menu");
                  }}
                >
                  Menu
                </button>
              </div>
            )}

            <Link
              href="/contact-us"
              className={`block text-lg font-medium transition-colors ${isContactPage
                ? "text-[var(--color-primary)]"
                : "text-white/90 hover:text-white"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
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
