"use client";
import React from "react";
import { Lightbulb, Clock, Search, Settings } from "lucide-react";
import Container from "@/components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const WebworkProcess = () => {
  const steps = [
    {
      id: "01",
      color: "#9C27B0",
      icon: <Search size={22} />,
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business model, audience, and goals.",
    },
    {
      id: "02",
      color: "#673AB7",
      icon: <Lightbulb size={22} />,
      title: "AI Integration Planning",
      description:
        "We identify areas where AI can create the most impact — recommendation systems, chatbots, automation, etc.",
    },
    {
      id: "03",
      color: "#E65100",
      icon: <Clock size={22} />,
      title: "Design & Prototyping",
      description: "Creating user-centric designs with AI-backed UX/UI enhancements.",
    },
    {
      id: "04",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Development & Testing",
      description:
        "Building secure, scalable websites with AI-powered features using the latest frameworks.",
    },
    {
      id: "05",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Launch & Optimization",
      description:
        "Deployment with monitoring, learning, and updates to maximize performance.",
    },
  ];

  return (
    <Container className="py-10">
      {/* Header */}
      <div className="text-center px-3 sm:px-6">
        <span className="text-14 bg-[#004aad] text-white py-1 px-5 rounded-xl font-chakrapetch capitalize inline-block">
          Our Process
        </span>

        <h2 className="w-full mt-6 font-chakrapetch text-2xl sm:text-3xl lg:text-3xl capitalize font-bold text-gray-800 leading-snug">
          How We Build Smarter Web Experiences
        </h2>

        <p className="text-gray-500 font-normal mt-4 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          At Seawind Solution, our AI development process is strategically designed to
          align with your business goals. From concept to launch, our team follows a
          structured and transparent methodology to ensure high-quality results.
        </p>
      </div>

      {/* Slider */}
      <Container className="py-10 px-2 sm:px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 2500 }}
          centeredSlides={false}
        >
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <div className="relative group h-[330px] sm:h-[350px] w-full mt-4">
                {/* Behind colored layer */}
                <div
                  className="absolute inset-0 rounded-[2.5rem]"
                  style={{ backgroundColor: step.color }}
                ></div>

                {/* Foreground card */}
                <div
                  className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl p-5 sm:p-6 flex flex-col transform -rotate-6 transition-transform duration-300 group-hover:rotate-0 scale-95 origin-center"
                >
                  {/* Icon top right */}
                  <div className="w-full flex justify-end text-gray-400 mb-4">
                    <div className="border border-gray-200 rounded-full p-2 sm:p-2.5">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center mt-2 px-2">
                    <h3
                      className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step number */}
                  <div className="mt-auto text-left w-full pl-2 pb-2">
                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Step
                    </p>
                    <p
                      className="text-2xl sm:text-3xl font-bold leading-none"
                      style={{ color: step.color }}
                    >
                      {step.id}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-slide {
            opacity: 1 !important;
            filter: none !important;
          }
        `}</style>
      </Container>
    </Container>
  );
};

export default WebworkProcess;
