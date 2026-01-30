"use client";
import React, { useState } from "react";

import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services does Bexon offer to clients?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
  {
    question: "How do I get started with Corporate Business?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
  {
    question: "How do you ensure the success of a project?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
  {
    question: "How long will it take to complete my project?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
  {
    question: "Can I track the progress of my project?",
    answer:
      "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className=" lg:pb-10">
      {/* Header */}
      <div className="text-center">
          <span className="rounded-xl bg-[#004aad] py-1 ps-5 pe-3 text-sm font-chakrapetch capitalize text-white">
            Faq
          </span>

          <h2 className="mt-6 w-full font-chakrapetch text-2xl font-semibold capitalize  lg:text-[35px]">
          Frequently Questions
          </h2>

          <p className="mt-4 text-pera-dark">
           We offer digital solutions like websites, apps, and branding.
          </p>
        </div>

      {/* FAQ Items */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-4xl mt-10 mx-auto px-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`group relative rounded-xl sm:rounded-2xl border transition-all duration-500 ${
              openIndex === index
                ? "border-transparent bg-gradient-to-r from-[#004aad] to-[#0077ff] shadow-xl"
                : "border-gray-200 bg-white hover:shadow-lg"
            }`}
          >
            {/* Inner Layer */}
            <div
              className={`rounded-xl sm:rounded-2xl transition-all duration-500 ${
                openIndex === index
                  ? "bg-white/10 backdrop-blur-md text-white"
                  : "bg-white"
              }`}
            >
              <button
                className="w-full flex justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg leading-snug">
                  {item.question}
                </span>

                {/* + / - Icon */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-300
                    ${
                      openIndex === index
                        ? "bg-white text-[#004aad] border-white shadow-lg scale-110"
                        : "bg-gradient-to-r from-[#004aad] to-[#0077ff] text-white border-transparent shadow-md group-hover:scale-110"
                    }
                  `}
                >
                  <Icon
                    icon={
                      openIndex === index
                        ? "akar-icons:minus"
                        : "akar-icons:plus"
                    }
                    className={`text-base sm:text-lg transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 text-xs sm:text-sm lg:text-base leading-relaxed text-white/90">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
