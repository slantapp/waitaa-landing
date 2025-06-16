"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { Observer } from "gsap/Observer";

// Register GSAP plugins
// Note: Some plugins like DrawSVGPlugin, MorphSVGPlugin, SplitText, and ScrollSmoother
// are premium plugins. Only register the ones you have access to.
gsap.registerPlugin(
  ScrollTrigger,
  TextPlugin,
  Observer
  
);

// Global GSAP configuration
gsap.config({
  nullTargetWarn: false, // Disable warnings for null targets
  force3D: "auto", // Improve performance with GPU acceleration
});

// Set global defaults
gsap.defaults({
  ease: "power2.out",
  duration: 0.8,
});

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
  markers: false, // Set to true during development
  toggleActions: "play pause resume reverse",
});

// Refresh ScrollTrigger on route changes (important for Next.js)
if (typeof window !== "undefined") {
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

export default function GSAPProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Refresh ScrollTrigger after all content is loaded
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);

    // Clean up
    return () => {
      window.removeEventListener("load", handleLoad);
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
