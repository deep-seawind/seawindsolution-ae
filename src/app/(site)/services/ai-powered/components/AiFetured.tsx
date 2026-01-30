"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";

const AiFetured = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const services = [
    {
      id: "01",
      title: "Advanced AI Algorithms",
      description:
        "Our AI agency in Dubai employs cutting-edge algorithms for intelligent automation and business transformation.",
      image: "/images/services/algo.avif",
    },
    {
      id: "02",
      title: "Seamless Integration",
      description:
        "Our AI business solutions in RAK are designed to integrate effortlessly with your existing systems.",
      image: "/images/services/seemless.jpg",
    },
    {
      id: "03",
      title: "Scalability",
      description:
        "Our AI-powered services in UAE are scalable to match your growing business demands.",
      image: "/images/services/Scalability.avif",
    },
    {
      id: "04",
      title: "Enhanced Security",
      description:
        "We prioritize data protection, ensuring secure AI automation services in Dubai.",
      image: "/images/services/security.avif",
    },
    {
      id: "05",
      title: "Custom AI Models",
      description:
        "We build tailor-made artificial intelligence solutions to meet your unique business requirements.",
      image: "/images/services/custom-ai.avif",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-14 bg-[#004aad] text-white font-bold py-1 rounded-xl font-chakrapetch capitalize ps-5 pe-3">
              Our Services
            </span>

            <h2 className="w-full lg:w-3/4 mt-6 font-chakrapetch lg:text-35 text-black capitalize font-semibold leading-tight">
              Our Base of AI Features
            </h2>
          </div>

          <div className="max-w-md border-l-4 border-[#004aad] pl-6">
            <p className="text-gray-500 text-sm md:text-base">
              Explore the core capabilities that power our advanced AI
              solutions. From automation to intelligent analytics, our features
              are designed to elevate business performance.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.id}
                className={`rounded-[2rem] p-6 md:p-8 transition-colors duration-300 ${
                  isOpen ? "bg-gray-50" : "bg-gray-50/50 hover:bg-gray-50"
                }`}
              >
                {/* Accordion Header */}
                <div
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1">
                    <span className="text-lg font-medium text-gray-500 font-mono">
                      {service.id}.
                    </span>

                    <h3 className="text-xl md:text-2xl font-medium font-chakrapetch text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <button className="bg-[#004aad] hover:bg-[#004aad] text-white text-xs font-bold py-2 px-6 rounded-full transition-colors capitalize tracking-wide">
                      Read More
                    </button>

                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white transition-transform duration-300">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="mt-8 md:pl-20 animate-fadeIn">
                    <p className="text-gray-500 mb-8 max-w-3xl leading-relaxed">
                      {service.description}
                    </p>

                    {/* Image */}
                    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-sm hover:grayscale transition-all duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AiFetured;
