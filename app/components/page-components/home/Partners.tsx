"use client"

import Image from "next/image";
import { Reveal } from "@/app/components/motion/reveal";
import { cn } from "@/app/lib/utils";

type PartnerLogo = {
  src: string;
  /** Merged with shared image styles (object-contain, grayscale, etc.) */
  className?: string;
};

const logos: PartnerLogo[] = [
  {
    src: "/images/logos/cue-bar.png",
    className: "object-cover max-w-24 w-fit h-auto",
  },
  { src: "/images/logos/farm-city.png" },
  { src: "/images/logos/junkyard.svg" },
  { src: "/images/logos/owambe.png" },
];

const imageBaseClassName =
  "object-contain object-center p-0.5 filter grayscale transition-all duration-300 hover:grayscale-0";

const Partners = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="overflow-hidden ">
      <Reveal variant="fadeUp">
        <p className="uppercase text-center mt-20 font-medium text-sm sm:text-base">
          Trusted by modern businesses using Waitaa
        </p>
      </Reveal>

      {/* Container for scrolling logos */}
      <Reveal className="mt-10 relative" variant="fade" delay={0.05}>
        <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="relative flex h-12 w-36 shrink-0 items-center justify-center px-2 sm:h-14 sm:w-40 lg:h-16 lg:w-48"
            >
              <Image
                src={logo.src}
                alt={`Partner logo ${(index % logos.length) + 1}`}
                fill
                quality={100}
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 180px, 152px"
                className={cn(imageBaseClassName, logo.className)}
              />
            </div>
          ))}
        </div>
      </Reveal>

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
