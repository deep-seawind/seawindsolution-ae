import React from 'react';
import { LuClipboardList, LuLightbulb, LuMonitorCheck, LuGlobe } from "react-icons/lu";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Requirement Analysis",
      description: "In-depth discussions to understand your business needs and objectives.",
      icon: <LuClipboardList className="w-12 h-12 text-gray-800 mx-auto md:mx-0" />,
    },
    {
      id: "02",
      title: "Solution Design",
      description: "Crafting a strategic architecture for your blockchain ecosystem.",
      icon: <LuLightbulb className="w-12 h-12 text-gray-800 mx-auto md:mx-0" />,
    },
    {
      id: "03",
      title: "Development & Testing",
      description: "Agile development with rigorous testing to ensure performance, security, and scalability.",
      icon: <LuMonitorCheck className="w-12 h-12 text-gray-800 mx-auto md:mx-0" />,
    },
    {
      id: "04",
      title: "Deployment & Support",
      description: "Seamless deployment along with continuous monitoring and updates.",
      icon: <LuGlobe className="w-12 h-12 text-gray-800 mx-auto md:mx-0" />,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
            Our Work Process
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto md:mx-0">
            Our agile and transparent development process ensures high-quality outcomes, on time and within budget.
          </p>
        </div>

        {/* Responsive Process Grid */}
        <div className="
          grid grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-4 
          border border-gray-200 
          rounded-lg overflow-hidden
        ">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                p-8 bg-white text-center md:text-left
                border-b border-gray-200

                sm:border-b-0
                ${index % 2 === 0 ? "sm:border-r" : ""}
                ${index !== steps.length - 1 ? "md:border-r" : ""}

                hover:bg-gray-50 transition-colors duration-300
              `}
            >
              {/* Step Badge */}
              <div className="mb-6">
                <span className="bg-[#004aad] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide">
                  STEP {step.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="
                text-xl font-medium text-gray-900 font-chakrapetch 
                mb-8 h-auto md:h-12 flex items-center justify-center md:justify-start
              ">
                {step.title}
              </h3>

              {/* Icon */}
              <div className="mb-8 flex justify-center md:justify-start">
                {step.icon}
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
