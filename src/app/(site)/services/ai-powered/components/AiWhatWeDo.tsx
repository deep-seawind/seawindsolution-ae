import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";

const AiWhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: "AI-Powered Automation",
      description:
        "Implementing AI automation services in UAE to streamline business processes, reduce errors, and improve efficiency.",
      image: "/images/services/ai-powered.png",
    },
    {
      id: 2,
      title: "Machine Learning Solutions",
      description:
        "Leveraging AI development expertise to build predictive models that enhance decision-making.",
      image: "/images/services/machine.png",
    },
    {
      id: 3,
      title: "Natural Language Processing (NLP)",
      description:
        "Developing AI-powered services in Dubai that enable businesses to process and understand human language.",
      image: "/images/services/language.webp",
    },
    {
      id: 4,
      title: "AI-Driven Analytics",
      description:
        "Utilizing artificial intelligence to analyze large data sets and extract valuable business insights.",
      image: "/images/services/ai.webp",
    },
    {
      id: 5,
      title: "Custom AI Solutions",
      description:
        "Tailoring AI services in UAE to address specific business challenges and improve operational performance.",
      image: "/images/services/ai-solution.png",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white text-gray-900">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <span className="text-14 bg-[#004aad] text-white py-1 px-5 rounded-xl font-chakrapetch inline-block">
            What We Do
          </span>

          <h2 className="mt-6 font-chakrapetch text-lg md:text-2xl lg:text-28 font-semibold leading-relaxed">
            At Seawind Solution FZ-LLC, we provide comprehensive AI business
            solutions in UAE, Dubai, and RAK, tailored to meet diverse industry
            needs.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-12 md:mt-16 flex flex-col gap-10">
          {/* First Row — 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>

          {/* Second Row — 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.slice(3, 5).map((item) => (
              <ServiceCard key={item.id} item={item} heightClass="h-72 md:h-80" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ServiceCard = ({
  item,
  heightClass = "h-80",
}: {
  item: { id: number; title: string; description: string; image: string };
  heightClass?: string;
}) => {
  return (
    <div
      className={`group p-8 rounded-[2rem] border border-gray-100 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] 
      hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden ${heightClass}`}
    >
      {/* Text Section */}
      <div className="z-10 relative pr-4 flex-grow">
        <h3 className="text-lg md:text-xl text-black font-bold mb-3">
          {item.title}
        </h3>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-4 right-4 w-28 h-28 sm:w-32 sm:h-32 opacity-90 group-hover:scale-105 transition-transform duration-500">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      {/* Soft Glow */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl -z-0"></div>
    </div>
  );
};

export default AiWhatWeDo;
