"use client"

import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Newsletter signup:", email);
    // Handle newsletter submission here
    setEmail("");
  };

  return (
    <div className="w-full py-16 ">
      <div className="relative overflow-hidden max-w-7xl mx-auto px-4">
        <div className="bg-[var(--color-secondary)] rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern/Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl w-1/2 font-normal mb-6 leading-tight max-w-4xl lg:mx-0 mx-auto">
                Download the Waitaa App & Get Free Ads
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl lg:mx-0 mx-auto">
                Join our newsletter to stay upto date on features and realeases.
              </p>

              {/* Email Signup */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md lg:mx-0 mx-auto mb-12">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full font-semibold hover:bg-[var(--color-primary)]/90 transition-colors whitespace-nowrap"
                >
                  Submit
                </button>
              </div>

              {/* App Store Text */}
              <p className="text-white/60 text-sm md:text-base mb-8">
                Available on Apple Store and Play Store
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center max-w-lg lg:mx-0 mx-auto">
                <button className="flex items-center justify-center bg-white/90 hover:bg-white text-[var(--color-secondary)] px-6 py-4 rounded-full font-medium transition-colors">
                  <Image
                    src="/icons/GooglePlay.png"
                    width={29}
                    height={29}
                    alt="google play logo"
                  />
                  Download Now
                </button>

                <button className="flex items-center justify-center bg-white/90 hover:bg-white text-[var(--color-secondary)] px-6 py-4 rounded-full font-medium transition-colors">
                  <Image
                    src="/icons/appleStore.png"
                    width={29}
                    height={29}
                    alt="apple logo"
                  />
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
