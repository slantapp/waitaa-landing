import Link from "next/link";
import {
  BarChart3,
  CircleDollarSign,
  Rocket,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/app/components/motion/reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/stagger";

export default function WhyWaitaaSection() {
  return (
    <section id="why-waitaa" className="scroll-mt-28">
      <div className="w-[95%] mx-auto mt-3 rounded-4xl bg-[#0B0B0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            <div className="lg:w-[42%]">
              <Reveal variant="fadeUp">
                <p className="text-primary text-sm font-medium tracking-wider uppercase">
                  Why Waitaa
                </p>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.06}>
                <h2 className="mt-4 text-white text-3xl sm:text-4xl font-semibold leading-tight">
                  Built for faster service, smarter automation, and new revenue
                </h2>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.1}>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Waitaa helps restaurants, hotels, lounges, and public spaces
                  upgrade customer experience with QR-based calling, ordering, and
                  ads monetization, without buying expensive hardware.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Reveal variant="fadeUp" delay={0.14}>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 micro-lift micro-press"
                  >
                    Talk to Sales
                  </Link>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.18}>
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 micro-lift micro-press soft-glow"
                  >
                    Explore Products
                  </Link>
                </Reveal>
              </div>
            </div>

            <div className="flex-1">
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StaggerItem>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 card-interactive">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-4 text-white font-semibold">Faster Service</p>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Reduce wait times and improve customer satisfaction with
                      instant requests and real-time updates.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 card-interactive">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                      <Workflow className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-4 text-white font-semibold">
                      Smart Automation
                    </p>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Digitize communication and ordering workflows so they stay
                      clean, trackable, and efficient.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 card-interactive">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                      <CircleDollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-4 text-white font-semibold">
                      New Revenue Channels
                    </p>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Earn from ads while serving customers via QR scan ads and
                      optional screen displays.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 card-interactive">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <p className="mt-4 text-white font-semibold">
                      Data-Driven Insights
                    </p>
                    <p className="mt-2 text-white/70 text-sm leading-relaxed">
                      Track performance, customer behavior, and engagement with
                      actionable analytics.
                    </p>
                  </div>
                </StaggerItem>
              </Stagger>

              <Reveal
                className="mt-6 rounded-2xl bg-black/30 border border-white/10 p-6"
                variant="fadeUp"
                delay={0.06}
              >
                <p className="text-white font-semibold mb-3">Perfect for</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Restaurants",
                    "Hotels",
                    "Lounges & Clubs",
                    "Cafes",
                    "Event Centers",
                    "Hospitals",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

