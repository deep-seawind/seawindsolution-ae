import Container from '@/components/common/Container';
import React from 'react';
import { FaUserTie, FaBriefcase, FaTools } from 'react-icons/fa';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { IoLayers } from 'react-icons/io5';

const AiLmsWhoCanUse = () => {
  const features = [
    {
      title: "SALES TEAMS",
      icon: <FaUserTie className="w-12 h-12" />,
    },
    {
      title: "BUSINESS OWNERS",
      icon: <FaBriefcase className="w-12 h-12" />,
    },
    {
      title: "MARKETING PROFESSIONALS",
      icon: <HiOutlineSpeakerphone className="w-12 h-12" />,
    },
    {
      title: "SERVICE PROVIDERS",
      icon: <FaTools className="w-12 h-12" />,
    },
    {
      title: "HIGH-LEAD-VOLUME BUSINESSES",
      icon: <IoLayers className="w-12 h-12" />,
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-10 px-4 font-sans">
      <Container>
        {/* Heading */}
   <div>
          <span className="rounded-xl bg-[#004aad] py-1 ps-5 pe-3 text-sm font-chakrapetch capitalize text-white">
           Who use
          </span>

          <h2 className="mt-6 w-full font-chakrapetch text-2xl font-semibold capitalize lg:w-3/4 lg:text-[35px]">
      Who Can Use This Product?
          </h2>

          <p className="mt-4 text-pera-dark">
            Here are some unique offers that make us one of the most trusted
            offshore software development company in UAE, from where you can
            hire remote developers easily.
          </p>
        </div>
        {/* Cards Container */}
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[100px] shadow-xl hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="text-[#004aad] mb-6">
                {item.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-black font-bold text-center text-sm leading-tight tracking-wider uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AiLmsWhoCanUse;