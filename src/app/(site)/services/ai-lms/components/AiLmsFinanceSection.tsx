import React from "react";
import {
  Users,
  ShieldCheck,
  Award,
  Globe,
  Eye,
  Workflow,
  Server,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/common/Container";

const services = [
  {
    title: "Experienced Developers with Agile Mindset",
    description: "Our developers follow agile practices to deliver scalable and efficient solutions.",
    icon: <Users size={24} />,
  },
  {
    title: "IP Protection & Security",
    description: "We ensure complete confidentiality and strong protection of your intellectual property.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "Highly Skilled and Certified Developers",
    description: "Work with certified professionals experienced across modern technologies.",
    icon: <Award size={24} />,
  },
  {
    title: "Hybrid Model On-Site & Offshore Support",
    description: "Flexible engagement models combining local presence with offshore efficiency.",
    icon: <Globe size={24} />,
  },
  {
    title: "Complete Transparency & Control",
    description: "Stay informed with full visibility into development progress and workflows.",
    icon: <Eye size={24} />,
  },
  {
    title: "On Demand DevOps and Project Management",
    description: "Streamlined deployment and management for faster, reliable delivery.",
    icon: <Workflow size={24} />,
  },
  {
    title: "Ready to use IT infrastructure",
    description: "Start quickly with secure, scalable, and fully managed infrastructure.",
    icon: <Server size={24} />,
  },
  {
    title: "Replacement Guarantee",
    description: "Risk-free hiring with immediate replacement if expectations are not met.",
    icon: <RefreshCw size={24} />,
  },
];

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#004aad]/10 via-transparent to-[#004aad]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Animated left accent */}
      <div className="absolute left-0 top-10 h-10 w-1.5 bg-[#004aad] rounded-r-full transition-all duration-500 group-hover:h-16 group-hover:w-2 group-hover:shadow-[0_0_20px_rgba(0,74,173,0.6)]" />

      {/* Icon */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#004aad] text-white shadow-md transition-all duration-500 group-hover:rotate-12 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,74,173,0.5)]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-[#004aad]">
        {title}
        <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#004aad] transition-all duration-500 group-hover:w-12" />
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default function AiLmsFinanceSection() {
  return (
    <section className="bg-white py-10">
      <Container className="items-center justify-between">
        <div>
          <span className="rounded-xl bg-[#004aad] py-1 ps-5 pe-3 text-sm font-chakrapetch capitalize text-white">
            Services
          </span>

          <h2 className="mt-6 w-full font-chakrapetch text-2xl font-semibold capitalize lg:w-3/4 lg:text-[35px]">
            Why Seawind Solution FZ-LLC is Your Valued Partner?
          </h2>

          <p className="mt-4 text-pera-dark">
            Here are some unique offers that make us one of the most trusted
            offshore software development company in UAE, from where you can
            hire remote developers easily.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
