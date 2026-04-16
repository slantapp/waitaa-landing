"use client";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black max-w-7xl mx-auto my-10 rounded-4xl py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-white/80 text-sm md:text-base">
            © 2026 Waitaa. All Right Reserved
          </div>

          {/* Navigation Links */}
          <div className="flex font-semibold gap-8 md:gap-12">
            <a
              href="/privacy-policy"
              className="text-white/80 text-sm md:text-base hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-white/80 text-sm md:text-base hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/contact-us"
              className="text-white/80 text-sm md:text-base hover:text-white transition-colors"
            >
              Contact us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
