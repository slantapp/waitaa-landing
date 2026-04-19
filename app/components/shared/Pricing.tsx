"use client";

import Image from "next/image";
import { CheckCircle, UtensilsCrossed, XCircle } from "lucide-react";
import { useState } from "react";
import pricingData from "@/app/data/pricing-plans.json";

type PlanRow = { label: string; included: boolean };
type PricingPlan = {
  key: string;
  name: string;
  rows: PlanRow[];
  price: { monthly: number; yearly: number };
};
type PricingJson = {
  plans: PricingPlan[];
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const isYearly = billingCycle === "yearly";
  const data = pricingData as PricingJson;
  const { plans } = data;
  const smallPlan = plans.find((p) => p.key === "smallBusiness");
  const standardPlan = plans.find((p) => p.key === "standardRestaurant");

  const renderPlanRows = (rows: PlanRow[] | undefined) => (
    <>
      {(rows ?? []).map((row, index) => (
        <div key={`${row.label}-${index}`} className="flex items-start gap-3">
          {row.included ? (
            <CheckCircle className="w-5 h-5 mt-0.5 text-[var(--color-secondary)] shrink-0" />
          ) : (
            <XCircle className="w-5 h-5 mt-0.5 text-gray-300 shrink-0" />
          )}
          <span
            className={
              row.included
                ? "text-[var(--color-secondary)]"
                : "text-gray-400 line-through"
            }
          >
            {row.label}
          </span>
        </div>
      ))}
    </>
  );
  const formatNaira = (amount: number) => {
    if (amount >= 1000 && amount % 1000 === 0) {
      return `₦${amount / 1000}K`;
    }
    return `₦${new Intl.NumberFormat("en-NG", {
      maximumFractionDigits: 0,
    }).format(amount)}`;
  };

  return (
    <div className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#233200] text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#233200] text-lg md:text-xl mb-8">
            No long-term contracts and no surprise fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-full shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors hover:cursor-pointer ${billingCycle === "monthly"
                ? "bg-[#689501] text-white"
                : "text-gray-600 hover:text-black"
                }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors hover:cursor-pointer ${billingCycle === "yearly"
                ? "bg-[#689501] text-white"
                : "text-gray-600 hover:text-black"
                }`}
            >
              YEARLY
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Promotional Card */}
          <div className="bg-[var(--color-secondary)] h-[668px] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-normal mb-2">
                Save More
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                With Waitaa
              </h3>

              <p className="text-base md:text-lg font-light mb-8 leading-relaxed">
                Choose a plan and get onboard in minutes. Then get unlimited ads
                {isYearly ? " for one year" : " for one month"}
              </p>
            </div>

            {/* Background Image */}
            <div className="absolute bottom-0 right-0 w-full h-2/3">
              <Image
                src="/images/waiterHoldingBurger.png"
                alt="Professional with food"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>

          {/* Small Business Plan */}
          <div className="bg-[#F4F2EA] rounded-3xl p-8 shadow-sm flex flex-col">
            <div className="flex items-center mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-secondary)] mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
                {smallPlan?.name ?? "Small Business"}
              </h3>
            </div>

            <p className="text-gray-500 text-lg mb-8">What You'll Get</p>

            <div className="space-y-4 mb-8 flex-grow">
              {renderPlanRows(smallPlan?.rows)}

              <div className="border-t-2 border-dotted border-gray-400 w-full"></div>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)]">
                  {formatNaira(
                    isYearly
                      ? smallPlan?.price?.yearly ?? 0
                      : smallPlan?.price?.monthly ?? 0
                  )}
                </span>
                <span className="text-gray-500 ml-1">
                  {isYearly ? "/yearly" : "/monthly"}
                </span>
              </div>
            </div>

            <button className="w-full bg-[var(--color-primary)] text-[var(--color-secondary)] py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-primary)]/90 transition-colors mt-auto">
              Choose
            </button>
          </div>

          {/* Standard Restaurant Plan */}
          <div className="bg-[#F4F2EA] rounded-3xl p-8 shadow-sm flex flex-col">
            <div className="flex items-center mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-secondary)] mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
                {standardPlan?.name ?? "Standard Restaurant"}
              </h3>
            </div>

            <p className="text-gray-500 text-lg mb-8">What You'll Get</p>

            <div className="space-y-4 mb-8 flex-grow">
              {renderPlanRows(standardPlan?.rows)}

              <div className="border-t-2 border-dotted border-gray-400 w-full"></div>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-bold text-[var(--color-secondary)]">
                  {formatNaira(
                    isYearly
                      ? standardPlan?.price?.yearly ?? 0
                      : standardPlan?.price?.monthly ?? 0
                  )}
                </span>
                <span className="text-gray-500 ml-1">
                  {isYearly ? "/yearly" : "/monthly"}
                </span>
              </div>
            </div>

            <button className="w-full bg-white text-[var(--color-secondary)] py-4 rounded-full text-lg font-semibold hover:border-[var(--color-primary)] ">
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
