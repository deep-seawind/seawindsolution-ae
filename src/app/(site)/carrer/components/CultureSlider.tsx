"use client";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/common/Container";

const inter = Inter({ subsets: ["latin"] });

export default function CultureSlider() {
  return (
    <div className={`bg-white py-20 ${inter.className}`}>
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        <div className="w-full lg:w-1/2 text-center lg:text-left relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-chakrapetch text-2xl md:text-3xl lg:text-[40px] font-semibold capitalize leading-snug mt-4">
              OUR CULTURE There are Secret Opportunities Hidden Inside Every Failure
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base max-w-md lg:max-w-lg mx-auto lg:mx-0">
              Discover new favorites among our diverse exhibitions. Uncover the stories and inspirations behind the art.
            </p>

            <button className="mt-8 bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all shadow-lg">
              Explore
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
            className="w-full h-[280px] sm:h-[350px] md:h-[450px]"
          >
            {[
              { img: "/images/carrer/image1.jpg", text: "Festivity" },
              { img: "/images/carrer/image2.avif", text: "Team Work" },
              { img: "/images/carrer/image3.jpg", text: "Camaraderie" },
              { img: "/images/carrer/image4.avif", text: "Imagination" },
            ].map((slide, i) => (
              <SwiperSlide key={i} className="relative group cursor-pointer">
                <div className="w-full h-full relative overflow-hidden rounded-xl">
                  <Image src={slide.img} alt={slide.text} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                    <p className="text-sm md:text-base font-medium">{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
