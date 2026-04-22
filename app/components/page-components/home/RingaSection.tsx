 "use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/app/components/motion/reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/stagger";

export default function RingaSection() {
  return (
    <section id="ringa" className="scroll-mt-28 cursor-scan">
      <div className="w-[95%] mx-auto my-3 rounded-4xl bg-[#0B0B0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <Reveal variant="fadeUp">
                <p className="text-primary text-sm font-medium tracking-wider uppercase">
                  Ringa
                </p>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.06}>
                <h2 className="mt-4 text-white text-4xl md:text-5xl font-semibold leading-tight">
                  Digital waiter calling system without hardware
                </h2>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.1}>
                <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                  Ringa is Waitaa&apos;s smart customer-to-staff communication tool.
                  Customers scan a QR code to call a waiter, request service, or
                  send a message, and your team gets real-time notifications with
                  the exact table or location.
                </p>
              </Reveal>

              <Stagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Instant communication",
                    body: "No shouting and no guessing. Requests reach staff right away.",
                  },
                  {
                    title: "Live dashboard",
                    body: "Track activity, manage responses, and see performance insights.",
                  },
                  {
                    title: "Ads monetization",
                    body: "Earn from customer ads after QR scan with real-time analytics.",
                  },
                  {
                    title: "Unlimited devices",
                    body: "Use across multiple staff devices, screens, and locations.",
                  },
                ].map((card) => (
                  <StaggerItem key={card.title}>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 card-interactive">
                      <p className="text-white font-semibold">{card.title}</p>
                      <p className="mt-2 text-white/70 text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Reveal variant="fadeUp" delay={0.06}>
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 micro-lift micro-press soft-glow"
                  >
                    Get Started
                  </Link>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.1}>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 micro-lift micro-press"
                  >
                    Talk to us
                  </Link>
                </Reveal>
              </div>
            </div>

            <div className="relative">
              <Reveal
                className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 card-interactive"
                variant="fadeLeft"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">How it works</p>
                    <p className="text-white text-xl font-semibold mt-1">
                      Scan, request, notify, respond
                    </p>
                  </div>
                  <div className="relative w-14 h-14">
                    <Image
                      src="/images/circleMoney.png"
                      alt="Waitaa"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <Stagger className="mt-8 grid grid-cols-1 gap-4">
                  {[
                    "Customer scans QR code at table or location",
                    "Sends request or custom message instantly",
                    "Staff receives real-time notification with location",
                    "Staff responds and updates customer",
                  ].map((step) => (
                    <StaggerItem key={step}>
                      <div className="rounded-2xl bg-black/30 border border-white/10 p-5 card-interactive">
                        <p className="text-white/80">{step}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </Reveal>

              <div className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
              <div className="pointer-events-none absolute -top-10 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

