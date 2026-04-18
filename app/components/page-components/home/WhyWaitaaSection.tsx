import Link from "next/link";
import {
  BarChart3,
  CircleDollarSign,
  Rocket,
  Workflow,
} from "lucide-react";

export default function WhyWaitaaSection() {
  return (
    <section id="why-waitaa" className="scroll-mt-28">
      <div className="w-[95%] mx-auto mt-3 rounded-4xl bg-[#0B0B0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            <div className="lg:w-[42%]">
              <p className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase">
                Why Waitaa
              </p>
              <h2 className="mt-4 text-white text-3xl sm:text-4xl font-semibold leading-tight">
                Built for faster service, smarter automation, and new revenue
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Waitaa helps restaurants, hotels, lounges, and public spaces
                upgrade customer experience with QR-based calling, ordering, and
                ads monetization, without buying expensive hardware.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  Talk to Sales
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:opacity-90 transition-opacity"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Rocket className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <p className="mt-4 text-white font-semibold">Faster Service</p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Reduce wait times and improve customer satisfaction with
                    instant requests and real-time updates.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <Workflow className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <p className="mt-4 text-white font-semibold">Smart Automation</p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Digitize communication and ordering workflows so they stay
                    clean, trackable, and efficient.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <CircleDollarSign className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <p className="mt-4 text-white font-semibold">
                    New Revenue Channels
                  </p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Earn from ads while serving customers via QR scan ads and
                    optional screen displays.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                    <BarChart3 className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                  <p className="mt-4 text-white font-semibold">
                    Data-Driven Insights
                  </p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Track performance, customer behavior, and engagement with
                    actionable analytics.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-black/30 border border-white/10 p-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

