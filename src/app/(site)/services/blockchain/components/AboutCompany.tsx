import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';

const AboutCompany = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

          {/* --- Left Side: Text Content --- */}
          <div className="px-2 sm:px-0">
            <h2 className="mt-2 sm:mt-4 font-chakrapetch text-2xl sm:text-3xl md:text-4xl lg:text-35 font-extrabold tracking-wide text-gray-900">
              About Seawind Solution
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed my-5 sm:my-7">
              At Seawind Solution, we combine technical excellence with deep domain expertise to deliver
              custom blockchain solutions that solve real-world problems. Based in the UAE, our reputation is
              built on trust, transparency, and innovation.
            </p>

            {/* Mission Section */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 border-b border-gray-100 pb-6 sm:pb-8 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl text-gray-800 font-medium md:w-1/3 shrink-0">
                Company Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:w-2/3">
                To drive digital transformation through secure, transparent,
                and scalable blockchain technology tailored to industry-specific challenges.
              </p>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <h3 className="text-lg sm:text-xl text-gray-800 font-medium md:w-1/3 shrink-0">
                Company Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:w-2/3">
                To become a global leader in blockchain innovation,
                enabling businesses to thrive in a decentralized digital economy.
              </p>
            </div>
          </div>

          {/* --- Right Side: Image --- */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[500px] w-full">
            <Image
              src="/images/services/s-about.jpg"
              alt="Blockchain Technology Dashboard"
              fill
              className="object-cover rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     50vw"
              priority
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutCompany;
