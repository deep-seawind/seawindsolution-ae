"use client";

import Container from "@/components/common/Container";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

import {
  FaUsersCog,
  FaHandshake,
  FaMedal,
  FaLifeRing,
  FaExchangeAlt,
  FaBullseye,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CgiWhyChoose = () => {
  const services = [
    {
      id: 1,
      title: "Experienced Team",
      description:
        "Our CGI specialists have vast experience in delivering top-tier visuals across various industries.",
      icon: <FaUsersCog />,
    },
    {
      id: 2,
      title: "Client Centric Approach",
      description:
        "We collaborate closely with you, ensuring our solutions reflect your vision and surpass your expectations.",
      icon: <FaHandshake />,
    },
    {
      id: 3,
      title: "Proven Track Record",
      description:
        "Our diverse portfolio highlights successful CGI projects. has successfully provided and completed more than 300 orders on its digital services.",
      icon: <FaMedal />,
    },
    {
      id: 4,
      title: "Ongoing Support",
      description:
        "We offer after-sale services to ensure your CGI assets stay relevant and up-to-date.",
      icon: <FaLifeRing />,
    },
    {
      id: 5,
      title: "Adaptable",
      description: "Equipped to support our clients at every stage and at every plan.",
      icon: <FaExchangeAlt />,
    },
    {
      id: 6,
      title: "Strict Deadlines & Goals",
      description: "Discipline, Honesty & Accountability are core pillars of our work.",
      icon: <FaBullseye />,
    },
  ];

  return (
    <section
      className="bg-gray-50 py-10 border border-t-[#004aad] border-b-[#004aad] flex flex-col items-center justify-center bg-cover bg-center px-4 md:px-6 lg:px-0"
      style={{
        backgroundImage: 'url("/images/services/why-choose-img.avif")',
      }}
    >
      <Container>
        <div className="projects-content text-center">
          <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch capitalize ps-5 pe-3">
            Why Choose
          </span>

          <h2 className="mt-4 font-chakrapetch text-2xl md:text-3xl lg:text-4xl font-semibold">
            Why Choose Seawind Solution FZ-LLC for CGI?
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Your success is our priority. provides CGI services in Dubai, that
            not only look incredible but also help drive your business goals.
            Our visuals are crafted to capture your audience's attention and
            leave a lasting impression. From numerous CGI service providers in
            Dubai, here's what sets us apart, and why you should work with us:
          </p>
        </div>

        {/* Responsive Slider */}
        <Swiper
          spaceBetween={20}
          className="mt-14"
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div
                className="
                group relative bg-white rounded-3xl border border-[#004aad]
                pt-5 px-8 mt-12 transition-all duration-500
                hover:-translate-y-3 hover:scale-[1.03]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                hover:bg-gradient-to-br hover:from-white hover:to-[#e8f1ff]
                h-[330px] flex flex-col justify-between
              "
              >
                {/* Icon */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div
                    className="
                    bg-white w-20 h-20 flex items-center justify-center
                    text-4xl text-[#004aad]
                    shadow-[0_5px_15px_rgba(0,0,0,0.08)]
                    rounded-[20px] rounded-t-lg relative
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:shadow-[0_10px_30px_rgba(0,74,173,0.25)]
                    group-hover:text-[#00357a]
                  "
                  >
                    <div className="absolute inset-0 border border-gray-100 rounded-[20px] rounded-t-lg"></div>
                    {service.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-4 mt-12 transition-all">
                  <h3
                    className="
                    text-lg md:text-xl font-bold text-[#1a1a2e] text-start
                    group-hover:text-[#003b9a] transition-colors
                  "
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-start text-sm md:text-base leading-relaxed group-hover:text-gray-700">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <div className="pt-4 flex justify-center mb-6">
                  <button
                    className="
                    w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center
                    text-gray-400 transition-all shadow-sm
                    group-hover:bg-[#004aad] group-hover:text-white
                    group-hover:shadow-[0_10px_20px_rgba(0,74,173,0.4)]
                  "
                  >
                    <BsArrowRight className="text-lg" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CgiWhyChoose;
