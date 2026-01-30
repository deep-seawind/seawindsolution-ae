"use client";
import React from "react";
import {
  PenTool,
  Star,
  Cpu,
  Globe,
  HeartHandshake,
  BadgeDollarSign,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cardData = [
  {
    title: "Client-Centric Approach",
    text: "At Seawind Solution, the client is at the heart of everything we do. We prioritize understanding their unique requirements and tailoring solutions accordingly.",
    icon: <HeartHandshake size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Innovative Solutions",
    text: "We think outside the box and develop innovative solutions that address business challenges with cutting-edge technology.",
    icon: <PenTool size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Advanced Technology",
    text: "Leveraging advanced technology, we empower businesses with modern tools that boost productivity and efficiency.",
    icon: <Cpu size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Proven Track Record",
    text: "With 10+ years of experience, we have built a strong reputation for delivering high-quality solutions across industries.",
    icon: <Star size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Dedicated Support",
    text: "Our team is dedicated to providing ongoing support, offering guidance and solutions every step of the way.",
    icon: <Globe size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Cost-Effective Solutions",
    text: "We deliver impactful, value-driven solutions without compromising quality—making innovation affordable.",
    icon: <BadgeDollarSign size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
];

export default function AiWhyChoose() {
  return (
    <div className="w-full px-4 md:px-0">
      {/* Heading */}
      <div className="projects-content text-center mb-10 max-w-3xl mx-auto px-2">
        <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch capitalize px-5 inline-block">
          Why choose us
        </span>
        <h2 className="mt-4 font-chakrapetch lg:text-35 text-xl md:text-3xl font-semibold">
          Here's why you should choose us:
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-3xl p-6 md:p-8 min-h-[330px] flex flex-col text-white hover:shadow-xl transition-all duration-300 ${card.bg}`}
            >
              {/* Icon */}
              <div className="mb-4">{card.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium leading-snug">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-indigo-100 text-sm md:text-base mt-4 leading-relaxed">
                {card.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
