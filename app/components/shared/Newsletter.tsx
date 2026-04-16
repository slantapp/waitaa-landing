"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Newsletter signup:", email);
    // Handle newsletter submission here
    setEmail("");
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="rounded-3xl lg:rounded-[3rem] px-2 py-8 md:p-12 lg:p-16 relative overflow-hidden">
        <Image
          src="/images/peopleEating.png"
          alt="Restaurant dining scene"
          fill
          className="object-cover"
        />
        {/*Overlay */}
        <div className="absolute inset-0 bg-[#233200]/85"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center lg:text-left">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl lg:w-1/2 font-normal mb-6 leading-tight max-w-4xl lg:mx-0 mx-auto">
              Download the Waitaa App & Get Free Ads
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl lg:mx-0 mx-auto">
              Join our newsletter to stay upto date on features and realeases.
            </p>

            {/* Email Signup */}
            <div className="relative max-w-md lg:mx-0 mx-auto mb-12">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-6 rounded-full bg-white/10  text-white placeholder-white focus:outline-none  focus:bg-white/20 transition-all"
              />
              <button
                onClick={handleSubmit}
                className="absolute right-2 top-2 bottom-2 px-8  text-center bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full font-semibold hover:bg-[var(--color-primary)]/90 transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center max-w-lg lg:mx-0 mx-auto">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-secondary)] px-6 py-4 rounded-full font-semibold hover:bg-[var(--color-primary)]/90 transition-colors"
              >
                Scan & Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
