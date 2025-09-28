"use client";

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
    <div className="relative w-full py-16 ">
      <div className="relative overflow-hidden max-w-7xl mx-auto px-4">
        <div className="bg-[#233200]/90 rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
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
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl w-1/2 font-normal mb-6 leading-tight max-w-4xl lg:mx-0 mx-auto">
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
                  className="w-full px-6 py-6 rounded-full bg-white/10  text-white placeholder-white focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  className="absolute right-2 top-2 bottom-2 px-8  text-center bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full font-semibold hover:bg-[var(--color-primary)]/90 transition-colors whitespace-nowrap"
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
