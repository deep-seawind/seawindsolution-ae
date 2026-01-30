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
    text: "At Seawind Solution, the client is at the heart of everything we do. We prioritize understanding their unique requirements and tailoring our solutions to meet their specific needs.",
    icon: <HeartHandshake size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Innovative Solutions",
    text: " We pride ourselves on our ability to think outside the box and develop innovative solutions that address the challenges faced by our clients. Our team of experts is constantly pushing the boundaries of technology to deliver cutting-edge solutions.",
    icon: <PenTool size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Advanced Technology",
    text: "Leveraging the latest advancements in technology, we empower our clients with state-of-the-art tools and platforms that enhance their productivity and efficiency.",
    icon: <Cpu size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Proven Track Record",
    text: "With over 10 years of experience in the industry, we have built a solid reputation for delivering high-quality solutions that exceed our clients' expectations. Our portfolio speaks for itself, showcasing the successful projects we have completed for businesses across various industries.",
    icon: <Star size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Dedicated Support",
    text: "We understand that our clients' success is our success, which is why we are committed to providing them with dedicated support every step of the way. Whether it's troubleshooting technical issues or providing guidance on strategy, our team is here to help.",
    icon: <Globe size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
  {
    title: "Cost-Effective Solutions",
    text: "We believe that quality should not come at a premium. That's why we offer cost-effective solutions that deliver exceptional value for money without compromising on quality.",
    icon: <BadgeDollarSign size={32} className="text-white/80" />,
    bg: "bg-[#004aad]",
  },
];

export default function WhyChooseSlider() {
  return (
    <div className="w-full">
      <div className="projects-content text-center mb-10">
        <span className=" text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
          Why choose us
        </span>
        <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
          Here's why you should choose us:
        </h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
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
              className={`rounded-3xl p-8 h-[300px] flex flex-col text-white hover:shadow-xl transition-shadow duration-300 ${card.bg}`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-medium">{card.title}</h3>
              <p className="text-indigo-100 text-base mt-4">{card.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
