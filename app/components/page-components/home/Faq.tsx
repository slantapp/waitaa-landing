"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your security posture?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, regular security audits, and compliance with industry standards. Your restaurant data and customer information are protected with bank-level security protocols.",
    },
    {
      question: "Are you available for Mobile and Web?",
      answer:
        "Yes, our solution is fully responsive and works seamlessly across all devices. Customers can access your QR menu and request service from any smartphone, tablet, or computer. Our platform is optimized for mobile-first experience while maintaining full functionality on desktop.",
    },
    {
      question: "Would you connect to my Core?",
      answer:
        "Absolutely! We offer seamless integration with popular restaurant management systems, POS systems, and core business applications. Our API allows for easy connectivity with your existing infrastructure to streamline operations and data flow.",
    },
    {
      question: "Do you manage the vendors or would I?",
      answer:
        "We provide flexible vendor management options. You can choose to manage vendors yourself through our intuitive dashboard, or we can handle vendor coordination on your behalf. Our team works with trusted partners across Africa to ensure reliable service delivery.",
    },
    {
      question: "Are you a White-Label solution?",
      answer:
        "Yes, we offer white-label solutions that allow you to brand the entire experience with your restaurant's identity. From custom colors and logos to personalized messaging, customers will see your brand throughout their entire interaction.",
    },
    {
      question: "Who owns the data and the Customers?",
      answer:
        "You retain complete ownership of your customer data and business information. We act as a secure data processor, ensuring you maintain full control over your customer relationships and can export your data at any time. Your customers remain your customers.",
    },
  ];

  const toggleAccordion = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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
                className="bg-[#F4F2EA] hover:bg-[#edece4] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center  transition-colors"
                >
                  <span className="text-[#233200] text-lg font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
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
