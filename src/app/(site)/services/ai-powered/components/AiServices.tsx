"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import Container from "@/components/common/Container";

const contentData = [
  {
    title: "AI Development Services",
    description:
      "We transform ideas into scalable AI solutions, bridging the gap between intuition and analytics.",
    image: "/images/hire/image1.avif",
  },
  {
    title: "Computer Vision",
    description:
      "Automate object detection with our computer vision technology, enabling smart AI-powered solutions.",
    image: "/images/hire/image2.avif",
  },
  {
    title: "Intelligent Automation",
    description:
      "Optimize business efficiency with smart automation, reducing costs and improving security.",
    image: "/images/hire/image3.avif",
  },
  {
    title: "AI Chatbot",
    description:
      "Engage users with AI-powered chatbots that enhance customer support and automate responses.",
    image: "/images/hire/image3.avif",
  },
  {
    title: "Machine Learning",
    description:
      "Harness AI-driven insights to improve forecasting, automation, and business performance.",
    image: "/images/hire/image3.avif",
  },
  {
    title: "AI as a Service",
    description:
      "Scalable AI solutions that integrate automation and intelligence for business efficiency.",
    image: "/images/hire/image3.avif",
  },
];

export default function AiServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#004aad] to-[#003479] py-10 md:py-16">
      <Container>
        {/* Header Section */}
        <div>
          <span className="text-14 bg-[#ffffff] text-[#004aad] font-bold py-1 rounded-xl font-chakrapetch capitalize px-4">
            Our Services
          </span>

          <h2 className="w-full lg:w-3/4 mt-6 font-chakrapetch text-2xl md:text-3xl lg:text-35 text-white capitalize font-semibold leading-tight">
            Our Best AI Solutions
          </h2>

          <p className="text-white/90 font-normal mt-4 text-sm md:text-base leading-relaxed">
            Here are some unique offers that make us one of the most trusted
            offshore software development company in UAE, from where you can
            hire remote developers easily.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-12 mt-12 md:mt-16 lg:grid-cols-2 lg:items-center">
          {/* Left List Section */}
          <div className="space-y-8 overflow-y-auto max-h-[450px] sm:max-h-[500px] pr-3 custom-scrollbar">
            {contentData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex gap-4 cursor-pointer transition-all duration-300 p-4 rounded-lg ${
                  activeIndex === index ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                {/* Check Icon */}
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full shadow-lg transition-colors duration-300 ${
                      activeIndex === index ? "bg-white" : "bg-white/70"
                    }`}
                  >
                    <Check className="h-4 w-4 text-[#004aad]" strokeWidth={3} />
                  </div>
                </div>

                {/* Text */}
                <div className="text-white">
                  <h3
                    className={`mb-3 text-lg md:text-xl font-bold transition-all duration-300 ${
                      activeIndex === index ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-blue-50 opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Dot Pattern Background */}
            <div
              className="absolute -bottom-10 -right-10 z-0 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 2px, transparent 2.5px)",
                backgroundSize: "22px 22px",
              }}
            ></div>

            {/* Blob Image Container */}
            <div className="relative z-10 h-[300px] sm:h-[380px] md:h-[400px] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px]">
              <div
                className="h-full w-full overflow-hidden bg-white shadow-2xl"
                style={{
                  borderRadius: "43% 57% 70% 30% / 30% 56% 44% 70%",
                }}
              >
                <Image
                  key={activeIndex}
                  src={contentData[activeIndex].image}
                  alt="AI Services"
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
