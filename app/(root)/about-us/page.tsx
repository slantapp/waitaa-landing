import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  DollarSign,
  Layers,
  Plug,
  QrCode,
  Rocket,
  Sparkles,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import PatternHero from "@/app/components/shared/PatternHero";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Waitaa, the customer engagement platform for QR-based calling, ordering, and smart ads for restaurants, hotels, lounges, and modern service businesses across Africa.",
};

export default function AboutUsPage() {
  return (
    <div className="pt-0 pb-20">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <PatternHero
        badge="About Waitaa"
        title="Smart customer interaction for modern businesses"
        subtitle="We replace slow, manual service flows with fast, QR-powered experiences so you can serve better, learn more, and grow revenue."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 space-y-20 sm:space-y-24">
        {/* Who we are */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider">
              Who we are
            </p>
            <h2 className="mt-3 text-white text-3xl sm:text-4xl font-semibold leading-tight">
              A full customer engagement ecosystem, not a single feature
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Waitaa is built for restaurants, hotels, lounges, cafés, event
              spaces, and anywhere guests expect quick, contactless service. We
              connect people to your team through QR codes: no app download
              required for customers, and no proprietary hardware required for
              you to get started.
            </p>
          </div>
          <div className="rounded-3xl bg-[#0B0B0B] border border-white/[0.08] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                <Layers className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">
                  Two products, one philosophy
                </h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Ringa</span> powers
                  smart customer-to-staff calling and communication.
                  <span className="font-semibold text-white"> Menu</span> powers
                  seamless QR-based browsing and ordering. Use either, or
                  combine both for a full digital front-of-house.
                </p>
              </div>
            </div>
            <p className="mt-6 text-white/55 text-sm leading-relaxed border-t border-white/10 pt-6">
              Our goal is simple: cut unnecessary wait times, improve service
              speed, and help you unlock new revenue while keeping the guest
              experience smooth.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent px-8 py-10 sm:px-12 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                Our mission
              </p>
              <h2 className="mt-2 text-white text-2xl sm:text-3xl font-semibold">
                Turn every table, counter, and touchpoint into a smart
                experience
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                We believe hospitality and service businesses deserve tools that
                feel as modern as the phones in their customers&apos; pockets,
                with clear visibility for staff, real-time workflows, and
                optional monetization when it fits your brand.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/85">
                <QrCode className="h-4 w-4 text-[var(--color-primary)]" />
                QR-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/85">
                <Zap className="h-4 w-4 text-[var(--color-primary)]" />
                Real-time
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/85">
                <Sparkles className="h-4 w-4 text-[var(--color-primary)]" />
                Brandable
              </span>
            </div>
          </div>
        </section>

        {/* Products */}
        <section>
          <div className="max-w-2xl">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider">
              What we build
            </p>
            <h2 className="mt-3 text-white text-3xl sm:text-4xl font-semibold">
              Ringa & Menu
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Independent products that work beautifully together: calling,
              ordering, ads, and insights in one ecosystem.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-3xl bg-[#0B0B0B] border border-white/[0.08] p-8 flex flex-col h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Zap className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-white text-xl font-semibold">Ringa</h3>
              <p className="mt-2 text-white/65 text-sm leading-relaxed flex-1">
                Smart calling without hardware. Guests scan, notify staff, send
                requests or messages, and you respond from a live dashboard. You
                can also run optional ads after the scan and on connected
                displays.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  Instant customer-to-staff communication
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  Real-time monitoring & request tracking
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  Ads monetization & Ads Screen (TV / Android)
                </li>
              </ul>
              <Link
                href="/#ringa"
                className="mt-8 inline-flex text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View Ringa on the homepage
              </Link>
            </div>
            <div className="rounded-3xl bg-[#0B0B0B] border border-white/[0.08] p-8 flex flex-col h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <UtensilsCrossed className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 text-white text-xl font-semibold">Menu</h3>
              <p className="mt-2 text-white/65 text-sm leading-relaxed flex-1">
                Smart ordering without waiting. Guests browse a mobile-friendly
                menu, place orders from their phones, and follow status updates
                while your team sees everything on the dashboard.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  Digital menu with up-to-date items & pricing
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  Real-time order management for kitchen & floor
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-primary)]">·</span>
                  Live order status & checkout visibility
                </li>
              </ul>
              <Link
                href="/#menu"
                className="mt-8 inline-flex text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View Menu on the homepage
              </Link>
            </div>
          </div>
        </section>

        {/* Why Waitaa */}
        <section>
          <div className="max-w-2xl">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider">
              Why Waitaa
            </p>
            <h2 className="mt-3 text-white text-3xl sm:text-4xl font-semibold">
              Built for speed, clarity, and growth
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Rocket,
                title: "Faster service",
                body: "Reduce wait times and improve satisfaction with instant QR touchpoints.",
              },
              {
                icon: Zap,
                title: "Smart automation",
                body: "Digitize communication and ordering so staff spend less time chasing context.",
              },
              {
                icon: DollarSign,
                title: "New revenue channels",
                body: "Earn from ads while you serve with campaigns, analytics, and optional screen inventory.",
              },
              {
                icon: BarChart3,
                title: "Data-driven insights",
                body: "Track activity, performance, and engagement to improve operations over time.",
              },
              {
                icon: Plug,
                title: "Easy setup",
                body: "No proprietary hardware is required. QR codes and the devices you already use are enough.",
              },
              {
                icon: Building2,
                title: "Scale with you",
                body: "Use multiple staff devices, screens, and locations as you grow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0B0B0B] p-6"
              >
                <item.icon className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="rounded-3xl bg-[#0B0B0B] border border-white/[0.08] p-8 sm:p-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">
            Where Waitaa fits
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
            Perfect for any customer-facing space where speed and clarity matter,
            from dining rooms to lobbies and event floors.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Restaurants",
              "Hotels",
              "Lounges & clubs",
              "Cafés",
              "Event centers",
              "Hospitals",
              "Public & hospitality spaces",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/85"
              >
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">
              Upgrade your customer experience today
            </h2>
            <p className="mt-3 text-white/70 max-w-xl leading-relaxed">
              Stop relying on outdated call systems and paper-only menus. Start
              delivering speed, efficiency, and smarter engagement with Waitaa.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90 transition-opacity text-center"
            >
              Get started
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors text-center"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
