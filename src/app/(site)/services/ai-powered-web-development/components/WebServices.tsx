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

// Sample Data to match your image
const movies = [
  {
    id: 1,
    title: "AI Chatbots & Virtual Assistants",
   desc:"Enhance customer experience with 24/7 support powered by intelligent conversational bots.",
    img: "/images/services/chatbot.avif",
  },
  {
    id: 2,
    title: "Personalized User Experiences",
    desc:"Deliver tailored content, product suggestions, and dynamic interfaces using machine learning.",
    img: "/images/services/experience.avif",
  
  },
  {
    id: 3,
    title: "Predictive Analytics",
    desc:"Gain insights into user behavior and trends with advanced AI data analysis.",
    img: "/images/services/analytics.avif",

  },
  {
    id: 4,
    title: "Voice & Image Recognition",
  desc:"Integrate modern recognition features into your platforms for added user convenience.",
    img: "/images/services/voice.avif",

  },
  {
    id: 5,
    title: "Automation & Smart Workflows",
    desc:"Reduce manual tasks with intelligent automation and AI-driven workflows.",
    img: "/images/services/autometion.avif",
  
  },
  {
    id: 6,
    title: "Database Design & Integration",
    desc:"Efficient and secure database design and integration to ensure smooth data flow, scalability.",
    img: "/images/services/design.avif",
  
  },
];

export default function WebServices() {
  return (
    <Container className="py-10">
      <div className="text-center ">
        <span className="text-14 bg-[#004aad] text-white py-1 px-5 rounded-2xl font-chakrapetch capitalize inline-block">
        Our Services
        </span>
        <h2 className="w-full mt-6 font-chakrapetch lg:text-3xl capitalize font-bold text-gray-800">
         What Our AI-Powered Web Development Services Include

        </h2>
       
        <p className="text-gray-500 font-normal mt-4 ">
        We offer a comprehensive range of AI-integrated services tailored to your unique business needs. Our aim is to enhance user engagement, simplify operations, and maximize ROI with smart web solutions.
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
          {movies.map((movie) => (
            // width is fixed (w-64) to ensure coverflow calculates centers correctly
            // sm:w-72 md:w-80 makes it responsive
            <SwiperSlide
              key={movie.id}
              style={{ width: "320px", height: "450px" }}
              className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {({ isActive }) => (
                <div
                  className={`relative w-full h-full bg-neutral-900 rounded-3xl overflow-hidden group`}
                >
                  {/* Background Image */}
                  <Image
                    src={movie.img}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              

                  {/* Bottom: Title & Info */}
                  <div className="absolute bottom-6 left-5 right-5 text-white">
                    <h2 className="text-2xl font-bold leading-tight mb-2 drop-shadow-md">
                      {movie.title}
                    </h2>
                    <p className="text-14">{movie.desc}</p>
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
  );
}
