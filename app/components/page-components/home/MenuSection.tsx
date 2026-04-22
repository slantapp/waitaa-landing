 "use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/app/components/motion/reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/stagger";

export default function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-28 cursor-scan">
      <div className="w-[95%] mx-auto mt-3 rounded-4xl bg-[#F4F2EA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <Reveal
                className="rounded-3xl bg-white shadow-sm p-6 sm:p-8 relative overflow-hidden card-interactive"
                variant="fadeRight"
              >
                <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-secondary/10 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/15 blur-2xl" />

                <p className="text-secondary/60 text-sm">
                  QR Code Restaurant Ordering System in Africa
                </p>
                <p className="mt-2 text-secondary text-xl font-semibold">
                  Smart ordering without waiting
                </p>

                <Stagger className="mt-7 grid grid-cols-1 gap-4">
                  {[
                    "Customer scans QR code and views a beautiful digital menu",
                    "Selects items and places an order from their phone",
                    "Business receives orders instantly and updates status",
                    "Customers track order progress without calling staff",
                  ].map((step) => (
                    <StaggerItem key={step}>
                      <div className="rounded-2xl bg-[#F4F2EA] p-5 border border-black/5">
                        <p className="text-secondary/80">{step}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 micro-lift micro-press soft-glow"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-secondary text-white font-semibold hover:bg-secondary/90 micro-lift micro-press"
                  >
                    Talk to us
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2">
              <Reveal variant="fadeUp">
                <p className="text-secondary text-sm font-medium tracking-wider uppercase">
                  Menu
                </p>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.06}>
                <h2 className="mt-4 text-secondary text-4xl md:text-5xl font-semibold leading-tight">
                  Contactless ordering and service solution
                </h2>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.1}>
                <p className="mt-5 text-secondary/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Menu lets customers browse and order directly from their phones.
                  Orders appear instantly on your dashboard so staff can manage
                  workflow, reduce errors, and speed up service.
                </p>
              </Reveal>

              <Stagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Digital menu",
                    body: "Mobile-friendly menu that stays up to date with pricing and items.",
                  },
                  {
                    title: "Order management",
                    body: "Receive, manage, and fulfill orders in real time.",
                  },
                  {
                    title: "Live status",
                    body: "Customers track updates without needing to call staff.",
                  },
                  {
                    title: "Checkout visibility",
                    body: "Monitor spending patterns and improve service efficiency.",
                  },
                ].map((card) => (
                  <StaggerItem key={card.title}>
                    <div className="rounded-2xl bg-white p-5 border border-black/5 card-interactive">
                      <p className="text-secondary font-semibold">{card.title}</p>
                      <p className="mt-2 text-secondary/70 text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

