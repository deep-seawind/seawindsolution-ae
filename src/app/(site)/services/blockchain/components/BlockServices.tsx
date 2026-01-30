import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";

const BlockServices = () => {
  const cards = [
    {
      id: 1,
      span: "md:col-span-2",
      type: "image",
      title: "Blockchain Application Development",
      desc: "Design and build decentralized applications (DApps) for finance, healthcare, logistics, and more.",
      image: "/images/services/blockchain-1.avif",
    },
    {
      id: 2,
      span: "md:col-span-1",
      type: "solid",
      bg: "bg-[#EFE9DD]",
      title: "Custom Blockchain Development",
      desc: "Fully tailored blockchain infrastructure for specific business models and workflows.",
      dark: false,
    },
    {
      id: 3,
      span: "md:col-span-1",
      type: "solid",
      bg: "bg-[#C4B5A5]",
      title: "NFT Development",
      desc: "Launch your NFT marketplace or digital assets with custom solutions backed by solid blockchain foundations.",
      dark: true,
    },
    {
      id: 4,
      span: "md:col-span-2",
      type: "image",
      title: "Blockchain Integration",
      desc: "Seamless integration of blockchain with existing business systems for increased efficiency and traceability.",
      image: "/images/services/bloackchain-2.avif",
    },
  ];

  return (
    <section
      className="py-10 bg-[#FFFBF5] bg-no-repeat border-2 border-t-[#004aad] bg-cover"
      style={{ backgroundImage: `url("/images/services/blackchain-bg.avif")` }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-8 px-3">
          <span className="text-14 bg-[#004aad] text-white py-1 px-6 rounded-xl font-chakrapetch shadow-lg">
            Solution
          </span>

          <h2 className="mt-4 font-chakrapetch text-2xl sm:text-3xl lg:text-35 font-extrabold tracking-wide text-gray-900">
            Our Solutions
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We offer cutting-edge blockchain development solutions designed to empower
            businesses with transparency, automation, and security.
          </p>
        </div>

        {/* 2 Column Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 px-3">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            

            <h2 className="mt-4 font-chakrapetch text-2xl sm:text-3xl lg:text-35 font-extrabold tracking-wide text-gray-900">
              Our Services
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base">
              At Seawind Solution, we specialize in delivering comprehensive blockchain
              development services designed to meet the diverse needs of modern businesses.
              Whether you&apos;re a startup exploring blockchain for the first time or an
              enterprise aiming to streamline operations with decentralized technology,
              our end-to-end solutions are tailored to your goals.
            </p>

            <p className="mt-6 text-gray-600 text-sm md:text-base">
              From DApps and custom blockchain architecture to NFT platforms and system
              integration, we provide future-ready services that ensure scalability,
              transparency, and security. We build robust solutions aligned with your
              business model to give you a competitive edge.
            </p>
          </div>

          {/* Right – Cards Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`${card.span} relative h-[260px] sm:h-[300px] md:h-[280px] rounded-[2rem] overflow-hidden group ${card.bg || ""}`}
                >
                  {/* Image Type Card */}
                  {card.type === "image" && card.image && (
                    <>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </>
                  )}

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 z-10">
                    <h3
                      className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${
                        card.dark
                          ? "text-white"
                          : card.bg
                          ? "text-gray-900"
                          : "text-white"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm ${
                        card.dark
                          ? "text-gray-100"
                          : card.bg
                          ? "text-gray-700"
                          : "text-gray-200"
                      }`}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BlockServices;
