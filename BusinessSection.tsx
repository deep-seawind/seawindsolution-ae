"use client";

import Container from "@/components/common/Container";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const businessData = [
  {
    id: 1,
    title: "Custom AI Development",
    des: "Tailored AI systems that solve specific business challenges using NLP, computer vision, deep learning, and more.",
    image:
      "https://images.unsplash.com/photo-1499573356059-d6e3251e133e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Machine Learning Models",
    des: "Design, train, and deploy supervised or unsupervised models for classification, regression, and clustering.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI-Powered Chatbots",
    des: "Smart virtual assistants for websites, apps, and customer support that understand natural language.",
    image:
      "https://images.unsplash.com/photo-1615811361524-78849827499b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Predictive Analytics",
    des: "Analyze historical data to forecast trends, behaviors, and business outcomes with high accuracy.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Data Engineering & Annotation",
    des: "End-to-end data pipeline setup, including data collection, cleaning, labeling, and transformation.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "AI Consulting & Strategy",
    des: "Not sure where to begin? Our AI consultants can assess your readiness and help craft a winning roadmap.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function BusinessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < businessData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full py-10 bg-white overflow-hidden flex items-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage:
      'url("https://img.freepik.com/free-psd/modern-abstract-blue-gradient-background_84443-3746.jpg?t=st=1765346119~exp=1765349719~hmac=392e7ff32b621bd0f0e36119220f249ef605828ad67d9f8325aac7c7c7c380ef&w=1480")',
  }}>
      <Container className="flex flex-col lg:flex-row h-full relative z-10">
        <div className="w-full lg:w-[35%] flex flex-col justify-center lg:pr-12 mb-12 lg:mb-0">
          <span className="text-blue-500 font-bold text-lg mb-2 tracking-wide">
            Business Areas
          </span>

          <h1 className="text-6xl font-extrabold text-black mb-6 tracking-tight">
            Business
          </h1>

          <p className="text-gray-500 text-lg mb-12 leading-relaxed font-medium">
            You can check the various technologies and capabilities of Geumjeong
            Development Co., Ltd.
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
              disabled={currentIndex >= businessData.length - 1}
              className={`w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center transition-all duration-300 group
                 ${
                   currentIndex >= businessData.length - 1
                     ? "opacity-50 border-gray-300 text-gray-400"
                     : "hover:bg-gray-800 hover:text-white text-gray-800"
                 }`}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[65%] relative flex items-center">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[150%] h-[500px] bg-[#ffffff] rounded-tl-[60px] rounded-bl-[60px] -z-10 shadow-2xl"></div>

          <div className="w-full overflow-hidden pl-8 py-8">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (320 + 24)}px)`,
              }}
            >
              {businessData.map((item) => (
                <div
                  key={`${item.id}-${item.title}`}
                  className="flex-shrink-0 w-[320px] bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>

                  <div className="p-8 bg-white h-40 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.des}</p>
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