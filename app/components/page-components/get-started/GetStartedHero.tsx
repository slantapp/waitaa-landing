import { ArrowRight, Sparkles } from "lucide-react";

import type { SignupLink } from "./types";

type Props = {
  ringa: SignupLink;
  menu: SignupLink;
};

export default function GetStartedHero({ ringa, menu }: Props) {
  return (
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
          streams — all with one platform. Choose a product below to start in
          minutes.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <a
            href={ringa.url}
            // target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
          >
            Get Started with Ringa
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href={menu.url}
            // target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-colors bg-white/10 border border-white/10 text-white hover:bg-white/15"
          >
            Get Started with Menu
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

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
  );
}

