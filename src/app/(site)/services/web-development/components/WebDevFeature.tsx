// Cleaned and optimized version of the ServicesSlider component
"use client";

import Container from "@/components/common/Container";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const businessData = [
  {
    id: 1,
    title: "Responsive Design",
    des: "Optimized for all screen sizes, ensuring a seamless experience on mobile, tablet, and desktop.",
    image:
       "/images/services/feature-1.avif",
  },
  {
    id: 2,
    title: "SEO Optimized",
    des: "We incorporate SEO best practices to help your website rank higher on search engines and reach a broader audience.",
    image:
      "/images/services/feature-2.jpg",
  },
  {
    id: 3,
    title: "Secure and Scalable",
    des: "With our expertise, your website is built with security and scalability in mind, so it can grow with your business.",
    image:
        "/images/services/feature-3.jpg",
  },
  {
    id: 4,
    title: "Fast Loading Speed",
    des: "We optimize the website to load quickly, enhancing user experience and SEO rankings.",
    image:
      "/images/services/feature-4.avif",
  },
  {
    id: 5,
    title: "Content Management System (CMS)",
    des: "Easy-to-use CMS for hassle-free content updates and management.",
    image:
      "/images/services/feature-5.avif  ",
  },
 
];

export default function WebDevFeature() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const cardWidth = 360; // card width including gap
  const maxIndex = Math.ceil(businessData.length / cardsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section
      className="relative w-full py-10 bg-white overflow-hidden flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("/images/services/services-bgg.avif")',
      }}
    >
      <Container className="flex flex-col lg:flex-row h-full relative z-10">
        {/* Left Section */}
        <div className="w-full lg:w-full flex flex-col justify-center lg:pr-12 mb-12 lg:mb-0">
    

          <h1 className=" font-extrabold font-chakrapetch text-white text-[45px] mb-6 tracking-tight">
       Key Features
          </h1>

          <p className="text-white text-base mb-12 leading-relaxed ">
         We provide a range of key features to ensure your website stands out:
          </p>

          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300
                ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed text-gray-400"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-12 h-12 rounded-full border border-white flex items-center justify-center transition-all duration-300 group
                ${
                  currentIndex === maxIndex
                    ? "opacity-50 border-gray-300 text-white"
                    : "hover:bg-gray-800 hover:text-white text-white"
                }`}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-full relative flex items-center">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[450px] rounded-tl-[60px] rounded-bl-[60px]  shadow-2xl -z-10"></div>

          <div className="w-full pl-8 py-8 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (cardWidth * cardsPerView)}px)`,
              }}
            >
              {businessData.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-[340px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>

                  <div className="p-8 bg-white h-40 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
