import Container from "@/components/common/Container";
import React from "react";
import {
  FaUserFriends,
  FaCogs,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const WhatsAppBenefits = () => {
  // Data for the cards to keep code clean and easy to manage
  const benefits = [
    {
      id: 1,
      title: "Improved Customer Engagement",
      description:
        "Stay connected with customers through instant, two-way communication.",
      icon: <FaUserFriends className="text-5xl text-orange-400" />,
    },
    {
      id: 2,
      title: "Cost-Effective Solution",
      description:
        "Reduce operational costs by automating repetitive tasks. Scalability: Handle multiple conversations simultaneously without increasing manpower.",
      icon: <FaCogs className="text-5xl text-purple-400" />,
    },
    {
      id: 3,
      title: "Higher Conversion Rates",
      description:
        "Personalized messaging leads to better engagement and increased sales.",
      icon: <FaChartLine className="text-5xl text-green-500" />,
    },
    {
      id: 4,
      title: "Secure and Reliable",
      description:
        "WhatsApp's encryption ensures safe data exchange and customer confidentiality.",
      icon: <FaHandshake className="text-5xl text-blue-500" />,
    },
  ];

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Header Section */}
        <h2 className="mt-4 font-chakrapetch text-center text-2xl md:text-3xl lg:text-4xl  font-semibold">
          What Are the Benefits of WhatsApp Business Solution Platform?
        </h2>

        <p className="mt-6 text-gray-600 text-sm md:text-base text-center  lg:mx-0 leading-relaxed">
          With this incredible WhatsApp Business Solution platform, your
          organization can create tailored and engaging customer experiences.
          Our WhatsApp Business Solution integration solution in Dubai and
          across the UAE aids organizations in streamlining their communication
          efforts and enriching the customer experience.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl border border-gray-200 border-b-4 border-b-[#004aad] p-6 flex flex-col items-center text-center shadow-sm 
                 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 mt-2 p-2">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#5DADEC] mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatsAppBenefits;
