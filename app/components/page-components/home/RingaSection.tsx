import Image from "next/image";
import Link from "next/link";

export default function RingaSection() {
  return (
    <section id="ringa" className="scroll-mt-28">
      <div className="w-[95%] mx-auto mt-3 rounded-4xl bg-[#0B0B0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[var(--color-primary)] text-sm font-medium tracking-wider uppercase">
                Ringa
              </p>
              <h2 className="mt-4 text-white text-4xl md:text-5xl font-semibold leading-tight">
                Digital waiter calling system without hardware
              </h2>
              <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                Ringa is Waitaa’s smart customer-to-staff communication tool.
                Customers scan a QR code to call a waiter, request service, or
                send a message—while your team receives real-time notifications
                with exact table/location.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">
                    Instant communication
                  </p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    No shouting, no waiting—requests reach staff instantly.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">Live dashboard</p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Track activity, manage responses, and see performance
                    insights.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">Ads monetization</p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Earn from customer ads after QR scan with real-time
                    analytics.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">Unlimited devices</p>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    Use across multiple staff devices, screens, and locations.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-colors"
                >
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm">How it works</p>
                    <p className="text-white text-xl font-semibold mt-1">
                      Scan → Request → Notify → Respond
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

                <div className="mt-8 grid grid-cols-1 gap-4">
                  {[
                    "Customer scans QR code at table or location",
                    "Sends request or custom message instantly",
                    "Staff receives real-time notification with location",
                    "Staff responds and updates customer",
                  ].map((step) => (
                    <div
                      key={step}
                      className="rounded-2xl bg-black/30 border border-white/10 p-5"
                    >
                      <p className="text-white/80">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-[var(--color-primary)]/20 blur-2xl" />
              <div className="pointer-events-none absolute -top-10 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

