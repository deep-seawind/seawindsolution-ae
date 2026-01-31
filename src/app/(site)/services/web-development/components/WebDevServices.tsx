"use client";
import React from "react"; 
import {
  Home,
  Code,
  Megaphone, 
} from "lucide-react";
import Container from "@/components/common/Container";
import Image from "next/image";


const WebDevServices = () => {

  const servicesData = [
    {
      title: "CMS Development Company",
      description: "Many times these requirements are unique simply because we are approached with bleeding edge original ideas.",
      icon: <Home className="w-6 h-6 text-white" />,
      image: "/images/services/service-1.png",
      active: true,
     
    },
    {
      title: "E-Commerce Development ",
      description:
        "The Internet is the worlds’ biggest marketplace and we are able to offer your business eCommerce solutions with a professional online presence…",
      icon: <Code className="w-6 h-6 text-white" />,
      image: "/images/services/digital-marketing.png",
    },
    {
      title: "Website Maintenance",
      description:
        "Web Changes has identified that many websites become dormant after development and never truly reaches its full potential.",
      icon: <Megaphone className="w-6 h-6 text-white" />,
      image: "/images/services/service-3.png",
    },
    {
      title: "Web Application Development",
      description:
        "As the technology advances and the programming landscape changes to accommodate the world’s growing technological needs…",
      icon: <Megaphone className="w-6 h-6 text-white" />,
      image: "/images/services/service-3.png",
    },
    {
      title: "Software Development",
      description:
        "Realising that generic software doesn’t always meet the bill; we go the extra mile by offering custom software development services…",
      icon: <Megaphone className="w-6 h-6 text-white" />,
      image: "/images/services/service-3.png",
    },
    {
      title: "Opencart Development",
      description:
        "Your digital presence is too important to trust just any agency. Let us help you create a valuable digital presence.",
      icon: <Megaphone className="w-6 h-6 text-white" />,
      image: "/images/services/service-3.png",
    },

  ];

  return (
    <>


      <Container className="bg-light py-10">
        <div className="projects-content text-center mb-10">
          <span className=" text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
            Services
          </span>
          <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
            A Full-Service Creative Digital Agency
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {servicesData.map((service, index) => (
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
              ></div>

              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>

                {/* Icon */}
                <div className="absolute -bottom-8 left-8 z-20">
                  <div className="w-16 h-16 bg-[#0B1C3E] rounded-full flex items-center justify-center border-[5px] border-white">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative pt-12 px-6 pb-8 flex flex-col z-10">
                <h3 className="text-[#0B1C3E] font-chakrapetch font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-black text-sm mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

           
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button + Illustration */}
        
      </Container>
    </>
  );
};

export default WebDevServices;
