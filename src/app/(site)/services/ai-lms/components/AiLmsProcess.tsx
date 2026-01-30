"use client";
import React from "react";
import { Lightbulb, Clock, Search, Settings } from "lucide-react";
import Container from "@/components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const AiLmsProcess = () => {
  const steps = [
    {
      id: "01",
      color: "#9C27B0",
      icon: <Search size={22} />,
      title: "Choose the Right Plan",
      description:
        "Select a plan based on your team size and business needs, with flexible scalability as you grow.",
    },
    {
      id: "02",
      color: "#673AB7",
      icon: <Lightbulb size={22} />,
      title: "Secure Login & Instant Dashboard Access",
      description:
        "Receive login credentials via email and get immediate access to your personalized AI-powered dashboard.",
    },
    {
      id: "03",
      color: "#E65100",
      icon: <Clock size={22} />,
      title: "Centralized Lead Collection",
      description: "Seamlessly capture and manage leads from websites, landing pages, social ads, and digital platforms in one CRM.",
    },
    {
      id: "04",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Business & Communication Setup",
      description:
        "Customize company details, email settings, and branded templates for automated communications.",
    },
    {
      id: "05",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Automated Email Campaigns",
      description:
        "Launch targeted email campaigns with smart triggers for new leads, assignments, and follow-ups.",
    },
    {
      id: "06",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Smart Lead Assignment",
      description:
        "Add sales agents and let AI assign leads automatically based on availability and performance.",
    },
    {
      id: "07",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Mobile App for Sales Agents",
      description:
        "Enable agents to manage leads and activities anytime, anywhere through a real-time mobile app.",
    },
    {
      id: "08",
      color: "#1565C0",
      icon: <Settings size={22} />,
      title: "Real-Time Performance Analytics",
      description:
        "Monitor lead progress, agent productivity, and campaign results from a centralized analytics dashboard.",
    },
  
  ];

  return (
    <Container className="pt-10">
      {/* Header */}
       <div className="text-center">
          <span className="rounded-xl bg-[#004aad] py-1 ps-5 pe-3 text-sm font-chakrapetch capitalize text-white">
           Work
          </span>

          <h2 className="mt-6 w-full font-chakrapetch text-2xl font-semibold capitalize  lg:text-[35px]">
      How Our AI Lead CRM Sales Automation Works?
          </h2>

          <p className="mt-4 text-pera-dark">
         Our AI Lead CRM Sales Automation captures leads from multiple channels and analyzes their behavior in real time.It automatically prioritizes, assigns, and follows up on leads to help your team convert faster and smarter.
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

export default AiLmsProcess;
