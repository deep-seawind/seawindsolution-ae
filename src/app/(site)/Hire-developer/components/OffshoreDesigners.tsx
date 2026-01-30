"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import Container from "@/components/common/Container";

const contentData = [
  {
    title: "Global Extension of Your IT Firm",
    description:
      "Hire Designers from Your Team in UAE and extend your in-house team with a diversified skill set in technologies like Java, Python, Android, iOS, React Native, Full Stack, etc.",
    image:
      "/images/hire/image1.avif",
  },
  {
    title: "Directly Work With Offshore Designer Team",
    description:
      "Directly hire designers for your digital transformation. We provide top-notch IT staff augmentation and resource services, which allows you to hire offshore designers that work from office, not from home.",
    image:
      "/images/hire/image2.avif",
  },
  {
    title: "Introduce Your Own Methodologies & Management Techniques",
    description:
      "Working with dedicated offshore designers, you can bring forward your own corporate methodologies, work ethics and management techniques to successfully accomplish your business objectives.",
    image:
      "/images/hire/image3.avif",
  },
];

export default function OffshoreDesigners() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#004aad] to-[#003479] py-10">
      <Container >
        <div>
          <span className=" text-14 bg-[#ffffff] text-[#004aad] font-bold py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
            Hire Developer
          </span>
          <h2 className="w-full lg:w-3/4 mt-6 font-chakrapetch lg:text-35 text-white capitalize font-semibold">
            Hire Offshore Designers from Seawind Solution FZ-LLC
          </h2>
          <p className="text-white font-normal group-hover:text-white transition-colors mt-4 duration-500">
            Here are some unique offers that make us one of the most trusted
            offshore software development company in UAE, from where you can
            hire remote developers easily.
          </p>
        </div>
        <div className="grid gap-12 mt-18 lg:grid-cols-2 lg:items-center">
          <div className="space-y-10">
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 cursor-pointer transition-all duration-300 p-4 rounded-lg ${
                  activeIndex === index ? "bg-white/10" : "hover:bg-white/5"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full shadow-lg transition-colors duration-300 ${
                      activeIndex === index ? "bg-white" : "bg-white/70"
                    }`}
                  >
                    <Check
                      className="h-4 w-4 text-[#004aad]"
                      strokeWidth={3}
                    />
                  </div>
                </div>
                <div className="text-white">
                  <h3
                    className={`mb-2 text-xl font-bold transition-all duration-300 ${
                      activeIndex === index ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-blue-50 opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute -bottom-10 -right-10 z-0 h-[400px] w-[400px] opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 2px, transparent 2.5px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="relative z-10 h-[400px] w-full max-w-[500px]">
              <div
                className="h-full w-full overflow-hidden bg-white shadow-2xl"
                style={{
                  borderRadius: "43% 57% 70% 30% / 30% 56% 44% 70%",
                }}
              >
                <Image
                  src={contentData[activeIndex].image}
                  alt="Offshore Team"
                  fill
                  className="object-cover transition-opacity duration-500"
                  key={activeIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
