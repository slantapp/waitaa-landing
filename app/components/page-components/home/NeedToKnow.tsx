"use client";

import Image from "next/image";
import { useState } from "react";

const NeedToKnow = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
  };

  return (
    <section>
      <div className="min-h-screen bg-[#233200] text-white px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 rounded-4xl">
        {/* Everything You Need to Know Badge */}
        <div className="inline-block mb-8 sm:mb-12">
          <div className="border border-[#DEFC9A] rounded-full px-6 py-2.5 text-[#DEFC9A] text-sm sm:text-base font-light tracking-wide">
            Everything You Need to Know
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-16 sm:mb-20 lg:mb-24 space-y-10 md:space-y-0 md:flex justify-between items-end">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight md:w-[60%]">
            Boost Your Brand with our Expertise
          </h1>

          <button className="text-[#1A1A1A] bg-white py-3 px-5 rounded-full">
            View Services
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* QR Code Card */}
          <div className="bg-[#F1F5F933] backdrop-blur-sm rounded-3xl p-6 pb-8 transition-transform duration-300 hover:scale-105">
            <div className="mx-auto w-fit">
              <Image
                src="/images/qrCodeScanningGray.png"
                alt="scanning qr code"
                height={159}
                width={245}
                className="relative z-0"
              />
              <h3 className="text-2xl font-semibold mt-4">QR Code</h3>
              <p className="text-lg text-white/80 font-light">
                Subscription Services
              </p>
            </div>
          </div>

          {/* Real Term Notification Card - Active/Highlighted */}
          <div className="bg-primary rounded-3xl p-6 pb-8 text-secondary transition-transform duration-300 hover:scale-105 shadow-lg shadow-primary/20">
            <div className="mx-auto w-fit">
              <h3 className="text-2xl font-semibold mb-2">Real Term</h3>
              <h3 className="text-2xl font-semibold mb-4">Notification</h3>
              <p className="text-lg font-light mb-6">Subscription Services</p>
              <Image
                src="/images/qrCodeScanningGreen.png"
                alt="scanning qr code"
                height={159}
                width={245}
                className="relative z-0"
              />
            </div>
          </div>

          {/* Visitor Management Card */}
          <div className="bg-[#F1F5F933] backdrop-blur-sm rounded-3xl p-6 pb-8 transition-transform duration-300 hover:scale-105">
            <div className="mx-auto w-fit">
              <Image
                src="/images/qrCodeScanningGray.png"
                alt="scanning qr code"
                height={159}
                width={245}
                className="relative z-0"
              />
              <h3 className="text-2xl font-semibold my-4">Visitor</h3>
              <h3 className="text-2xl font-semibold mb-4">Management</h3>
              <p className="text-lg text-white/80 font-light">
                Subscription Services
              </p>
            </div>
          </div>

          {/* Analytics Dashboard Card */}
          <div className="bg-[#F1F5F933] backdrop-blur-sm rounded-3xl p-6 pb-8 transition-transform duration-300 hover:scale-105">
            <div className="mx-auto w-fit">
              <h3 className="text-2xl font-semibold mb-2">Analytics</h3>
              <h3 className="text-2xl font-semibold mb-4">Dashboard</h3>
              <p className="text-lg text-white/80 font-light mb-6">
                Subscription Services
              </p>
              <Image
                src="/images/qrCodeScanningGray.png"
                alt="scanning qr code"
                height={159}
                width={245}
                className="relative z-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-2 bg-[#e8f5b8] rounded-4xl px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#233200] font-normal text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight">
            Africa's Leading QR Restaurant Service Solution
          </h1>
        </div>
      </div>

      {/* email section  */}
      <div className="w-full bg-[#233200] min-h-screen">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Left side - Image */}
            <div className="relative h-64 md:h-96 lg:h-full">
              <Image
                src="/images/scanningQrCode.png"
                alt="Person scanning QR code with smartphone"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-24">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
                    The click and collect solution integrated
                  </h2>

                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
                    Let your customers order directly from you, where they are
                    Transform your Lagos, Abuja, Cape Town, Nairobi, or Accra
                    restaurant with Africa's most advanced QR code service
                    system. No expensive hardware - customers simply scan and
                    request service!
                  </p>
                </div>

                {/* Email Form */}
                <div className="relative max-w-[466px] ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" w-full h-[73px] px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white/20 transition-all"
                  />
                  <button
                    onClick={handleSubmit}
                    className="absolute h-[53px] top-1/2 -translate-y-1/2 right-2 px-8 py-3 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full font-medium hover:bg-[var(--color-primary)]/90 transition-colors whitespace-nowrap"
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedToKnow;
