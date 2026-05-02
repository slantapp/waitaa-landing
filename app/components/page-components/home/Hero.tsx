"use client";

import { BellRing, Play, QrCode, X } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const DEMO_VIDEO_SRC = "/video/waitaa_video.mp4";

const HERO_USE_CASES = [
  {
    sector: "Restaurants",
    title: "Turn every table into a faster, smarter checkout",
    subtitle:
      "Let guests browse menus, request service, and pay from their phone, so you serve more tables with less friction.",
  },
  {
    sector: "Clubs & Lounges",
    title: "Keep the vibe up and the queues down",
    subtitle:
      "QR ordering and payments help guests spend faster at tables and VIP sections while your team focuses on experience.",
  },
  {
    sector: "Hotels & Cafés",
    title: "Offer premium service with fewer touchpoints",
    subtitle:
      "From room-service menus to in-lobby ordering, give guests a seamless QR journey that feels modern and effortless.",
  },
  {
    sector: "Events & Pop-ups",
    title: "Scale ordering for high-traffic moments",
    subtitle:
      "Handle rush-hour spikes with a simple QR flow that reduces lines, speeds fulfillment, and improves satisfaction.",
  },
] as const;

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const demoVideoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeUseCaseIdx, setActiveUseCaseIdx] = useState(0);
  const [heroContent] = useAutoAnimate({
    duration: 600,
    easing: "ease-out",
  });

  const closeDemo = useCallback(() => setIsDemoOpen(false), []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = window.setInterval(() => {
      setActiveUseCaseIdx((i) => (i + 1) % HERO_USE_CASES.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [shouldReduceMotion]);

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

  useEffect(() => {
    if (!isDemoOpen) return;
    const el = demoVideoRef.current;
    if (!el) return;
    el.play().catch(() => { });
  }, [isDemoOpen]);

  const activeUseCase = HERO_USE_CASES[activeUseCaseIdx];

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

      {/* Floating icon chips */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="absolute right-16 top-28 rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md p-3 float-soft">
          <QrCode className="h-6 w-6 text-primary" />
        </div>
        <div className="absolute right-44 top-52 rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md p-3 float-soft-slower">
          <BellRing className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-40 mb-24 lg:mt-20 container mx-auto px-4 sm:px-6 lg:px-8 lg:h-screen flex items-center">
        <div className="w-full md:w-[65%]">
          <div ref={heroContent}>
            {/* Welcome Text */}
            <div className="mb-6 sm:mb-8">
              <p className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
                WELCOME TO WAITAA
              </p>
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={activeUseCase.sector}
                  className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {activeUseCase.title}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <div className="mb-8 sm:mb-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={activeUseCase.sector}
                  className="text-[#F1F5F9] text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                >
                  {activeUseCase.subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                href="/get-started"
                className="bg-primary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-primary/90 order-1 sm:order-0 inline-flex items-center justify-center micro-lift micro-press soft-glow"
              >
                Get Started
              </Link>

              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white/20 micro-lift micro-press"
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
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Live demo video modal */}
      {isDemoOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8"
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
          <div className="relative z-101 w-full max-w-4xl rounded-2xl border border-white/15 bg-[#0B0B0B] p-3 sm:p-4 shadow-2xl">
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
              <video
                ref={demoVideoRef}
                className="absolute inset-0 h-full w-full object-contain"
                controls
                playsInline
                muted
                preload="metadata"
                aria-label="Waitaa live demo"
              >
                <source src={DEMO_VIDEO_SRC} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
