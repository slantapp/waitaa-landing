"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const welcomeRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(
        [
          welcomeRef.current,
          headingRef.current,
          subtitleRef.current,
          buttonsRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(overlayRef.current, {
        opacity: 0,
      });

      // Animation timeline
      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          welcomeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      // ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden "
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/landingPageHero.png')",
          }}
        />
        <div ref={overlayRef} className="absolute inset-0 bg-[#1A1A1A]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-20 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full md:w-[65%]">
          {/* Welcome Text */}
          <div ref={welcomeRef} className="mb-6 sm:mb-8">
            <p className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
              WELCOME TO WAITAA
            </p>
          </div>

          {/* Main Heading */}
          <div ref={headingRef} className="mb-6 sm:mb-8">
            <h1 className="text-white text-3xl sm:text-5xl font-bold">
              The Pleasure of Variety on your Plate via QR Code
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-8 sm:mb-12">
            <p className="text-[#F1F5F9] text-base sm:text-lg max-w-lg leading-[1.3]">
              Online or on site, before or after, eat in or takeaway, the
              payment solutions for all types of venues and for all use cases.
            </p>
          </div>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <button className="bg-primary text-[#012353] px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 order-1 sm:order-none hover:scale-105">
              Get Started
            </button>

            <button className="hover:scale-105 transition-all duration-300 bg-opacity-5 bg-white border border-white border-opacity-20 text-secondary px-8 py-4 rounded-full flex items-center justify-center gap-3">
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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-60" />

      {/* Mobile specific adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
