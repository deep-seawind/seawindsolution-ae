"use client";
import React from "react";

import HeroSub from "@/components/common/SharedComponents/HeroSub";

import {
  Home,
  Code,
  Megaphone,
  Smartphone,
  Server,
  HardDrive,
  ShieldCheck,
  PackageSearch,
  Lock,
  Cloud,
  Users,
  MessageSquare,
  Globe,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/common/Container";


const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];

  const servicesData = [
    {
      title: "AI Powered Web Design",
      description: "Smart design breeds online reliability for businesses.",
      icon: <Home className="w-6 h-6 text-white" />,
      image: "./images/services/service-1.png",
      active: true,
     
    },
    {
      title: "Web Development ",
      description:
        "We are developing a wide range of websites for various industries.",
      icon: <Code className="w-6 h-6 text-white" />,
      image: "./images/services/digital-marketing.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Elevate your online presence with a unique approach to digital marketing.",
      icon: <Megaphone className="w-6 h-6 text-white" />,
      image: "./images/services/service-3.png",
    },
    {
      title: "Mobile Application Development",
      description:
        "Small wireless device software requires precision in development processes.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      image: "./images/services/service-4.png",
    },
    {
      title: "VPS Hosting",
      description:
        "Leading VPS Hosting Services Company with Incredible Support.",
      icon: <Server className="w-6 h-6 text-white" />,
      image: "./images/services/service-5.png",
    },
    {
      title: "Web Hosting",
      description:
        "Solid hardware, free features, US-managed: backups,  1-click install.",
      icon: <HardDrive className="w-6 h-6 text-white" />,
      image: "./images/services/service-6.png",
    },
    {
      title: "Dedicated Server",
      description:
        "Establish trust and online security for your website visitors and business.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      image: "./images/services/service-7.webp",
    },
    {
      title: "Web Products",
      description: "Web Products",
      icon: <PackageSearch className="w-6 h-6 text-white" />,
      image: "./images/services/service-8.webp",
    },
    {
      title: "SSL Certificate",
      description:
        "Establish trust and online security for your website visitors and business.",
      icon: <Lock className="w-6 h-6 text-white" />,
      image: "./images/services/service-9.webp",
    },
    {
      title: "Cloud ERP ",
      description: "Cloud ERP",
      icon: <Cloud className="w-6 h-6 text-white" />,
      image: "./images/services/service-10.webp",
    },
    {
      title: "Visitor Management ",
      description: "Visitor Management",
      icon: <Users className="w-6 h-6 text-white" />,
      image: "./images/services/service-11.webp",
    },
    {
      title: "Whatsapp Chatbot ",
      description:
        "Whatsapp Business Seawind Solution FZ LLC Association with WhatsApp",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      image: "./images/services/service-12.webp",
    },
    {
      title: "CDN ",
      description:
        "Shorter distance, faster loading. Our global network keeps users close.",
      icon: <Globe className="w-6 h-6 text-white" />,
      image: "./images/services/service-13.webp",
    },
    {
      title: "Start Your IT Business",
      description: "Quickly Launch your Own IT Business for only AED 220.27",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      image: "./images/services/service-14.webp",
    },
    {
      title: "GSuite",
      description:
        "Upgrade with G Suite: email, video, storage, sharing, and more.",
      icon: <Mail className="w-6 h-6 text-white" />,
      image: "./images/services/service-15.webp",
    },
  ];

  return (
    <>
      <HeroSub
        title="Services"
        description=""
        breadcrumbLinks={breadcrumbLinks}
           heroImage="/images/hero/banner-image.avif"
      />

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
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
                <img
                  src={service.image}
                  alt={service.title}
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

                <button className="flex items-center gap-2 text-xs w-[140px]  font-bold capitalize tracking-wide bg-[#004aad] text-white px-4 py-2 rounded-3xl  fulltransition-all duration-300 hover:bg-white hover:text-[#004aad] border-2 border-[#004aad]">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button + Illustration */}
        <div className="relative flex justify-center items-center mt-12">
          <button className="bg-[#004aad] hover:bg-[#062349] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-all z-10">
            Load More
          </button>
        </div>
      </Container>
    </>
  );
};

export default Page;
