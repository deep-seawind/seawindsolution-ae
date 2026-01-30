import Container from "@/components/common/Container";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

const CgiForm = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center py-10 px-4 md:px-6">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start lg:items-center max-w-7xl mx-auto">

        {/* Left Content */}
        <div className="space-y-6">
          <div className="projects-content">
            <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              Services
            </span>

            <h2 className="mt-4 font-chakrapetch text-start text-2xl md:text-3xl lg:text-4xl font-semibold">
              A Full-Service Creative Digital Agency
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base text-start leading-relaxed">
              At Seawind Solution FZ-LLC, we create jaw-dropping CGI videos that
              turn ordinary visuals into extraordinary experiences. Whether it&apos;s
              for real estate, product marketing, gaming, or advertising, our
              CGI solutions are designed to captivate, inspire, and deliver
              results.
            </p>

            <p className="mt-6 text-gray-600 text-sm md:text-base text-start  leading-relaxed">
              Whether you&apos;re looking to add stunning visual effects to your
              project or elevate your brand with eye-catching 3D animations,
              we&apos;re here to help. As a trusted animation company in Dubai, we
              pride ourselves on our attention to detail and commitment to
              exceeding your expectations every step of the way.
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-4">
            {[
              {
                title: "Hyper-Realistic Visuals:-",
                desc: "Showcase every detail with unmatched precision",
              },
              {
                title: "Limitless Creativity:-",
                desc: "Bring even your boldest ideas to life—no boundaries, no restrictions.",
              },
              {
                title: "Cost-Effective Solutions:-",
                desc: "Replace expensive sets and live shoots with cutting-edge CGI.",
              },
              {
                title: "Boost Engagement:-",
                desc: "Stand out, grab attention, and drive action with visually compelling content.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 bg-[#004aad] rounded-full p-1 w-5 h-5 flex items-center justify-center">
                  <FaCheck className="text-white text-[10px]" />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-snug">
                  <span className="font-bold text-[#004aad]">{item.title}</span>{" "}
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
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
            <div className="bg-[#f9f9f9] border border-gray-300 rounded p-3 flex items-center 
            justify-between w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-white cursor-pointer hover:border-gray-500"></div>
                <span className="text-sm text-gray-700 font-medium">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center justify-center text-[10px] text-gray-500">
                <MdRefresh className="text-2xl text-[#004aad] mb-1" />
                <span className="leading-none">reCAPTCHA</span>
                <span className="leading-none text-[8px] mt-0.5">Privacy - Terms</span>
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
  );
};

export default CgiForm;
