import type { Metadata } from "next";

import PatternHero from "@/app/components/shared/PatternHero";
import GetStartedHero from "@/app/components/page-components/get-started/GetStartedHero";
import RingaGetStartedSection from "@/app/components/page-components/get-started/RingaGetStartedSection";
import MenuGetStartedSection from "@/app/components/page-components/get-started/MenuGetStartedSection";
import ClosingCta from "@/app/components/page-components/get-started/ClosingCta";
import type { SignupLink } from "@/app/components/page-components/get-started/types";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Choose Ringa for smart customer calling or Menu for QR ordering. Get started with Waitaa in minutes.",
};

export default function GetStartedPage() {
  const ringaSignupUrl = '#';
  const menuSignupUrl = '#';

  const ringaLink: SignupLink = {
    url: ringaSignupUrl,
    enabled: typeof ringaSignupUrl === "string" && ringaSignupUrl.length > 0,
  };

  const menuLink: SignupLink = {
    url: menuSignupUrl,
    enabled: typeof menuSignupUrl === "string" && menuSignupUrl.length > 0,
  };

  return (
    <div className="pb-0 pt-0">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-56 -right-40 h-[720px] w-[720px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      {/* Full-bleed decorative intro section */}
      <PatternHero
        title="Get Started with Ringa & Menu"
        subtitle="Set up QR-powered service calls and ordering in minutes, not months."
      />

      <div className="pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GetStartedHero ringa={ringaLink} menu={menuLink} />
          <RingaGetStartedSection ringa={ringaLink} />
          <MenuGetStartedSection menu={menuLink} />
          <ClosingCta ringa={ringaLink} menu={menuLink} />
        </div>
      </div>
    </div>
  );
}

