"use client"

import Image from "next/image";

const logos = [
  "/images/logos/forbes.png",
  "/images/logos/cnbc.png",
  "/images/logos/bloomberg.png",
  "/images/logos/reuters.png",
  "/images/logos/cnn.png",
];

const Partners = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="overflow-hidden ">
      <p className="uppercase text-center mt-20 font-medium text-sm sm:text-base">
        Trusted by modern businesses using Waitaa
      </p>

      {/* Container for scrolling logos */}
      <div className="mt-10 relative">
        <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-24 h-8 sm:w-28 sm:h-10 lg:w-32 lg:h-12 flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`logo ${(index % logos.length) + 1}`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 8s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
