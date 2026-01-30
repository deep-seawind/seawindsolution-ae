"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

const WebWhyChoose: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Proven Experience:",
      desc: "Over a decade of delivering innovative tech solutions globally.",
    },
    {
      id: 2,
      title: "AI-Driven Results:",
      desc: "Leverage data and intelligence to outperform competitors.",
    },
    {
      id: 3,
      title: "End-to-End Support:",
      desc: "From consultation to post-launch support, we&apos;ve got you covered..",
    },
    {
      id: 4,
      title: "Client-Centric Approach",
      desc: "Every project is treated with personalized attention and transparency.",
    },
    {
      id: 5,
      title: "Agile & Adaptive",
      desc: "Our agile methodology ensures fast delivery with room for innovation.",
    },
  ];

  return (
    <>
      <section className="bg-light overflow-hidden py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 bg-prim-light">
        <Container className="space-y-10 sm:space-y-12 lg:space-y-14">

          {/* ------------------- MAIN CONTENT BOX ------------------- */}
          <div className="commitment-content bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl mb-3 w-full">
            
            <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch capitalize ps-4 pe-3 sm:ps-5 inline-block">
              Why Choose Us
            </span>

            <h2 className="mt-4 font-chakrapetch text-2xl sm:text-3xl lg:text-35 font-semibold mb-4 sm:mb-5 leading-snug">
              Trusted Experts in AI-Powered Web Development
            </h2>

            <p className="text-sm sm:text-base md:text-16 text-pera-dark mb-5 sm:mb-6 leading-relaxed tracking-wide">
              At Seawind Solution, we blend technical expertise with strategic thinking to deliver AI-enhanced digital experiences. We&apos;re not just developers, we&apos;re your digital growth partners.
            </p>

            <p className="text-sm sm:text-base md:text-16 text-pera-dark mb-6 sm:mb-8 leading-relaxed tracking-wide">
              With a proven track record and a highly skilled team, we ensure your project is handled with precision at every stage. Whether you&apos;re launching a new blockchain platform or integrating distributed ledger technology into your existing systems, we offer comprehensive support from start to finish.
            </p>

            {/* Button */}
            <Link
              href="/services"
              className="text-white bg-[#004aad] h-[46px] sm:h-[48px] md:h-[50px] text-xs sm:text-sm md:text-base lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 sm:py-2.5 justify-center items-center tracking-wider group mt-5"
            >
              Learn More
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-white text-black rounded-full h-full w-[32px] sm:w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>
          </div>

          {/* ------------------- CARD GRID ------------------- */}
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-5 
            gap-4 
            sm:gap-5 
            lg:gap-6
          ">
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-full bg-white p-6 sm:p-7 md:p-8 rounded-2xl h-full"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <h2 className="font-chakrapetch text-lg sm:text-xl lg:text-24 font-semibold leading-snug">
                    {card.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-pera-dark leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </Container>
      </section>
    </>
  );
};

export default WebWhyChoose;
