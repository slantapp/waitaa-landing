import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[720px] w-[720px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-white/60 text-sm">Legal</p>
          <h1 className="mt-2 text-white text-4xl md:text-5xl font-semibold">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/70 leading-relaxed">
            This Privacy Policy explains how Waitaa collects, uses, and protects
            your information when you use our website and services.
          </p>
          <p className="mt-2 text-white/50 text-sm">Last updated: April 15, 2026</p>
        </header>

        <div className="rounded-3xl bg-[#0B0B0B] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] p-7 sm:p-10 space-y-10">
          <section>
            <h2 className="text-white text-xl font-semibold">1. Information We Collect</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We may collect information you provide directly (for example, when
              you fill a contact form) and information collected automatically
              when you browse our site.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/70">
              <li>Name, email address, phone number, business/restaurant name</li>
              <li>Location details you submit (e.g., country/city)</li>
              <li>Device and usage data (e.g., pages viewed, approximate location)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/70">
              <li>Provide and improve our products and customer support</li>
              <li>Respond to inquiries and send service-related messages</li>
              <li>Analyze usage to improve performance and user experience</li>
              <li>Comply with legal obligations and prevent fraud/abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">3. Cookies & Analytics</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We may use cookies or similar technologies to remember preferences
              and understand how users interact with the site. You can control
              cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">4. Sharing of Information</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We do not sell your personal information. We may share information
              with trusted service providers who help us operate the site and
              services, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">5. Data Retention</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We retain information only as long as necessary for the purposes
              described in this policy, unless a longer retention period is
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">6. Security</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We use reasonable administrative, technical, and organizational
              safeguards to protect your information. No method of transmission
              or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">7. Your Choices</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              You may request access, correction, or deletion of your personal
              information where applicable. You can also opt out of non-essential
              communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">8. Contact</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Questions about this policy? Reach us via the contact page.
            </p>
            <div className="mt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:opacity-90 transition-opacity"
              >
                Contact us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

