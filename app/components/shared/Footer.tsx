"use client";

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#F4F2EA] max-w-7xl mx-auto my-10 rounded-4xl py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-[#233200] text-sm md:text-base">
            © 2025 Waitaa. All Right Reserved
          </div>

          {/* Navigation Links */}
          <div className="flex font-semibold gap-8 md:gap-12">
            <a
              href="/team"
              className="text-[#233200] text-sm md:text-base hover:text-[var(--color-primary)] transition-colors"
            >
              Team
            </a>
            <a
              href="/case-studies"
              className="text-[#233200] text-sm md:text-base hover:text-[var(--color-primary)] transition-colors"
            >
              Case Studies
            </a>
            <a
              href="/publications"
              className="text-[#233200] text-sm md:text-base hover:text-[var(--color-primary)] transition-colors"
            >
              Publications
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)]/90 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)]/90 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)]/90 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center hover:bg-[var(--color-secondary)]/90 transition-colors"
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
