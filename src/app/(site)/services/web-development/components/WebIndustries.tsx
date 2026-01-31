"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Container from "@/components/common/Container";
import Image from "next/image";

// Sample Data for Web Development Services
const services = [
  {
    id: 1,
    title: "E-commerce",
    desc: "Custom e-commerce platforms with integrated payment gateways, shopping carts, and product management features",
    img: "/images/services/service-01.webp",
  },
  {
    id: 2,
    title: "Healthcare",
    desc: "Developing patient-friendly portals, appointment booking systems, and telemedicine platforms.",
    img: "/images/services/service-02.webp",
  },
  {
    id: 3,
    title: "Education",
    desc: "Custom learning management systems (LMS), online course platforms, and student management systems.",
    img: "/images/services/service-03.webp",
  },
  {
    id: 4,
    title: "Hospitality",
    desc: "Website design and development for hotels, resorts, and restaurants, offering online booking and reservations.",
    img: "/images/services/service-7.webp",
  },
  {
    id: 5,
    title: "Real Estate",
    desc: "Real estate website development with property listings, virtual tours, and inquiry forms.",
    img: "/images/services/service-8.webp",
  },
  {
    id: 6,
    title: "Performance Optimization",
    desc: "Optimize web applications for speed, SEO, and better user experience.",
    img: "/images/services/service-9.webp",
  },
];

export default function WebIndustries() {
  return (
    <div
  className="bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage:
      'url("https://img.freepik.com/free-vector/abstract-shiny-lines-white-gray-background_1017-25097.jpg?t=st=1765871765~exp=1765875365~hmac=883c2d1b80ad89c5b97066801befeab0b949d68d88e344fe25bd8a001e464b39&w=1480")',
  }}
>


    <Container className="py-10">
      <div className="text-center ">
        <span className="text-14 bg-[#004aad] text-white py-1 px-5 rounded-2xl font-chakrapetch capitalize inline-block">
    Focus Sectors
        </span>
        <h2 className="w-full mt-6 font-chakrapetch lg:text-3xl capitalize font-bold text-gray-800">
        Industries We Serve
        </h2>
       
        <p className="text-gray-500 font-normal mt-4 ">
       Seawind Solution Fz Llc has experience working with clients across various industries, including:
        </p>
      </div>
      <div className="flex items-center justify-center py-10   overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          {services.map((service) => (
            <SwiperSlide
              key={service.id}
              style={{ width: "320px", height: "450px" }}
              className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {({ isActive }) => (
                <div
                  className={`relative w-full h-full bg-neutral-900 rounded-3xl overflow-hidden group`}
                >
                  {/* Background Image */}
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Bottom: Title & Info */}
                  <div className="absolute bottom-6 left-5 right-5 text-white">
                    <h2 className="text-2xl font-bold leading-tight mb-2 drop-shadow-md">
                      {service.title}
                    </h2>
                    <p className="text-14">{service.desc}</p>
                  </div>

                  {/* Active State Highlight (Optional glow) */}
                  {isActive && (
                    <div className="absolute inset-0 border-[1px] border-white/20 rounded-3xl pointer-events-none" />
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Styles to override Swiper defaults for the 'inactive' slides opacity/blur */}
        <style jsx global>{`
          .swiper-slide {
            transition: all 0.5s ease;
            filter: blur(2px) brightness(0.6); /* Dim inactive slides */
          }
          .swiper-slide-active {
            filter: blur(0px) brightness(1); /* Highlight active slide */
            z-index: 10;
          }
        `}</style>
      </div>
    </Container>
    </div>
  );
}
