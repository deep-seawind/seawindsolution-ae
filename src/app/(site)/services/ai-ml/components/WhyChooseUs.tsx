import React from 'react';
import Image from 'next/image';
import { 
  ArrowDownRight, 
  BarChart3, 
  TrendingDown, 
  FileText 
} from 'lucide-react';
import Container from '@/components/common/Container';

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      title: " UAE-Wide Presence",
      desc: "With experience across all 7 Emirates, we understand local industries, regulations, and market dynamics.",
      isActive: false,
    },
    {
      id: 2,
      title: "Domain Expertise",
      desc: "Our engineers and data scientists are experts in AI/ML, data science, and enterprise-grade software architecture.",
      isActive: true,
    },
    {
      id: 3,
      title: "Custom, Scalable Solutions",
      desc: "No off-the-shelf answers: we build AI that fits your operations and grows with your business.",
      isActive: false,
    },
    {
      id: 4,
      title: "Transparent Process",
      desc: "From prototyping to deployment, we keep you informed and involved every step of the way.",
      isActive: false,
    },
    {
      id: 5,
      title: "Ongoing Support",
      desc: "We don't just build and leave our team supports, updates, and scales your solutions over time.",
      isActive: false,
    },
  ];

  return (
    <div
      className="flex py-6 items-center justify-center font-sans bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/images/services/services-bg.avif")`,
      }}
    >
      <Container className="bg-white rounded-[40px] shadow-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-gray-100 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-gray-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="projects-content text-center mb-12">
              <span className="text-14 bg-gradient-to-r from-[#004aad] to-[#0077ff] text-white py-1 rounded-xl font-chakrapetch px-6 shadow-lg">
                Why Choose
              </span>

              <h2 className="mt-4 font-chakrapetch lg:text-35 font-extrabold tracking-wide text-gray-900">
                Why Choose Us?
              </h2>

              <p className="mt-6 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Tap into the world of possibilities with a broad spectrum of our AI ML
                development services designed to foster innovation and steer business
                growth.
              </p>
            </div>

            <div className="relative w-full max-w-md mt-auto">
             <div className="relative h-[300px] w-full rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/user-image.avif"
                alt="Business owner thinking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

              <div className="absolute -top-6 right-10 bg-[#4F65E1] p-3 rounded-full border-4 border-white shadow-lg">
                <BarChart3 className="text-white w-6 h-6" />
              </div>

              <div className="absolute top-10 -right-4 bg-white p-3 rounded-full border border-gray-100 shadow-lg">
                <TrendingDown className="text-[#4F65E1] w-6 h-6" />
              </div>

              <div className="absolute bottom-12 -right-2 bg-[#4F65E1] p-3 rounded-full border-4 border-white shadow-lg">
                <FileText className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`
                    relative p-6 rounded-[2rem] min-h-[160px] flex flex-col justify-between 
                    transition-all duration-300 ease-out transform
                    ${card.isActive 
                      ? 'bg-[#5569e6] text-white shadow-xl shadow-blue-200 hover:shadow-2xl hover:scale-[1.03]'
                      : 'bg-white border border-gray-100 text-gray-900 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]'
                    }
                  `}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className={`text-lg font-bold leading-tight max-w-[80%] ${card.isActive ? 'text-white' : 'text-gray-800'}`}>
                      {card.title}
                    </h3>

                    <div className={`${card.isActive ? 'text-black' : 'text-black'}`}>
                      <ArrowDownRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${card.isActive ? 'text-blue-100' : 'text-gray-700'}`}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
