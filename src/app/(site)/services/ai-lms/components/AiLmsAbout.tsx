import React from "react";
import Container from "@/components/common/Container";

const AiLmsAbout = () => {
  return (
    <main
      className="  w-full  flex justify-center py-12 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url(/images/about/about-bg.avif)",
        backgroundRepeat: "no-repeat",
        width: "full",
      }}
    >
      <Container className=" space-y-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 font-chakrapetch ">
         AI Lead CRM Sales Automation
        </h1>

        <p className="text-gray-700 mb-0 leading-relaxed text-[17px]">
       An intelligent platform that automatically captures, qualifies, and tracks leads using AI-driven insights, helping teams improve follow-ups, boost conversions, and manage leads more efficiently from a single dashboard.
        </p>
        <br />

       <h1 className="text-4xl font-bold text-gray-800 mb-6 font-chakrapetch ">
        Key Features of an AI Lead CRM Sales Automation
        </h1>

        <p className="text-gray-700 mb-0 leading-relaxed text-[17px]">
     AI Lead CRM is a powerful, AI-driven sales automation app designed to help businesses capture, manage, and convert leads efficiently. With intelligent lead scoring, automated follow-ups, and real-time insights, AI Lead CRM ensures that no inquiry is missed and every opportunity is maximized. Built for speed, simplicity, and scalability, the app gives sales teams the tools they need to close more deals — anytime, anywhere.
        </p>
        
   
      </Container>
    </main>
  );
};

export default AiLmsAbout;
