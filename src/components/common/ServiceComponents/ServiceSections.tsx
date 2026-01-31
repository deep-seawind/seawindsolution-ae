"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";



import Container from "@/components/common/Container";
import { MdRefresh } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Check } from "lucide-react";

import { EffectCoverflow, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css"; 
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ====================================Service Sections Components start====================================

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

type ServiceSectionProps = {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: string;
  services: ServiceItem[];
};

// Services Section Component
export const ServiceSection = ({
  title,
  subtitle = "Services",
  services,
}: ServiceSectionProps) => {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
            {subtitle}
          </span>
          <h2 className="mt-4 font-chakrapetch lg:text-[35px] text-2xl font-semibold">
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services?.map((service, index) => (
            <div
              key={index}
              className="
                relative bg-white rounded-2xl overflow-hidden shadow-lg
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                group
              "
            >
              {/* Hover Gradient Background */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-t from-[#004aad]/60 via-white/40 to-white/10
                "
              />

              {/* Image */} 
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-blue-900/10" />

                  {/* Icon */}
                  <div className="absolute -bottom-8 left-8 z-20">
                    <div className="w-16 h-16 bg-[#0B1C3E] rounded-full flex items-center justify-center border-[5px] border-white">
                      <Icon icon={service.icon} className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>


              {/* Content */}
              <div className="relative pt-12 px-6 pb-8 flex flex-col z-10">
                <h3 className="text-[#0B1C3E] font-chakrapetch font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ====================================Service Sections Components End ====================================
 
 
export type FormSectionProps = {
  title: string;
  subtitle?: { text: string }[];
  buttonText?: string;
};

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  subtitle,
  buttonText = "Send",
}) => {
  return (
    <section className="w-full bg-white py-10">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start lg:items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="mt-4 font-chakrapetch text-start text-2xl md:text-3xl lg:text-3xl font-semibold">
            {title}
          </h2>

          <div className="mt-6 space-y-6">
            {subtitle?.map((item, index) => (
              <p
                key={index}
                className="text-gray-600 text-sm md:text-base text-start leading-relaxed"
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] border border-gray-100 w-full mx-auto lg:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold text-[#004aad] mb-6">
            Get a Quote
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-700 
              focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
              placeholder-gray-500 text-sm transition-all"
            />

            <input
              type="email"
              placeholder="Your Email*"
              className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-700 
              focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
              placeholder-gray-500 text-sm transition-all"
            />

            <PhoneInput
              country={"in"}
              enableSearch
              placeholder="Phone Number*"
              inputClass="!w-full !pl-14 !pr-5 !py-3 !rounded-full !border !border-gray-300 !text-gray-700 focus:!border-[#004aad] focus:!ring-1 focus:!ring-[#004aad]"
              buttonClass="!border-gray-300 !rounded-l-full"
              containerClass="w-full"
            />

            <input
              type="text"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-700 
              focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
              placeholder-gray-500 text-sm transition-all"
            />

            {/* Fake CAPTCHA */}
            <div className="bg-[#f9f9f9] border border-gray-300 rounded p-3 flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-white"></div>
                <span className="text-sm text-gray-700 font-medium">
                  I&apos;m not a robot
                </span>
              </div>
              <div className="flex flex-col items-center text-[10px] text-gray-500">
                <MdRefresh className="text-2xl text-[#004aad] mb-1" />
                <span>reCAPTCHA</span>
                <span className="text-[8px]">Privacy - Terms</span>
              </div>
            </div>

            {buttonText && (
              <button
                type="button"
                className="w-[100px] bg-[#004aad] hover:bg-blue-500 text-white font-medium 
                py-2 px-6 rounded shadow-md transition-colors duration-200 mt-2"
              >
                {buttonText}
              </button>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

// =============================== end Form Section Component  ==============================

// ================================== Call to Action Section start ==================================
export const CallSection = ({
  title,
  description,
  buttonText = "Contact Us", // default fallback
}: {
  title: string;
  description: string;
  buttonText?: string;
}) => {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-gradient-to-r from-[#2c66b8] to-[#122549]">
      {/* Decorative Dots (Background Pattern) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c66b8] via-transparent to-[#122549] opacity-90" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-chakrapetch font-medium text-white mb-4">
          {title}
        </h2>

        <p className="text-white text-base md:text-base mb-8 max-w-xl mx-auto opacity-90">
          {description}
        </p>

        {buttonText && (
          <button className="bg-white text-[#122549] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

// ================================== Call to Action Section end ==================================

// ===============================    Process Section Component start ============================

type Step = {
  id: string;
  color: string;
  icon: string;
  title: string;
  description: string;
};

export const ProcessSection = ({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: Step[];
}) => {
  return (
    <Container className="py-10">
      {/* Header */}
      <div className="text-center px-3 sm:px-6">
        <h2 className="w-full font-chakrapetch text-2xl sm:text-3xl lg:text-3xl capitalize font-bold text-gray-800 leading-snug">
          {title}
        </h2>

        <p className="text-gray-500 font-normal mt-4 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Slider */}
      <Container className="py-10 px-2 sm:px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop
          autoplay={{ delay: 2500 }}
        >
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <div className="relative group h-[330px] sm:h-[350px] w-full mt-4">
                {/* Background Layer */}
                <div
                  className="absolute inset-0 rounded-[2.5rem]"
                  style={{ backgroundColor: step.color }}
                />

                {/* Card */}
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl p-5 sm:p-6 flex flex-col transform -rotate-6 transition-transform duration-300 group-hover:rotate-0 scale-95">
                  {/* Icon */}
                  <div className="w-full flex justify-end text-gray-400 mb-4">
                    <div className="border border-gray-200 rounded-full p-2 sm:p-2.5">
                      <Icon icon={step.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center mt-2 px-2">
                    <h3
                      className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-2"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number */}
                  <div className="mt-auto text-left w-full pl-2 pb-2">
                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Step
                    </p>
                    <p
                      className="text-2xl sm:text-3xl font-bold leading-none"
                      style={{ color: step.color }}
                    >
                      {step.id}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-slide {
            opacity: 1 !important;
            filter: none !important;
          }
        `}</style>
      </Container>
    </Container>
  );
};

// ===============================    Process Section Component end ============================

// ================================= Why Choose Us Section start ================================
export type Feature = {
  title: string;
  description: string;
  image: string;
};

type WhyChooseSectionProps = {
  badgeText?: string;
  title: string;
  description: string;
  features: Feature[];
  image?: string; // ✅ optional main image
};

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  badgeText = "Why Choose",
  title,
  description,
  features,
  image,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#004aad] to-[#003479] py-10 md:py-16">
      <Container>
        {/* Header */}
        <div>
          <span className="text-14 bg-white text-[#004aad] font-bold py-1 rounded-xl font-chakrapetch capitalize px-4">
            {badgeText}
          </span>

          <h2 className="w-full lg:w-3/4 mt-6 font-chakrapetch text-2xl md:text-3xl lg:text-[35px] text-white capitalize font-semibold leading-tight">
            {title}
          </h2>

          <p className="text-white/90 font-normal mt-4 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 mt-12 md:mt-16 lg:grid-cols-2 lg:items-center">
          {/* Left List */}
          <div className="space-y-8 overflow-y-auto max-h-[450px] sm:max-h-[500px] pr-3 custom-scrollbar">
            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex gap-4 cursor-pointer transition-all duration-300 p-4 rounded-lg ${
                  activeIndex === index ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full shadow-lg transition-colors duration-300 ${
                      activeIndex === index ? "bg-white" : "bg-white/70"
                    }`}
                  >
                    <Check className="h-4 w-4 text-[#004aad]" strokeWidth={3} />
                  </div>
                </div>

                <div className="text-white">
                  <h3
                    className={`mb-3 text-lg md:text-xl font-bold transition-all duration-300 ${
                      activeIndex === index ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-blue-50 opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Dot Pattern */}
            <div
              className="absolute -bottom-10 -right-10 z-0 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 2px, transparent 2.5px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Blob Image */}
            <div className="relative z-10 h-[300px] sm:h-[380px] md:h-[400px] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px]">
              <div
                className="h-full w-full overflow-hidden bg-white shadow-2xl"
                style={{
                  borderRadius: "43% 57% 70% 30% / 30% 56% 44% 70%",
                }}
              >
                <Image
                  key={activeIndex}
                  src={image || features[activeIndex].image} // ✅ use main image if provided
                  alt={features[activeIndex].title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
// ================================= Why Choose Us Section end ================================

// ================================== Location Section start =================================

export const LocationSection = ({
  title,
  description,
  locations,
}: {
  title: string;
  description: string;
  locations: string[];
}) => {
  return (
    <section className="bg-white py-10 px-4 flex flex-col items-center justify-center font-sans">
      {/* Header */}
      <h2 className="text-center text-2xl md:text-2xl font-medium text-slate-800 mb-5 max-w-4xl leading-relaxed">
        {title}
      </h2>

      <p className="text-center text-slate-600 mb-12 max-w-3xl">
        {description}
      </p>

      {/* Locations Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px]">
        {locations.map((city, index) => (
          <div
            key={index}
            className="group relative w-full sm:w-[280px] h-[100px] bg-white 
              flex items-center justify-center 
              shadow-[0_8px_30px_rgb(0,0,0,0.08)]
              transition-all duration-300 ease-out
              cursor-pointer
              hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
              rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px]
              border border-transparent hover:border-blue-100"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit] bg-gradient-to-br from-blue-50/50 to-purple-50/50 pointer-events-none" />

            {/* Text */}
            <span className="relative z-10 text-lg font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              {city}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================================== Location Section end =================================

// ================================== Industries Section start ====================================

type Industry = {
  name: string;
  description: string;
  image: string;
};
export const IndustriesSection = ({
  title,
  description,
  industries,
}: {
  title: string;
  description: string;
  industries?: Industry[];
}) => {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center py-10"
      style={{
        backgroundImage:
          'url("/images/services/indus-bg.avif")',
      }}
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-14 bg-[#004aad] text-white py-1 px-5 rounded-2xl font-chakrapetch inline-block">
            Focus Sectors
          </span>

          <h2 className="mt-6 font-chakrapetch text-3xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">{description}</p>
        </div>

        {/* Swiper */}
        <div className="flex items-center justify-center overflow-hidden">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
              1220: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper_container"
          >
            {industries?.map((industry, idx) => (
              <SwiperSlide
                key={idx}
                style={{ width: "320px", height: "450px" }}
                className="relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300"
              >
                {({ isActive }) => (
                  <div className="relative w-full h-full bg-neutral-900 rounded-3xl overflow-hidden group">
                    {/* Background Image */}
                    <Image
                    fill
                      src={industry.image}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-6 left-5 right-5 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-14">{industry.description}</p>
                    </div>

                    {/* Active Border */}
                    {isActive && (
                      <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Blur inactive slides */}
          <style jsx global>{`
            .swiper-slide {
              transition: all 0.5s ease;
              filter: blur(2px) brightness(0.6);
            }
            .swiper-slide-active {
              filter: blur(0) brightness(1);
              z-index: 10;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

// ================================== Industries Section end ====================================

// ==================================== Technology Section start=================================

type Technology = {
  name: string;
  icon: string;
};

export const TechnologySection = ({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: Technology[];
}) => {
  return (
    <section className="bg-white py-16">
      <Container className="mb-12 text-center">
        <span className="text-14 bg-[#004aad] text-white font-normal py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
          Technology
        </span>
        <h2 className="w-full font-chakrapetch lg:text-35 mt-2 text-center text-black capitalize font-semibold">
          {title}
        </h2>
        <p className="text-gray-500 font-normal mt-4 "> {description}</p>
      </Container>

      <div className="relative w-full overflow-hidden">
        {/* Slider Row */}
        <div className="flex w-max animate-scroll-left">
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <TechCard key={index} tech={tech} />
            )
          )}
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
};

/* Tech Card */
const TechCard = ({ tech }: { tech: Technology }) => (
  <div className="mx-4 flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <div className="relative h-16 w-16">
      <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
    </div>
  </div>
);

// ==================================== Technology Section end =================================

// ====================================== Features Section start ======================================

export const FeaturesSection = ({
  features,
}: {
  title: string;
  description: string;
  features: Array<{ title: string; des: string; image: string }>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const cardWidth = 360; // card width including gap
  const maxIndex = Math.ceil(features.length / cardsPerView) - 1;

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
        backgroundImage: 'url("/images/services/services-bgg.avif")',
      }}
    >
      <Container className="flex flex-col lg:flex-row h-full relative z-10">
        {/* Left Section */}
        <div className="w-full lg:w-full flex flex-col justify-center lg:pr-12 mb-12 lg:mb-0">
          <h1 className=" font-extrabold font-chakrapetch text-white text-[45px] mb-6 tracking-tight">
            Key Features
          </h1>

          <p className="text-white text-base mb-12 leading-relaxed ">
            We provide a range of key features to ensure your website stands
            out:
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
                transform: `translateX(-${
                  currentIndex * (cardWidth * cardsPerView)
                }px)`,
              }}
            >
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[340px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <Image
                    fill
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
};
// ====================================== Features Section end ======================================

// ========================================== Benefits Section start =========================================


export const BenefitsSection = ({
  title,
  description,
  benefits,
}: {
  title: string;
  description: string;
  benefits: Array<{ title: string; description: string; icon: string }>;
}) => (
  <section className="bg-white py-16">
    <Container>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="font-chakrapetch text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          {title}
        </h2>
        <p className="mt-6 text-gray-600 text-sm md:text-base lg:mx-0 leading-relaxed ">
          {description}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {benefits?.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 border-b-4 border-b-[#004aad] p-6 flex flex-col items-center text-center shadow-sm 
              hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-6 mt-2 p-2">
              <Icon icon={benefit.icon} className="text-5xl text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#5DADEC] mb-4">{benefit.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
