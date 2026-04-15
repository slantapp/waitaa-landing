import Link from "next/link";
import { ArrowRight, BellRing, QrCode, Sparkles } from "lucide-react";

export default function GetStartedPage() {
  const ringaSignupUrl = process.env.NEXT_PUBLIC_RINGA_SIGNUP_URL;
  const menuSignupUrl = process.env.NEXT_PUBLIC_MENU_SIGNUP_URL;

  const hasRingaLink =
    typeof ringaSignupUrl === "string" && ringaSignupUrl.length > 0;
  const hasMenuLink =
    typeof menuSignupUrl === "string" && menuSignupUrl.length > 0;

  return (
    <div className="pt-28 pb-20">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-56 -right-40 h-[720px] w-[720px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="pt-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80">
              <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
              <span className="text-sm">WAITAA - Smart Customer Interaction</span>
            </div>

            <h1 className="mt-6 text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Turn Every Table Into a Smart Experience
            </h1>
            <p className="mt-5 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
              Eliminate wait times, improve service speed, and unlock new revenue
              streams — all with one platform. Choose a product below to start
              in minutes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {hasRingaLink ? (
                <a
                  href={ringaSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
                >
                  Get Started with Ringa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white/60 cursor-not-allowed select-none"
                >
                  Get Started with Ringa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}

              {hasMenuLink ? (
                <a
                  href={menuSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-colors bg-white/10 border border-white/10 text-white hover:bg-white/15"
                >
                  Get Started with Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white/60 cursor-not-allowed select-none"
                >
                  Get Started with Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          <div className="lg:pt-10">
            <div className="rounded-3xl bg-[#0B0B0B] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] p-7 sm:p-9">
              <p className="text-white text-xl font-semibold mb-3">Why Waitaa?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">Faster Service</p>
                  <p className="mt-2 text-white/70 text-sm">
                    Reduce wait times and improve customer satisfaction.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">Smart Automation</p>
                  <p className="mt-2 text-white/70 text-sm">
                    Digitize communication and ordering workflows.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">New Revenue</p>
                  <p className="mt-2 text-white/70 text-sm">
                    Monetize engagement with ads & screen displays.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-white font-semibold">Easy Setup</p>
                  <p className="mt-2 text-white/70 text-sm">
                    No hardware required — just QR codes and devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Product cards */}
        <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ringa */}
          <div className="rounded-3xl bg-[#0B0B0B] p-8 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center">
                <BellRing className="h-6 w-6" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Product 1</p>
                <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                  Ringa
                </h2>
              </div>
            </div>

            <p className="mt-5 text-white/70 leading-relaxed">
              Smart customer calling & communication — customers scan a QR code
              to instantly notify staff, with real-time tracking and performance
              insights.
            </p>

            <ul className="mt-6 space-y-3 text-white/75">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Instant customer-to-staff requests & messages
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Real-time dashboard (activity, tracking, insights)
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Ads monetization + optional Ads Screen (TV/Android)
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                Full branding/customization & unlimited devices
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {hasRingaLink ? (
                <a
                  href={ringaSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
                >
                  Get Started / Sign up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white/60 cursor-not-allowed select-none"
                >
                  Get Started / Sign up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          {/* Menu */}
          <div className="rounded-3xl bg-[#0B0B0B] p-8 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/10">
                <QrCode className="h-6 w-6" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Product 2</p>
                <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                  Menu
                </h2>
              </div>
            </div>

            <p className="mt-5 text-white/70 leading-relaxed">
              Seamless QR-based ordering — customers browse and order from their
              phones, while your team receives orders instantly and updates
              status in real time.
            </p>

            <ul className="mt-6 space-y-3 text-white/75">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
                Beautiful, mobile-friendly digital menu
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
                Real-time order management dashboard
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
                Live order status updates for customers
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/50" />
                Checkout visibility & spend monitoring
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {hasMenuLink ? (
                <a
                  href={menuSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
                >
                  Get Started / Sign up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white/60 cursor-not-allowed select-none"
                >
                  Get Started / Sign up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-14">
          <div className="rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                Upgrade Your Customer Experience Today
              </h3>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Stop using outdated service systems. Start delivering speed,
                efficiency, and smarter engagement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {hasRingaLink ? (
                <a
                  href={ringaSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
                >
                  Start with Ringa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white/60 cursor-not-allowed select-none"
                >
                  Start with Ringa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}

              {hasMenuLink ? (
                <a
                  href={menuSignupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-colors bg-white/10 border border-white/10 text-white hover:bg-white/15"
                >
                  Start with Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white/60 cursor-not-allowed select-none"
                >
                  Start with Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

