import { BellRing, LineChart, QrCode, Smartphone, Wifi } from "lucide-react";

type PatternHeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function PatternHero({
  badge = "Get started with Waitaa",
  title,
  subtitle,
  className = "",
}: PatternHeroProps) {
  return (
    <section className={className}>
      <div className="relative w-full h-64 sm:h-80 lg:h-[390px] overflow-hidden bg-[#0B0B0B]">
        {/* Decorative patterns and icons */}
        <div className="pointer-events-none absolute inset-0">
          {/* Outer rings */}
          <div className="absolute -left-20 top-8 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -right-24 bottom-0 h-48 w-48 rounded-full border border-[var(--color-primary)]/30" />
          <div className="absolute left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="absolute right-10 top-1/3 h-24 w-24 rounded-full border border-white/5" />
          <div className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent" />

          {/* Icon chips */}
          <div className="absolute right-10 top-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <QrCode className="h-5 w-5 text-[var(--color-primary)]" />
          </div>
          <div className="absolute left-8 bottom-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <BellRing className="h-5 w-5 text-[var(--color-primary)]" />
          </div>
          <div className="absolute right-1/4 bottom-6 hidden sm:flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <LineChart className="h-4 w-4 text-white/80" />
          </div>
          <div className="absolute left-1/4 top-6 hidden sm:flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <Smartphone className="h-4 w-4 text-white/80" />
          </div>
          <div className="absolute left-1/2 bottom-0 hidden sm:block h-20 w-20 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--color-primary)]/25 blur-2xl" />

          {/* Soft diagonal lines and grid */}
          <div className="absolute -left-10 top-1/3 h-px w-1/2 bg-white/5 rotate-6" />
          <div className="absolute right-0 bottom-1/3 h-px w-1/2 bg-white/5 -rotate-3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_55%)]" />
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-soft-light"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Centered hero text */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 pt-10 text-center">
          <div>
            {badge && (
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                <Wifi className="h-3 w-3 text-[var(--color-primary)]" />
                {badge}
              </p>
            )}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

