import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";

import { MdRefresh } from "react-icons/md";

const WhatsappForm = () => {
  return (
    <>
    
    <div className="w-full bg-white flex items-center justify-center py-10">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-8 items-start lg:items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="projects-content">
            <h2 className="mt-4 font-chakrapetch text-start text-2xl md:text-3xl lg:text-4xl  font-semibold">
              Introduction
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base text-start mx-auto lg:mx-0 leading-relaxed">
              In today’s fast-paced digital world, businesses need instant and
              effective communication channels to connect with customers.
              WhatsApp Business Solution API is a powerful solution that allows
              businesses to engage with customers seamlessly through one of the
              most popular messaging platforms.
            </p>

            <p className="mt-6 text-gray-600 text-sm md:text-base text-start mx-auto lg:mx-0 leading-relaxed">
              Seawind Solution FZ-LLC provides robust WhatsApp Business
              Solution, helping businesses enhance customer interactions,
              automate responses, and improve operational efficiency. Our
              solutions are tailored to meet the unique needs of businesses
              across industries, ensuring a seamless and secure communication
              experience.
            </p>
            <p className="mt-6 text-gray-600 text-sm md:text-base text-start mx-auto lg:mx-0 leading-relaxed">
              With WhatsApp Business Solution, companies can leverage automated
              messaging, chatbots, and integration with CRM systems to
              streamline customer support and marketing campaigns. This platform
              provides businesses with an opportunity to create a personalized
              and responsive customer experience while maintaining a
              professional brand presence.
            </p>

            <p className="mt-6 text-gray-600 text-sm md:text-base text-start mx-auto lg:mx-0 leading-relaxed">
              At Seawind Solution FZ-LLC, we understand the importance of
              real-time communication. Our WhatsApp Business Solution enable
              businesses to optimize their customer engagement strategies, boost
              sales, and provide instant support, fostering strong relationships
              with their customers.
            </p>
          </div>
        </div>

        {/* Right Form*/}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.1)] border border-gray-100 w-full max-w-lg mx-auto lg:mx-0">
          <h3 className="text-xl sm:text-2xl font-bold text-[#004aad] mb-6">
            Get a Quote
          </h3>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-700 
                focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
                placeholder-gray-500 text-sm transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-700 
                focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
                placeholder-gray-500 text-sm transition-all"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-xl mr-1">🇮🇳</span>
                <span className="text-gray-600 text-sm font-medium">+91 ▼</span>
              </div>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full pl-24 pr-5 py-3 rounded-full border border-gray-300 text-gray-700 
                focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
                placeholder-gray-500 text-sm transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-700 
                focus:outline-none focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] 
                placeholder-gray-500 text-sm transition-all"
              />
            </div>

            {/* Fake CAPTCHA */}
            <div
              className="bg-[#f9f9f9] border border-gray-300 rounded p-3 flex items-center 
            justify-between w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-white cursor-pointer hover:border-gray-500"></div>
                <span className="text-sm text-gray-700 font-medium">
                  I&apos;m not a robot
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-[10px] text-gray-500">
                <MdRefresh className="text-2xl text-[#004aad] mb-1" />
                <span className="leading-none">reCAPTCHA</span>
                <span className="leading-none text-[8px] mt-0.5">
                  Privacy - Terms
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-[100px] bg-[#004aad] hover:bg-blue-500 text-white font-medium 
              py-2 px-6 rounded shadow-md transition-colors duration-200 mt-2 mx-auto lg:mx-0"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </div>
 
        <div className="w-full mb-10 flex justify-center">
          <Image
            src="/images/services/whatsappBusiness.jpg"
            alt="WhatsApp Business"
            width={1200}
            height={500}
            className="w-full object-cover rounded-xl shadow-md"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
    
    </>
  );
};

export default WhatsappForm;
