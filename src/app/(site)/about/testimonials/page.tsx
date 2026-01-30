"use client";
import React from "react";
import { useRef } from "react";
import Image from "next/image";

import "swiper/css";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import Container from "@/components/common/Container";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/testimonials", text: "Testimonials" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Karan",
      time: "1 week ago",
      text: "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.",
      rating: 5,
      img: "/images/testimonials/user.jpg", // Placeholder image
    },
    {
      id: 2,
      name: "Catherine",
      time: "10 days ago",
      text: "I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 3,
      name: "Peter",
      time: "2 weeks ago",
      text: "Visited to EO store. Products look particularly welds, looked great. My wife and I took small test rides in the parking lot area. We bought a bike with customization afterward. Very satisfied.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 4,
      name: "Sarah",
      time: "3 weeks ago",
      text: "Absolutely fantastic experience. The staff was knowledgeable and didn't push for a sale. The bike handles like a dream.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 5,
      name: "Sarah",
      time: "3 weeks ago",
      text: "Absolutely fantastic experience. The staff was knowledgeable and didn't push for a sale. The bike handles like a dream.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 6,
      name: "Sarah",
      time: "3 weeks ago",
      text: "Absolutely fantastic experience. The staff was knowledgeable and didn't push for a sale. The bike handles like a dream.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 7,
      name: "Sarah",
      time: "3 weeks ago",
      text: "Absolutely fantastic experience. The staff was knowledgeable and didn't push for a sale. The bike handles like a dream.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 8,
      name: "Sarah",
      time: "3 weeks ago",
      text: "Absolutely fantastic experience. The staff was knowledgeable and didn't push for a sale. The bike handles like a dream.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
    {
      id: 9,
      name: "Sarah",
      time: "3 weeks ago",
      text: "Absolutely fantastic experience. The staff was knowledgeable and didn't push for a sale. The bike handles like a dream.",
      rating: 5,
      img: "/images/testimonials/user.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll by width of one card + gap (approx 350px)
      const scrollAmount = direction === "left" ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSub
        title="Testimonials"
        description=""
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />

      <section className="w-full bg-white py-8">
        <Container className="flex items-center justify-between px-4">
          <div className="mb-0 h-auto">
            <h2 className="text-4xl lg:text-5xl font-chakrapetch font-black text-black leading-tight">
              Client Testimonials
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-md">
              Our client testimonials exemplify our ability to build
              market-leading solutions by combining creative thinking,
              technology expertise and domain expertise.
            </p>
            <button className="mt-6 bg-[#004aad] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#004aad] transition">
              Get in Touch
            </button>
          </div>
          <div className="relative z-10 rounded-2xl overflow-hidden w-[200px] h-[220px] lg:w-[400px] lg:h-[350px]">
            <Image
              src="/images/about/testimonial.webp"
              alt="Client Testimonials"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT SIDE: Heading & Controls */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          <Quote className="text-gray-400 fill-gray-400 w-16 h-16 rotate-180" />

          <h2 className="text-4xl font-medium text-gray-900 leading-tight">
            What our <br /> customers are <br /> saying
          </h2>

          {/* Slider Controls */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 hover:bg-gray-200 rounded-full transition text-gray-600"
            >
              <ArrowLeft size={24} />
            </button>

            {/* Progress Line Visual */}
            <div className="w-16 h-0.5 bg-gray-300 relative">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-black"></div>
            </div>

            <button
              onClick={() => scroll("right")}
              className="p-2 hover:bg-gray-200 rounded-full transition text-black"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Cards Slider */}
        {/* 'no-scrollbar' requires custom css or tailwind plugin, see note below */}
        <div
          ref={scrollContainerRef}
          className="w-full lg:w-3/4 flex overflow-x-auto gap-6 snap-x snap-mandatory py-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px] md:min-w-[350px] snap-start flex flex-col"
            >
              {/* White Bubble Card */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative mb-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {review.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-emerald-500 text-emerald-500"
                    />
                  ))}
                </div>

                {/* The little triangle tail at bottom left */}
                <div className="absolute -bottom-2 left-8 w-6 h-6 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pl-4">
                <Image
                  src={review.img}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  sizes="48px"
                />

                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
