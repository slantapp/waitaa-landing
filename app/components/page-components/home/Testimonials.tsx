"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [perView, setPerView] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "Amelia Joseph",
      title: "Chief Manager",
      image: "/images/testimonials/img1.jpg",
      text: "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      featured: true,
    },
    {
      id: 2,
      name: "Jacob Joshua",
      title: "Chief Manager",
      image: "/images/testimonials/img2.jpg",
      text: "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
      featured: false,
    },
    {
      id: 3,
      name: "Jacob Jo",
      title: "Chief Manager",
      image: "/images/testimonials/img3.jpg",
      text: "Embrace really nails it! Creative style. They're the partners you want for strategy. Thrilled with what they delivered.",
      featured: false,
    },
    {
      id: 4,
      name: "Godwin Asuquo",
      title: "Chief Manager",
      image: "/images/testimonials/img3.jpg",
      text: "Embrace really nails it! Creative style. They're the partners you want for strategy. Thrilled with what they delivered.",
      featured: false,
    },
  ];

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
          <h2 className="text-[#233200] text-4xl md:text-5xl lg:text-6xl font-normal">
            What Our Clients Say About Us
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-[#0000004D]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-16 h-16 rounded-full bg-[#8AC602] hover:bg-[var(--color-primary)]/90 flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel (moves one item at a time) */}
        <div className="relative overflow-hidden">
          <div
            className={`flex gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
              }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / perView)}%)`,
            }}
          >
            {infiniteTestimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={`card-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div
                    className={`rounded-3xl p-6 sm:p-8 shadow-sm h-full ${isActive ? "bg-[#689501] text-white" : "bg-[#F4F2EA]"
                      }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-xl font-semibold ${isActive ? "text-white" : "text-[var(--color-secondary)]"
                            }`}
                        >
                          {testimonial.name}
                        </h3>
                        <p
                          className={`font-semibold ${isActive ? "text-white/90" : "text-gray-500"
                            }`}
                        >
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`leading-relaxed ${isActive ? "text-white/90" : "text-[var(--color-secondary)]"
                        }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 1)} // +1 because of cloned first item
              className={`w-3 h-3 rounded-full transition-colors ${index === getActualIndex() ? "bg-[#689501]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
