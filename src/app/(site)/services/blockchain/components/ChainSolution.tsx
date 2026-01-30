"use client";
import React from "react";
import Image from "next/image"; 
import Container from "@/components/common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ChainSolution = () => {
  const services = [
    {
      id: 1,
      title: "Private Blockchain Development",
      decs: "Secure and scalable private blockchain networks tailored for enterprises seeking privacy and control.",
      image: "/images/services/chain-1.avif",
      active: true,
    },
    {
      id: 2,
      title: "Smart Contract Development",
      decs: "Secure and scalable private blockchain networks tailored for enterprises seeking privacy and control.",
      image: "/images/services/chain-2.avif",
      active: false,
    },
    {
      id: 3,
      title: "Cryptocurrency Wallet Development",
      decs: "Secure and scalable private blockchain networks tailored for enterprises seeking privacy and control.",
      image: "/images/services/chain-3.jpg",
      active: false,
    },
    {
      id: 4,
      title: "Tokenization Services",
      decs: "Secure and scalable private blockchain networks tailored for enterprises seeking privacy and control.",
      image: "/images/services/chain-4.avif",
      active: false,
    },
    {
      id: 5,
      title: "Blockchain Consulting",
      decs: "Secure and scalable private blockchain networks tailored for enterprises seeking privacy and control.",
      image: "/images/services/chain-5.avif",
      active: false,
    },
  ];

  return (
    <section className="py-10 md:py-14 lg:py-10 bg-white text-[#2A1B1B]">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 px-3">
          <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch px-6 shadow-lg">
            Solution
          </span>

          <h2 className="mt-4 font-chakrapetch text-2xl sm:text-3xl lg:text-35 font-extrabold tracking-wide text-gray-900">
            Our Solutions
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We offer cutting-edge blockchain development solutions designed to empower
            businesses with transparency, automation, and security.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-[300px] sm:h-[340px] md:h-[360px] lg:h-[380px] rounded-[2rem] overflow-hidden group shadow-md">
                
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />

                {/* Content */}
                <div className="absolute left-5 right-5 top-5 bottom-5 flex flex-col justify-between transition-all duration-500">
                  
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-medium font-chakrapetch text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-xs sm:text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.decs}
                  </p>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ChainSolution;
