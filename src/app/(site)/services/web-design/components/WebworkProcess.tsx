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
      title: "Discovery and Consultation",
      description:
        "We begin with an in-depth discussion to understand your business goals and project scope.",
    },
    {
      id: "02",
      color: "#673AB7",
      icon: <Lightbulb size={22} />,
      title: "Planning and Strategy",
      description:
        "Our team creates a comprehensive plan, setting timelines, defining milestones, and selecting the best technologies for your project",
    },
    {
      id: "03",
      color: "#E65100",
      icon: <Clock size={22} />,
      title: "Design and Development",
      description: "We focus on creating aesthetically pleasing and highly functional designs that provide an optimal user experience.",
    },
    {
      id: "04",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Testing and Quality Assurance",
      description:
        "We conduct rigorous testing to ensure your website performs flawlessly across devices and browsers.",
    },
    {
      id: "05",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Launch and Maintenance",
      description:
        "Once everything is set, we launch your website and provide ongoing maintenance and support",
    },
  ];

  return (
    <Container className="py-10">
      {/* Header */}
      <div className="text-center px-3 sm:px-6">


        <h2 className="w-full font-chakrapetch text-2xl sm:text-3xl lg:text-3xl capitalize font-bold text-gray-800 leading-snug">
         Our Process
        </h2>

        <p className="text-gray-500 font-normal mt-4 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
        We follow a structured and transparent process to ensure your web development project is a success:
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
