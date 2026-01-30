import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

export default function ActivateBusinesses() {
  return (
    <div className="bg-prim-light mt-10 py-16">
      <Container className=" flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-[55%]">
          <h2 className="font-chakrapetch text-3xl lg:text-4xl font-semibold mb-6">
            We Activate Businesses & Brands For The Digital marketing service
          </h2>

          <p className="text-gray-600 mb-7">
            Seawind Solution is a professional website design company dedicated to assisting businesses to establish an online presence. Our expert teams develop effective strategies that help clients increase their overall business productivity through correct business solutions to their problems. We develop simple, yet compact solutions aim to provide stable and high-quality products at optimal rates, empowering our technical expertise to provide outstanding services and deliver on-time high-quality solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white p-5 rounded-xl w-full">
              <h4 className="font-unbounded text-xl pb-3">
                We Are Different.
              </h4>
              <p className="capitalize pb-5">
                Our creative expertise and approach take-off from where others left for greater outcome.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl w-full">
              <h4 className="font-unbounded text-xl pb-3">
                Our Inventive Style
              </h4>
              <p className="capitalize pb-5">
                We take your business as our own and give it just the makeover you want for the digital world.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-white bg-[#004aad] h-[50px] px-6 rounded-lg font-semibold tracking-wider group"
          >
            Learn More About Us
            <Icon
              icon="tabler:arrow-right"
              className="bg-white text-black rounded-full h-[35px] w-[35px] p-1.5 group-hover:-rotate-45 transition"
            />
          </Link>
        </div>

        <div className="w-full lg:w-[45%] rounded-lg overflow-hidden">
          <Image
            src="/images/about/about-01.webp"
            alt="about-image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </div>
  );
}
