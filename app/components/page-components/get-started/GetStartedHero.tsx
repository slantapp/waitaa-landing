import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/app/components/motion/reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/stagger";

import type { SignupLink } from "./types";

type Props = {
  ringa: SignupLink;
  menu: SignupLink;
};

export default function GetStartedHero({ ringa, menu }: Props) {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center cursor-scan">
      <div className="pt-6">
        <Reveal variant="fadeUp">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 card-interactive">
            <Sparkles className="h-4 w-4 text-primary float-soft-slower" />
            <span className="text-sm">Waitaa for smart customer interaction</span>
          </div>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.06}>
          <h1 className="mt-6 text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Turn Every Table Into a Smart Experience
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.12}>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            Eliminate wait times, improve service speed, and unlock new revenue
            streams from one platform. Choose a product below to get started in
            minutes.
          </p>
        </Reveal>

        <Reveal className="mt-8" variant="fadeUp" delay={0.16}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ringa.url}
              // target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-primary text-secondary hover:bg-primary/90 micro-lift micro-press soft-glow"
            >
              Get Started with Ringa
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href={menu.url}
              // target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold bg-white/10 border border-white/10 text-white hover:bg-white/15 micro-lift micro-press"
            >
              Get Started with Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="lg:pt-10">
        <Reveal
          className="rounded-3xl bg-[#0B0B0B] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] p-7 sm:p-9 card-interactive"
          variant="fadeLeft"
        >
          <p className="text-white text-xl font-semibold mb-3">Why Waitaa?</p>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" amount={0.2}>
            {[
              {
                title: "Faster Service",
                body: "Reduce wait times and improve customer satisfaction.",
              },
              {
                title: "Smart Automation",
                body: "Digitize communication and ordering workflows.",
              },
              {
                title: "New Revenue",
                body: "Monetize engagement with ads & screen displays.",
              },
              {
                title: "Easy Setup",
                body: "No extra hardware is required. QR codes and the devices you already use are enough.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 card-interactive">
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="mt-2 text-white/70 text-sm">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </header>
  );
}

