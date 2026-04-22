import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/app/components/motion/reveal";
import {
  OFFICES,
  PHONE_DISPLAY,
  PHONE_E164,
  SUPPORT_EMAIL,
} from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "Terms and conditions for using Waitaa's website and services. Please read before using our products.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div className="absolute -top-56 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute -bottom-56 -right-40 h-[720px] w-[720px] rounded-full bg-white/4 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 cursor-scan">
          <Reveal variant="fadeUp">
            <p className="text-white/60 text-sm">Legal</p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.06}>
            <h1 className="mt-2 text-white text-4xl md:text-5xl font-semibold">
              Terms & Conditions
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12}>
            <p className="mt-4 text-white/70 leading-relaxed">
              These Terms govern your access to and use of Waitaa’s website and
              services. By using Waitaa, you agree to these Terms.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.16}>
            <p className="mt-2 text-white/50 text-sm">
              Last updated: April 15, 2026
            </p>
          </Reveal>
        </header>

        <Reveal
          className="rounded-3xl bg-[#0B0B0B] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] p-7 sm:p-10 space-y-10 card-interactive"
          variant="fadeUp"
          amount={0.2}
        >
          <section>
            <h2 className="text-white text-xl font-semibold">1. About Waitaa</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Waitaa provides a customer engagement ecosystem for hospitality and
              service environments, including products such as Ringa (customer
              calling and communication) and Menu (QR ordering).
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">2. Eligibility</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              You must have authority to accept these Terms on behalf of a
              business if you are using Waitaa for commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">3. Acceptable Use</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-white/70">
              <li>Do not misuse the services, interfere with operations, or attempt unauthorized access.</li>
              <li>Do not upload unlawful, harmful, or infringing content.</li>
              <li>Comply with applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">4. Accounts & Access</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              If an account is required for a product, you are responsible for
              maintaining the confidentiality of your credentials and for all
              activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">5. Payments & Subscriptions</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Some features may require payment. Pricing, billing cycles, and
              renewal terms will be provided at the point of purchase or within
              the relevant product.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">6. Intellectual Property</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Waitaa and its logos, products, and software are protected by
              intellectual property laws. You may not copy, modify, distribute,
              or reverse engineer our services except as permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">7. Disclaimers</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              The services are provided “as is” and “as available”. We disclaim
              warranties to the maximum extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">8. Limitation of Liability</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              To the maximum extent permitted by law, Waitaa will not be liable
              for indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">9. Termination</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We may suspend or terminate access if you violate these Terms or
              if required for security, compliance, or operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">10. Changes</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We may update these Terms from time to time. Continued use after
              changes means you accept the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold">11. Contact</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              If you have questions about these Terms, reach us via the contact
              page or the details below.
            </p>
            <ul className="mt-4 space-y-2 text-white/70 leading-relaxed">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-white underline underline-offset-2 hover:text-white/90 link-underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={`tel:${PHONE_E164}`}
                  className="text-white underline underline-offset-2 hover:text-white/90 link-underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              {OFFICES.map((office) => (
                <li key={office.city}>
                  {office.city}: {office.address}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-secondary font-semibold hover:bg-primary/90 micro-lift micro-press soft-glow"
              >
                Contact us
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

