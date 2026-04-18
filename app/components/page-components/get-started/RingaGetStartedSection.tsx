import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing } from "lucide-react";

import type { SignupLink } from "./types";

type Props = {
  ringa: SignupLink;
};

export default function RingaGetStartedSection({ ringa }: Props) {
  return (
    <section className="mt-14">
      <div className="rounded-3xl bg-[#0B0B0B] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] p-8 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
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
              Smart customer calling and communication: guests scan a QR code to
              notify staff instantly, with real-time tracking and performance
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

              <a
                href={ringa.url}
                // target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
              >
                Get Started / Sign up
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-square">
              <Image
                src="/images/ringa-scan.png"
                alt="Ringa QR calling preview"
                fill
                className="object-contain p-6 sm:p-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

