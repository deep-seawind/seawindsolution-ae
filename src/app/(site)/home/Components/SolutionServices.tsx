"use client";
import { solutionData } from "@/app/api/data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/common/Container";

const SolutionServices: React.FC = () => {
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-10 bg-prim-light">
        <Container className=" space-y-14">
          <div className="solution-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
            <div>
              <span className=" text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                Serivces
              </span>
              <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 capitalize font-semibold">
                comprehensive it & digital solutions to power your business
                growth
              </h2>
            </div>
            <Link
              href="/services"
              className="text-white bg-[#004aad] h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
            >
              Explore More
              <Icon
                icon="tabler:arrow-right"
                width={24}
                height={24}
                className="bg-white text-black rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>
          </div>

          <div className="relative mt-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
              className="solution-wrapper"
            >
              {solutionData.map((solution, index) => (
                <SwiperSlide key={index}>
                  <div className="solution-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border group hover:bg-[#004aad] transition duration-500 h-[600px] flex flex-col justify-between">
                    <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                      {solution.title}
                    </h4>

                    <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                      <div className="text-[32px] group-hover:text-white transition-colors duration-500">
                        {solution.icon}
                      </div>
                    </div>

                    <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                      {solution?.description}
                    </p>

                    <ul className="pl-4 grid grid-cols-1 gap-x-6 gap-y-2">
                      {solution?.points?.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-pera-dark font-normal list-disc pl-1 ps-5 mb-1 group-hover:text-white transition-colors duration-500"
                        >
                          {point.text}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/about"
                      className="text-dark text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 justify-center items-center tracking-wider group group-hover:text-white transition-colors duration-500"
                    >
                      Learn More
                      <Icon
                        icon="tabler:arrow-right"
                        width={24}
                        height={24}
                        className="bg-prim text-white group-hover:text-dark group-hover:bg-white rounded-full h-full w-[35px] p-1.5 transition-transform duration-500 group-hover:-rotate-45"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SolutionServices;
