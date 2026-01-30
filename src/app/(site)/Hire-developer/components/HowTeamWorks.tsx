import React from "react";
import Container from "@/components/common/Container";

const steps = [
  {
    icon: 1,
    color: "bg-[#2b5b9b]",
    arrowColor: "bg-[#2b5b9b]",
    title: "Share your requirements with us",
  },
  {
    icon: 2,
    color: "bg-[#2b5b9b]",
    arrowColor: "bg-[#2b5b9b]",
    title: "We recruit experienced staff",
  },
  {
    icon: 3,
    color: "bg-[#2b5b9b]",
    arrowColor: "bg-[#2b5b9b]",
    title: "Your dedicated team report to you daily",
  },
  {
    icon: 4,
    color: "bg-[#2b5b9b]",
    arrowColor: "bg-[#2b5b9b]",
    title: "We manage your remote team operations",
  },
];

export default function HowTeamWorks() {
  return (
    <section className="flex min-h-[500px] w-full items-center justify-center bg-white  py-16">
      <Container  className="items-center justify-between">
        <div className="mb-12 text-center">
          <span className="text-14 bg-[#004aad] text-white font-normal py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
            Work
          </span>
          <h2 className="w-full font-chakrapetch lg:text-35 mt-2 text-center text-black capitalize font-semibold">
            How Your Team Works?
          </h2>
          <p className="text-pera-dark font-normal group-hover:text-white transition-colors mt-4 duration-500">
            With a vision to deliver quality work at commendable cost, we enable our clients to quickly hire a team of developers at cost-effective prices with zero setup investment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative h-70 w-full group">
              <div className="absolute inset-0 rounded-[2.5rem] border-[2px] border-dashed border-gray-300"></div>
              <div className={`absolute bottom-1 right-1 top-1 w-[50%] rounded-r-[2.2rem] ${step.color}`}>
                <div className={`absolute -right-3 top-1/2 h-10 w-10 -translate-y-1/2 rotate-45 transform rounded-sm ${step.arrowColor}`}></div>
              </div>
              <div className="absolute bottom-3 left-3 right-8 top-3 flex flex-col items-center justify-center rounded-[2rem] bg-white px-6 py-8 text-center shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
                <div className="mb-4 text-[#004aad] rounded-full bg-[#004aad]/10 p-4">
                  {step.icon}
                </div>
                <h3 className="mb-3 text-lg font-medium text-pera-dark">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
