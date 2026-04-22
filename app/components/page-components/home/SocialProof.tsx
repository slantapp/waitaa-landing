"use client";

// import { DollarSign } from "lucide-react";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { Reveal } from "@/app/components/motion/reveal";

const avatars = [
  "/images/avatars/avatar1.png",
  "/images/avatars/avatar2.png",
  "/images/avatars/avatar3.jpg",
  "/images/avatars/avatar4.jpg",
];

const SocialProof = () => {
  const [containerParent] = useAutoAnimate();

  return (
    <section
      className="min-h-screen bg-[#FFFFFF] w-[95%] rounded-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-14 scroll-mt-28"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto" ref={containerParent}>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Reveal variant="fadeUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight max-w-5xl mx-auto px-4">
              From Buzzer Devices to daily QR essentials, dine Smartly!
            </h1>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal variant="fadeUp" delay={0.08}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10 lg:mt-12">
              <Link
                href="/get-started"
                className="bg-primary text-secondary px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-medium text-sm sm:text-base hover:opacity-90 transition-all duration-200 hover:shadow-xl transform hover:scale-105 cursor-pointer inline-flex items-center justify-center"
              >
                Get Started with Waitaa
              </Link>
              <button className="bg-gray-300 text-secondary px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-gray-400 transition-all duration-200 hover:shadow-xl transform hover:scale-105 cursor-pointer">
                Discover Waitaa
              </button>
            </div>
          </Reveal>
        </div>

        {/* Image Section with Overlays */}
        <Reveal className="relative max-w-6xl mx-auto" variant="fadeUp">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                src="/images/peopleEating.png"
                alt="Restaurant dining scene"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Left Card - Subscription Services */}
          <Reveal
            className="hidden lg:block absolute left-4 sm:left-8 lg:left-12 bottom-8 sm:bottom-12 lg:bottom-16 bg-[#F1F5F999] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl w-[200px] sm:w-[240px] lg:w-[280px]"
            variant="fadeRight"
            delay={0.08}
          >
            <div className="space-y-5">
              {/* <div className="bg-[var(--color-primary)] w-fit rounded-full p-2.5 sm:p-3 shadow-md">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-secondary)]" />
              </div> */}
              <Image src="/images/circleMoney.png" width={60} height={60} alt="" />
              <div>
                <h3 className="font-bold text-base sm:text-lg lg:text-xl text-secondary">
                  Subscription Services
                </h3>
                <p className="text-secondary/80 text-xs sm:text-sm lg:text-base mt-1">
                  Subscription Services
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Card - Clients */}
          <Reveal
            className="hidden lg:block absolute right-4 sm:right-8 lg:right-12 bottom-8 sm:bottom-12 lg:bottom-16 bg-[#F1F5F999] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl w-[200px] sm:w-[240px] lg:w-[280px]"
            variant="fadeLeft"
            delay={0.1}
          >
            <h3 className="font-bold text-base sm:text-lg lg:text-xl text-secondary mb-2 sm:mb-3">
              Clients
            </h3>
            <p className="text-secondary/80 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">
              Over 1,000+ users
            </p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {avatars.map((d, i) => (
                  <Image
                    key={i}
                    src={d}
                    width={28}
                    height={28}
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  />
                ))}

                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-semibold text-secondary">
                    +10
                  </span>
                </div>
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">
                5,795
              </span>
            </div>
          </Reveal>

          {/* Center QR Code Circle */}
          <Reveal
            className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2"
            variant="scale"
            delay={0.12}
          >
            <Image src="/images/circleMenu.png" width={150} height={150} alt="menu" />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProof;
