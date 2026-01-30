"use client";
import React from "react"; 
import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

const ChainWhyChoose: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Expert Team",
      icon: "mdi:account-group",
      desc: "A diverse team of blockchain developers, analysts, and consultants with hands-on",
    },
    {
      id: 2,
      title: "End-to-End Support",
      icon: "mdi:headset",
      desc: "From ideation to post-deployment maintenance—we’re with you every step of the way.",
    },
    {
      id: 3,
      title: "Proven Expertise",
      icon: "mdi:shield-check",
      desc: "Years of industry experience delivering scalable and secure blockchain solutions.",
    },
    {
      id: 4,
      title: "Client-Centric Approach",
      icon: "mdi:star",
      desc: "We focus on delivering results that align with your business goals and long-term success.",
    },
  ];

  return (
    <>
      <section className="bg-light overflow-hidden py-10 sm:py-12 md:py-14 lg:py-18 xl:py-20 bg-prim-light">
        <Container className="space-y-10 sm:space-y-12">

          {/* ------------------- MAIN CONTENT BOX ------------------- */}
          <div className="commitment-content bg-white p-5 sm:p-6 md:p-8 rounded-2xl">
            <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch capitalize ps-4 pe-3 sm:ps-5">
              Why Choose
            </span>

            <h2 className="mt-4 font-chakrapetch text-2xl sm:text-3xl lg:text-35 font-semibold mb-5">
              Why Choose Us
            </h2>

            <p className="text-sm sm:text-base md:text-16 text-pera-dark mb-6 sm:mb-8 leading-relaxed tracking-wide">
              At Seawind Solution, we go beyond just delivering technology—we
              build lasting partnerships based on trust, performance, and
              innovation. Our approach combines technical excellence with a deep
              understanding of industry-specific challenges to create blockchain
              solutions that are not only functional but also future-proof.
            </p>

            <p className="text-sm sm:text-base md:text-16 text-pera-dark mb-6 sm:mb-8 leading-relaxed tracking-wide">
              With a proven track record and a highly skilled team, we ensure
              your project is handled with precision at every stage. Whether
              you&apos;re launching a new blockchain platform or integrating
              distributed ledger technology into your existing systems, we offer
              comprehensive support from start to finish.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {cards.map((card) => (
              <div key={card.id} className="w-full bg-white p-6 sm:p-7 md:p-8 rounded-2xl">
                
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <Icon
                    icon={card.icon}
                    width="28"
                    height="28"
                    className="text-[#004aad]"
                  />
                  <h2 className="font-chakrapetch text-lg sm:text-xl lg:text-24 font-semibold">
                    {card.title}
                  </h2>
                </div>

                {/* Description */}
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

export default ChainWhyChoose;
