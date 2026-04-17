import { ArrowRight } from "lucide-react";

import type { SignupLink } from "./types";

type Props = {
  ringa: SignupLink;
  menu: SignupLink;
};

export default function ClosingCta({ ringa, menu }: Props) {
  return (
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

          <a
            href={ringa.url}
            // target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-opacity bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-90"
          >
            Start with Ringa
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href={menu.url}
            // target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold transition-colors bg-white/10 border border-white/10 text-white hover:bg-white/15"
          >
            Start with Menu
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

        </div>
      </div>
    </section>
  );
}

