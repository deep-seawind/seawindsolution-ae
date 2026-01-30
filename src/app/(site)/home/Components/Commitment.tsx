"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

const Commitment: React.FC = () => {
 
  return (
    <>
      <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-10 bg-prim-light">
        <Container className="space-y-8">
          <div className="commitment-content bg-white p-8 rounded-2xl">
            <span className=" text-14 bg-[#004aad]  text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              About Us
            </span>
            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Next Generation IT service
            </h2>
            <p className="text-16 text-pera-dark mb-8 leading-relaxed tracking-wide">
              Seawind Solution FZ-LLC is one of the best IT service provider
              company, that delivers transformational growth for your clients.
              Our engagement with professionals specializing in various services
              like Web Design, Web Development, Social Media Marketing, Digital
              Marketing, VPS Hosting, Cloud ERP, WhatsApp Business, Social Media
              Paid Campaigns and CRM Development services has enabled us to
              become a global leader.
            </p>
            <Link
              href="/services"
              className="text-white bg-[#004aad] h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0"
            >
              Learn More
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-white text-black rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>
          </div>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="w-full bg-white p-8 rounded-2xl">
              <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
                Satisfied Clients
              </h2>
              <p>Yes! Grateful to call all of them our happy customers!</p>
              <div className="flex w-full items-center pt-8 pb-10 overflow-hidden">
                <Image
                  src="/images/commitment/user1.jpg"
                  alt="avatar-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3"
                />
                <Image
                  src="/images/commitment/user2.jpg"
                  alt="avatar-image"
                  width={100}
                  height={200}
                  className="object-cover w-[120px] h-[120px] rounded-full scale-110 border-4 border-white shadow-xl z-2"
                />
                <Image
                  src="/images/commitment/user3.jpg"
                  alt="avatar-image"
                  width={100}
                  height={200}
                  className="object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3 z-0"
                />
              </div>
              <div className="flex gap-5">
                <span className="text-3xl font-semibold">3500+</span>
              </div>
            </div>

            <div className="w-full bg-white p-8 rounded-2xl">
              <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
                Projects
              </h2>
              <p>
                Our commitment to excellence and unparalleled service speaks for
                itself.
              </p>
              <div className="w-full h-[150px]">
                <Image
                  src="/images/about/project-expertice.png"
                  width={350}
                  height={200}
                  alt="strategy-chart-image"
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
              <div className="flex mt-10 gap-5">
                <span className="text-3xl font-semibold">2500+</span>
              </div>
            </div>

            <div className="w-full p-8 rounded-2xl flex justify-between items-start flex-col bg-white">
              <div className="mb-8">
                <h2 className="font-chakrapetch lg:text-24 font-semibold pb-1">
                  Years of Expertise
                </h2>
                <p>
                  Our commitment to excellence and unparalleled service speaks
                  for itself.
                </p>
                <div className="w-full h-[200px]">
                  <Image
                    src="/images/about/project-img.png"
                    width={350}
                    height={200}
                    alt="strategy-chart-image"
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex gap-5 mt-">
                  <span className="text-3xl font-semibold">10+</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Commitment;
