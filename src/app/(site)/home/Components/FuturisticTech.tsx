"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  FaRobot,
  FaLink,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaShoppingCart,
} from "react-icons/fa";
import {
  SiFramework,
  SiHiveBlockchain,
  SiFrontendmentor,
  SiBackendless,
} from "react-icons/si";

import { MdOutlinePowerSettingsNew } from "react-icons/md";

import "swiper/css";
import Container from "@/components/common/Container";

const FuturisticTech: React.FC = () => {
  const technologies = [
    {
      icon: <FaRobot />,
      title: "Hi-Tech",
      description: "Advanced algorithms that adapt to your business needs",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <FaLink />,
      title: "AI/ML",
      description: "Secure, transparent, and decentralized systems",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <FaCloud />,
      title: "Cloud/DevOps",
      description: "Scalable infrastructure for unlimited growth",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <MdOutlinePowerSettingsNew />,
      title: "Platforms/BI tools",
      description: "Connected devices for smart business operations",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <SiFramework />,
      title: "Frameworks",
      description: "Next-gen protection for digital assets",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <SiFrontendmentor />,
      title: "Frontend",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <SiBackendless />,
      title: "Back-End",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
      ],
    },
    {
      icon: <FaShoppingCart />,
      title: "CMS/Ecommerce",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/10.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
      ],
    },
    {
      icon: <FaTools />,
      title: "Tools",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/10.webp",
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",
        "/images/technology/4.webp",
        "/images/technology/5.webp",
      ],
    },
    {
      icon: <SiHiveBlockchain />,
      title: "Blockchain",
      description: "Transform data into actionable insights",
      images: [
        "/images/technology/4.webp",
        "/images/technology/5.webp",
        "/images/technology/6.webp",
        "/images/technology/7.webp",
        "/images/technology/8.webp",
        "/images/technology/9.webp",
        "/images/technology/1.webp",
        "/images/technology/2.webp",
        "/images/technology/3.webp",

        "/images/technology/10.webp",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#004aad] py-10 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-[#d2dce9] text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-4">
            Future Technology
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-chakrapetch">
            Futuristic Technology <br />
            Unique to All Business Needs
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Harness cutting-edge innovations that transform your business
            operations and drive unprecedented growth in the digital era.
          </p>
        </div>

        <div className="mb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="technology-tabs-slider"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`w-full px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span>{tech.title}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {technologies[activeTab].images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl  h-24 flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`${technologies[activeTab].title} technology ${
                      index + 1
                    }`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-[#004aad] hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Explore Our Solutions
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FuturisticTech;
