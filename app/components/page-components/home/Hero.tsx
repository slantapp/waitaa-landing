"use client";

import { Play, X } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

/** Placeholder embed (short public clip). Replace with your Waitaa demo ID. */
const DEMO_VIDEO_EMBED_ID = "M7lc1UVf-VE";

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [heroContent] = useAutoAnimate({
    duration: 600,
    easing: "ease-out",
  });

  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  useEffect(() => {
    if (!isDemoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isDemoOpen, closeDemo]);

  return (
    <section
      id="home"
      className="relative lg:min-h-screen w-full overflow-hidden rounded-b-3xl scroll-mt-28"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="hero-bg w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/landingPageHero.webp')",
          }}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/50 transition-opacity duration-800" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-40 mb-24 lg:mt-20 container mx-auto px-4 sm:px-6 lg:px-8 lg:h-screen flex items-center">
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

              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white/20 hover:scale-105"
              >
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

      {/* Live demo video modal */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Live demo video"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeDemo}
            aria-label="Close video"
          />
          <div className="relative z-[101] w-full max-w-4xl rounded-2xl border border-white/15 bg-[#0B0B0B] p-3 sm:p-4 shadow-2xl">
            <div className="flex items-center justify-between gap-3 pb-3 px-1">
              <p className="text-white text-sm font-medium truncate">
                Live demo
              </p>
              <button
                type="button"
                onClick={closeDemo}
                className="shrink-0 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                title="Waitaa live demo"
                src={`https://www.youtube.com/embed/${DEMO_VIDEO_EMBED_ID}?rel=0&modestbranding=1&autoplay=1&mute=1`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
