import Image from "next/image";
import Link from "next/link";

export default function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-28">
      <div className="w-[95%] mx-auto mt-3 rounded-4xl bg-[#F4F2EA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl bg-white shadow-sm p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#233200]/10 blur-2xl" />
                <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[var(--color-primary)]/15 blur-2xl" />

                <p className="text-[var(--color-secondary)]/60 text-sm">
                  QR Code Restaurant Ordering System in Africa
                </p>
                <p className="mt-2 text-[var(--color-secondary)] text-xl font-semibold">
                  Smart ordering without waiting
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4">
                  {[
                    "Customer scans QR code and views a beautiful digital menu",
                    "Selects items and places an order from their phone",
                    "Business receives orders instantly and updates status",
                    "Customers track order progress without calling staff",
                  ].map((step) => (
                    <div
                      key={step}
                      className="rounded-2xl bg-[#F4F2EA] p-5 border border-black/5"
                    >
                      <p className="text-[var(--color-secondary)]/80">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[var(--color-primary)] text-[var(--color-secondary)] font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[var(--color-secondary)] text-white font-semibold hover:bg-[var(--color-secondary)]/90 transition-colors"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[#233200] text-sm font-medium tracking-wider uppercase">
                Menu
              </p>
              <h2 className="mt-4 text-[#233200] text-4xl md:text-5xl font-semibold leading-tight">
                Contactless ordering and service solution
              </h2>
              <p className="mt-5 text-[#233200]/80 text-base md:text-lg leading-relaxed max-w-xl">
                Menu lets customers browse and order directly from their phones.
                Orders appear instantly on your dashboard so staff can manage
                workflow, reduce errors, and speed up service.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 border border-black/5">
                  <p className="text-[#233200] font-semibold">Digital menu</p>
                  <p className="mt-2 text-[#233200]/70 text-sm leading-relaxed">
                    Mobile-friendly menu that stays up to date with pricing and
                    items.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 border border-black/5">
                  <p className="text-[#233200] font-semibold">
                    Order management
                  </p>
                  <p className="mt-2 text-[#233200]/70 text-sm leading-relaxed">
                    Receive, manage, and fulfill orders in real time.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 border border-black/5">
                  <p className="text-[#233200] font-semibold">Live status</p>
                  <p className="mt-2 text-[#233200]/70 text-sm leading-relaxed">
                    Customers track updates without needing to call staff.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 border border-black/5">
                  <p className="text-[#233200] font-semibold">
                    Checkout visibility
                  </p>
                  <p className="mt-2 text-[#233200]/70 text-sm leading-relaxed">
                    Monitor spending patterns and improve service efficiency.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

