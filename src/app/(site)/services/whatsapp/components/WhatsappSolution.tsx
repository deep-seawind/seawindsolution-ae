import Container from '@/components/common/Container';
import React from 'react';

const WhatsappSolution = () => {
  const services = [
    {
      title: "Insights and measurement",
      description: "Identify your unique equities and opportunities using qual and quant research designed to give you clarity on what’s important and where to go next."
    },
    {
      title: "Purpose and brand strategy",
      description: "Define your aspirational north star including why you exist, what makes you special, and how your brand comes to life in a compelling and actionable way."
    },
    {
      title: "Brand architecture and portfolio strategy",
      description: "Organise your brands and products for the future and design systems to help people understand and navigate your offer."
    },
    {
      title: "Verbal identity",
      description: "Use the power of language to distinguish your brand with the right name, tone of voice, and messaging for your audiences."
    },
    {
      title: "Visual identity",
      description: "Create a cut-through expression of your strategy across logo, colour palette, bespoke typography, imagery, motion, sound, haptics, and more."
    },
    {
      title: "Activation and governance",
      description: "Plan and design your launch/rollout to build momentum internally and externally and help you manage your brand into the future."
    }
  ];

  return (
    <section className="bg-white py-6">
      <Container >
           <h2 className="font-chakrapetch text-center text-2xl md:text-3xl lg:text-4xl  font-semibold">
           WhatsApp Business Solution Provides
            </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
          {services.map((service, index) => {
            const isLastColumn = (index + 1) % 3 === 0;
            const isLastRow = index >= services.length - 3;

            return (
              <div
                key={index}
                className={`
                  py-10 pl-7 flex flex-col items-start
                  border-b border-r border-gray-300
                  ${isLastColumn ? 'md:border-r-0' : ''}
                  ${isLastRow ? 'md:border-b-0' : ''}
                `}
              >
                {/* Yellow Circle Icon */}
                <div className="w-8 h-8 rounded-full bg-[#004aad] mb-6 flex-shrink-0"></div>

                {/* Title */}
                <h3 className="text-2xl md:text-xl font-medium text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-[15px] md:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhatsappSolution;
