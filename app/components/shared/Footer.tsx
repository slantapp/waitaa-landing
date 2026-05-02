"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black max-w-7xl mx-auto my-10 rounded-4xl py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-10 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex justify-center lg:justify-start shrink-0">
            <Image
              src="/images/logo.png"
              width={51}
              height={35}
              alt="Waitaa"
            />
          </div>

          <nav
            className="flex flex-wrap justify-center font-semibold gap-x-6 gap-y-3 sm:gap-x-8 lg:flex-1 lg:justify-center lg:px-6"
            aria-label="Footer"
          >
            <a
              href="/about-us"
              className="text-white/80 text-sm md:text-base hover:text-white transition-colors"
            >
              About us
            </a>
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
          </nav>

          <div className="flex justify-center lg:justify-end gap-3 shrink-0">
            <a
              href="https://www.instagram.com/waitaa.qr"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/15 micro-lift micro-press"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/15 micro-lift micro-press"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/waitaa"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/15 micro-lift micro-press"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-xs sm:text-sm">
          © 2026 Waitaa. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
