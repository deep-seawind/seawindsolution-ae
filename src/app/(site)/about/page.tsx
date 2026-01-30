"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <HeroSub 
        title="About" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
               heroImage="/images/hero/banner-image.avif"
      />

      <main
        className="  w-full  flex justify-center py-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/about/about-bg.avif)",
          backgroundRepeat: "no-repeat",
          width: "full",
        }}
      >
        <Container className=" space-y-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 font-chakrapetch ">
            Seawind Solution FZ-LLC
          </h1>

          <p className="text-gray-700 mb-0 leading-relaxed text-[17px]">
            Seawind Solution is a professional website design company dedicated
            to assisting businesses to establish an online presence. Our expert
            teams develop effective strategies that help clients increase their
            overall business productivity through correct business solutions to
            their problems. We develop simple, yet compact solutions aim to
            provide stable and high-quality products at optimal rates,
            empowering our technical expertise to provide outstanding services
            and deliver on-time high-quality solutions.
          </p>
          <br />

          <p className="text-gray-700 mb-0 leading-relaxed text-[17px]">
            We aim to provide stable and high-quality products at optimal rates,
            empowering our technical expertise to provide outstanding services
            and deliver on-time high-quality solutions. We have a tremendous
            growth rate due to our focus on the approval of customer's needs and
            desires. We provide complete solutions to all your Web needs. We
            possess a skilled team for designers and developers who specialize
            in creating excellent designs and developing equally competent
            applications that are simple yet dynamic and without a doubt present
            our client's business or product. Work with the formula of customer
            satisfaction.
          </p>
          <br />

          <p className="text-gray-700 leading-relaxed text-[17px]">
            Seawind Solution also has a unique structure of functioning which
            strives more for Quality and also timely communication with the
            client for hassle-free performance. We provide a team of skilled
            manpower as per the client and project requirements, which is 100%
            dedicated to the project. To ensure customer satisfaction with
            developing quality work, at quality work atmosphere to generate
            quality work productivity. This all goes on with taking time and
            finance in subsequent flow with high-level communication and 24/7
            support that gives our clients 100% Service Satisfaction.
          </p>
        </Container>
      </main>

      <section className="bg-[#F5F9FF] py-16">
        <Container className=" px-6 gap-6">
         
            <div className="projects-content text-center mb-10">
              <span className=" text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                Our Core Values
              </span>
              <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold">
                Deliver Reliable & Quality Software Development Services
              </h2>
            </div>
        
          <div className="flex gap-4">
            {/* Card 1 */}
            <div className="group relative bg-white shadow-xl rounded-3xl p-8 flex flex-col gap-3 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              {/* Animated Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              <div className="flex gap-3 items-center relative z-20">
                <Image
                  src="/images/icon/vision.png"
                  width={55}
                  height={55}
                  alt="Vision"
                />
              </div>

              {/* Watermark Text - Bottom */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <div className="transition-transform duration-700 ease-out group-hover:-translate-x-10">
                  <span
                    className="text-[90px] font-bold whitespace-nowrap leading-none"
                    style={{
                      WebkitTextStroke: "1px #c2d6fc",
                      color: "transparent",
                      opacity: 0.3,
                    }}
                  >
                    VISION
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#0A1B33] font-chakrapetch relative z-20">
                Our Vision
              </h3>
              <p className="text-gray-600 relative z-20 ">
                Become a Global Market Leader by Helping our customers grow
                their business with Quality Solutions & Premium IT Services.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white shadow-xl rounded-3xl p-8 flex flex-col gap-3 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              {/* Animated Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              <div className="flex gap-3 items-center relative z-20">
                <Image
                  src="/images/icon/mission.png"
                  width={55}
                  height={55}
                  alt="Mission"
                />
              </div>

              {/* Watermark Text - Bottom */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <div className="transition-transform duration-700 ease-out group-hover:-translate-x-10">
                  <span
                    className="text-[90px] font-bold whitespace-nowrap leading-none"
                    style={{
                      WebkitTextStroke: "1px #c2d6fc",
                      color: "transparent",
                      opacity: 0.3,
                    }}
                  >
                    MISSION
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#0A1B33] font-chakrapetch relative z-20">
                Our Mission
              </h3>
              <p className="text-gray-600 relative z-20">
                Providing Quality Products & Top-notch service using Cutting
                edge Technology to our customers, which gives them a competitive
                edge.
              </p>
              <p className="text-gray-600 relative z-20">
                Providing a Top Infrastructure & Culture to People, So People
                would love to work with the Company.
              </p>
              <p className="text-gray-600 relative z-20">
                Build Products which Helps in this Industry time to time.
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-7">
            {/* Card 3 */}
            <div className="group relative bg-white shadow-xl rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              {/* Animated Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              <div className="flex gap-3 items-center relative z-20">
                <Image
                  src="/images/icon/quality.png"
                  width={55}
                  height={55}
                  alt="Quality"
                />
              </div>

              {/* Watermark Text - Bottom */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <div className="transition-transform duration-700 ease-out group-hover:-translate-x-10">
                  <span
                    className="text-[90px] font-bold whitespace-nowrap leading-none"
                    style={{
                      WebkitTextStroke: "1px #c2d6fc",
                      color: "transparent",
                      opacity: 0.3,
                    }}
                  >
                    QUALITY
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-[#0A1B33] font-chakrapetch mt-3 relative z-20">
                Quality
              </h3>
              <p className="text-gray-600 mt-2 relative z-20">
                We Providing High Quality Products & Services that we stand
                behind,which ensures customer Satisfaction & Profitability.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white shadow-xl rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              {/* Animated Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              <div className="flex gap-3 items-center relative z-20">
                <Image
                  src="/images/icon/respect.png"
                  width={55}
                  height={55}
                  alt="Respect"
                />
              </div>

              {/* Watermark Text - Bottom */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <div className="transition-transform duration-700 ease-out group-hover:-translate-x-10">
                  <span
                    className="text-[90px] font-bold whitespace-nowrap leading-none"
                    style={{
                      WebkitTextStroke: "1px #c2d6fc",
                      color: "transparent",
                      opacity: 0.3,
                    }}
                  >
                    RESPECT
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-3 text-[#0A1B33] font-chakrapetch relative z-20">
                Respect
              </h3>
              <p className="text-gray-600 mt-2 relative z-20">
                We maintain an Environment which built on Mutual Respect, Trust
                & Openness.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white shadow-xl rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              {/* Animated Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              <div className="flex gap-3 items-center relative z-20">
                <Image
                  src="/images/icon/secure.png"
                  width={55}
                  height={55}
                  alt="Integrity"
                />
              </div>

              {/* Watermark Text - Bottom */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
                <div className="transition-transform duration-700 ease-out group-hover:-translate-x-10">
                  <span
                    className="text-[90px] font-bold whitespace-nowrap leading-none"
                    style={{
                      WebkitTextStroke: "1px #c2d6fc",
                      color: "transparent",
                      opacity: 0.3,
                    }}
                  >
                    INTEGRITY
                  </span>
                </div>
              </div>

              <h3 className="text-2xl mt-3 font-semibold text-[#0A1B33] font-chakrapetch relative z-20">
                Integrity
              </h3>
              <p className="text-gray-600 mt-2 relative z-20">
                We believe in Integrity Foremost. Our conduct is honest and
                transparent. No Politics, No Sneaky Agendas!
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <Container className="flex lg:flex-row flex-col items-start gap-5">
          <div className="content w-full lg:w-[55%]">
            <h2 className="w-full mt-4 font-chakrapetch lg:text-35 font-semibold mb-8">
              We Activate Businesses & Brands For The Digital marketing service
            </h2>

            <p className="text-gray-600 mb-7 ">
              Seawind Solution is a professional website design company
              dedicated to assisting businesses to establish an online presence.
              Our expert teams develop effective strategies that help clients
              increase their overall business productivity through correct
              business solutions to their problems. We develop simple, yet
              compact solutions aim to provide stable and high-quality products
              at optimal rates, empowering our technical expertise to provide
              outstanding services and deliver on-time high-quality solutions.
            </p>

            <div className="flex lg:flex-nowrap flex-wrap gap-4">
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-unbounded text-xl pb-3">
                  We Are Different.
                </h4>
                <p className="capitalize pb-5">
                  Our creative expertise and approach take-off from where others
                  left for greater outcome.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-unbounded text-xl pb-3">
                  Our Inventive Style
                </h4>
                <p className="capitalize pb-5">
                  We take your business as our own and give it just the makeover
                  you want for the digital world.
                </p>
              </div>
            </div>
            <Link
              href="/services"
              className="text-white bg-[#004aad] h-[50px] text-sm lg:text-16 w-full rounded-lg font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5"
            >
              Learn More About Us
              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-white text-black rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300"
              />
            </Link>
          </div>
          <div className="image lg:w-[45%] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/about/about-01.webp"
              alt="about-image"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </Container>
      </div>

      {/* <Companies /> */}
      {/* <Testimonials /> */}
      {/* <Team limit={4} /> */}
    </>
  );
};

export default Page;
