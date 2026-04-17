"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Waitaa, and who is it for?",
      answer:
        "Waitaa is a smart customer interaction ecosystem for restaurants, hotels, lounges, cafes, and other service environments. We help you connect with customers via QR-based calling, ordering, and engagement—without adding friction to the experience.",
    },
    {
      question: "What products do you offer (Ringa vs Menu)?",
      answer:
        "Waitaa powers two core products: Ringa (smart customer calling & communication) and Menu (QR-based digital menu + ordering). You can use either product independently, or combine both for a full service and ordering flow.",
    },
    {
      question: "Do I need any additional hardware to use Waitaa?",
      answer:
        "No. Waitaa is designed to work with QR codes and the devices you already have. Customers use their phones, and your team receives requests or orders on supported devices via the dashboard.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most businesses can get started quickly. Once your QR codes are placed, your menu or services are configured, and your team is onboarded, you can begin receiving requests (Ringa) and/or orders (Menu) immediately.",
    },
    {
      question: "Can Waitaa help me earn additional revenue?",
      answer:
        "Yes. Ringa includes an ads monetization system that can display campaigns after customers scan a QR code, with analytics like impressions and engagement. You can also run ads on an optional Ads Screen (TV/Android display).",
    },
    {
      question: "How do I talk to your team before signing up?",
      answer:
        "You can reach us via the Contact us page. We’ll help you decide between Ringa, Menu, or a combined setup and guide you through next steps for your business.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Header */}
          <div>
            <p className="text-[#596CF2] text-lg mb-4 font-medium">FAQs</p>
            <h2 className="text-[#233200] text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Your questions, answered.
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] hover:bg-[#f4f4ee] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center  transition-colors"
                >
                  <span className="text-[#233200] text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
