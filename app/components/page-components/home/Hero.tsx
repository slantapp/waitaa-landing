"use client";

import { Play } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

const Hero = () => {
  const [heroContent] = useAutoAnimate({
    duration: 600,
    easing: "ease-out",
  });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden rounded-b-3xl scroll-mt-28"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/landingPageHero.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/50 transition-opacity duration-800" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-20 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full md:w-[65%]">
          <div ref={heroContent}>
            {/* Welcome Text */}
            <div className="mb-6 sm:mb-8">
              <p className="text-[var(--color-primary)] text-sm sm:text-base font-medium tracking-wider uppercase">
                WELCOME TO WAITAA
              </p>
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                The Pleasure of Variety on your Plate via QR Code
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mb-8 sm:mb-12">
              <p className="text-[#F1F5F9] text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
                Online or on site, before or after, eat in or takeaway, the
                payment solutions for all types of venues and for all use cases.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/get-started"
                className="bg-[var(--color-primary)] text-[var(--color-secondary)] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 order-1 sm:order-none inline-flex items-center justify-center"
              >
                Get Started
              </Link>

              <button className="transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white/20 hover:scale-105">
                <div className="w-6 h-6 bg-[#689501] rounded-full flex items-center justify-center">
                  <Play
                    className="w-3 h-3 ml-0.5 text-white"
                    fill="currentColor"
                  />
                </div>
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
