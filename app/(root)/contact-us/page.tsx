import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import PatternHero from "@/app/components/shared/PatternHero";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with Waitaa. Reach our team for questions about Ringa, Menu, pricing, or partnerships.",
};

export default function ContactUsPage() {
  return (
    <div className="pt-0 pb-20">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <PatternHero
        title="Get in Touch with Waitaa"
        subtitle="Talk to our team about Ringa, Menu, or custom QR experiences for your business."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: contact details */}
          <section className="pt-6 lg:pt-14">
            <h1 className="text-white text-4xl md:text-5xl font-normal">
              Get in Touch
            </h1>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Join our newsletter to stay upto date on features and realeases.
            </p>

            <div className="mt-10 space-y-7 text-white/80">
              <div>
                <p className="text-white/60 text-sm mb-1">Email:</p>
                <p className="font-medium text-white">support@waitaa.com</p>
              </div>

              <div>
                <p className="text-white/60 text-sm mb-1">Phone Number:</p>
                <p className="font-medium text-white">(123) 1221 2323</p>
              </div>

              <div>
                <p className="text-white/60 text-sm mb-1">Assistance hours:</p>
                <p className="font-medium text-white">
                  Monday through Friday, 6 a.m. to 8 p.m. EST
                </p>
              </div>

              <div>
                <p className="text-white/60 text-sm mb-1">Address:</p>
                <p className="font-medium text-white">
                  123 Innovation Avenue, London,
                  <br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="X"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </section>

          {/* Right: form card */}
          <section className="bg-[#0B0B0B] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <h2 className="text-white text-2xl font-semibold">Your Details</h2>
            <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-lg">
              You're moments away from accessing one of Africa's most trusted
              Restaurant. This short form helps us tailor your experience. It
              takes under 60 seconds.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    First Name
                  </label>
                  <input
                    placeholder="First Name"
                    className="w-full h-12 rounded-full bg-black/30 border border-white/10 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    className="w-full h-12 rounded-full bg-black/30 border border-white/10 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Name of Restaurant
                </label>
                <input
                  placeholder="Name of Restaurant"
                  className="w-full h-12 rounded-full bg-black/30 border border-white/10 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Email Address
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  className="w-full h-12 rounded-full bg-black/30 border border-white/10 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Country
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="ghana">Ghana</SelectItem>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="south-africa">South Africa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    City
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select from the option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="abuja">Abuja</SelectItem>
                      <SelectItem value="accra">Accra</SelectItem>
                      <SelectItem value="nairobi">Nairobi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  Phone Number (whatsApp Preferred)
                </label>
                <div className="flex gap-3">
                  <div className="w-28">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="US" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">US</SelectItem>
                        <SelectItem value="ng">NG</SelectItem>
                        <SelectItem value="gh">GH</SelectItem>
                        <SelectItem value="ke">KE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <input
                    placeholder="Phone Number"
                    className="flex-1 h-12 rounded-full bg-black/30 border border-white/10 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/20"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full h-12 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

