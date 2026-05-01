"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import testimonialsData from "@/app/data/testimonials.json";
import { Reveal } from "@/app/components/motion/reveal";

const testimonials = testimonialsData.testimonials;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [perView, setPerView] = useState(1);

  // Create infinite carousel array: [last, ...original, first]
  const infiniteTestimonials = [
    testimonials[testimonials.length - 1], // Clone of last item
    ...testimonials, // Original items
    testimonials[0], // Clone of first item
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentIndex === 0) {
      // At cloned last item, jump to real last item
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex === testimonials.length + 1) {
      // At cloned first item, jump to real first item
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex, testimonials.length]);

  useEffect(() => {
    const computePerView = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3; // lg
      if (w >= 640) return 2; // sm
      return 1;
    };

    const onResize = () => setPerView(computePerView());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Get actual index for dot indicators
  const getActualIndex = () => {
    if (currentIndex === 0) return testimonials.length - 1;
    if (currentIndex === testimonials.length + 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div className="w-full py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <Reveal variant="fadeUp">
            <h2 className="text-secondary text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal">
              What Our Clients Say About Us
            </h2>
          </Reveal>

          {/* Navigation Arrows */}
          <Reveal className="flex gap-4" variant="fadeUp" delay={0.08}>
            <button
              onClick={prevTestimonial}
              className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-[#0000004D]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-16 h-16 rounded-full bg-[#8AC602] hover:bg-primary/90 flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </Reveal>
        </div>

        {/* Testimonials Carousel (moves one item at a time) */}
        <Reveal className="relative overflow-hidden" variant="fadeUp" amount={0.2}>
          <div
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
              }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / perView)}%)`,
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => {
              return (
                <div
                  key={`card-${index}`}
                  className="shrink-0"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="rounded-3xl p-6 sm:p-8 shadow-sm h-full bg-[#F4F2EA]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden ring-1 ring-black/10">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(min-width: 640px) 48px, 44px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-secondary">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                    <p className="leading-relaxed text-secondary">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Dots Indicator */}
        <Reveal className="flex justify-center mt-8 gap-2" variant="fade" delay={0.06}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 1)} // +1 because of cloned first item
              className={`w-3 h-3 rounded-full transition-colors ${index === getActualIndex() ? "bg-gray-600" : "bg-gray-300"
                }`}
            />
          ))}
        </Reveal>
      </div>
    </div>
  );
};

export default Testimonials;
