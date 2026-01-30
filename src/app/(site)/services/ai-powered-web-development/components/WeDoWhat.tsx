"use client";

import React, { useState, useEffect } from "react";
import { Bot, Target, Layers, Rocket, Lightbulb } from "lucide-react";
import Image from "next/image";

const WeDoWhat = () => {
  const sliderImages = [
    {
      image: "/images/services/ai.avif",
      icon: <Bot />,
      title: "AI Integration",
      description: "Seamlessly embed AI tools into existing systems.",
    },
    {
      image: "/images/services/custom-ai.avif",
      icon: <Target />,
      title: "Custom AI Solutions",
      description:
        "Tailored AI applications developed to solve specific business challenges.",
    },
    {
      image: "/images/services/scalabel.avif",
      icon: <Layers />,
      title: "Scalable Web Architecture",
      description: "Build systems that grow with your business needs.",
    },
    {
      image: "/images/services/real-time.jpg",
      icon: <Rocket />,
      title: "Real-Time Data Processing",
      description: "Enable faster decision-making with live data interpretation.",
    },
    {
      image: "/images/services/cross-platform.avif",
      icon: <Lightbulb />,
      title: "Cross-Platform Compatibility",
      description: "Web apps optimized for desktop, mobile, and beyond.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [sliderImages.length]);

  return (
    <div className="relative w-full bg-[#F0F5FA] overflow-hidden font-sans flex items-center justify-center">

      {/* BACKGROUND SHAPE (Desktop only) */}
      <div
        className="absolute bottom-0 right-0 w-[45%] h-[100%] bg-[#0B2545] rounded-[450px_0px_0px_0px] bg-cover z-0 hidden lg:block"
        style={{ backgroundImage: `url(/images/services/why-bg.avif)` }}
      />

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* LEFT SECTION TEXT */}
        <div className="text-start">
          <span className="text-14 bg-[#004aad] text-white py-1 px-5 rounded-2xl font-chakrapetch inline-block">
            Our Process
          </span>

          <h2 className="mt-6 font-chakrapetch text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Building Smarter Solutions with AI:
          </h2>

          <h2 className="mt-4 font-chakrapetch text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Our Key Capabilities
          </h2>

          <p className="text-gray-500 font-normal mt-4 text-sm sm:text-base leading-relaxed">
            We don’t just build websites — we create intelligent ecosystems that drive business growth. Our AI development process is rooted in innovation, reliability, and adaptability.
          </p>
        </div>

        {/* RIGHT SECTION — RESPONSIVE SLIDER */}
        <div className="relative h-[430px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end">

          <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-full">

            {sliderImages.map((image, i) => {
              // Position Logic (Responsive Scaling)
              const isActive = i === index;
              const isNext = i === (index + 1) % sliderImages.length;

              // Card Size Based on Screen
              const baseWidth = {
                mobile: "260px",
                sm: "320px",
                md: "360px",
                lg: "400px",
              };

              const activeHeight = {
                mobile: "430px",
                sm: "480px",
                md: "520px",
                lg: "540px",
              };

              const sideHeight = {
                mobile: "390px",
                sm: "430px",
                md: "460px",
                lg: "480px",
              };

              return (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`absolute transition-all duration-300 ease-out cursor-pointer`}
                  style={{
                    right: isActive
                      ? "1.5rem"
                      : isNext
                      ? "1rem"
                      : "0.5rem",
                    width: isActive
                      ? baseWidth.lg
                      : baseWidth.md,
                    height: isActive
                      ? activeHeight.lg
                      : sideHeight.lg,
                    zIndex: isActive ? 20 : isNext ? 10 : 0,
                    transform: isActive
                      ? "rotate(0deg)"
                      : isNext
                      ? "rotate(8deg)"
                      : "rotate(15deg)",
                  }}
                >
                  {/* CARD BACKGROUND */}
                  <div
                    className={`absolute inset-0 rounded-[40px] shadow-2xl ${
                      isActive
                        ? "bg-white"
                        : isNext
                        ? "bg-[#E3F0FF]"
                        : "bg-[#1D63FF] opacity-90"
                    }`}
                  />

                  {/* CARD CONTENT */}
                  <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                    <Image
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <div className="text-2xl mb-2">{image.icon}</div>
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeDoWhat;
