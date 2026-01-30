import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import AiMlAbout from "./components/AiLmsAbout";
import FinanceSection from "./components/AiLmsFinanceSection";
import ServicesSlider from "./components/AiLmsServicesSlider";
import WhyChooseUs from "./components/AiLmsWhyChooseUs";
import Process from "./components/AiLmsProcess";
import Faq from "../../about/faq/page";
import { Pricing } from "@/components";
import AiMlsFinanceSection from "./components/AiLmsFinanceSection";
import AiMlsServicesSlider from "./components/AiLmsServicesSlider";
import AiMlsWhyChooseUs from "./components/AiLmsWhyChooseUs";
import AiLmsAbout from "./components/AiLmsAbout";
import AiLmsFinanceSection from "./components/AiLmsFinanceSection";
import AiLmsServicesSlider from "./components/AiLmsServicesSlider";
import AiLmsProcess from "./components/AiLmsProcess";
import AiLmsWhyChooseUs from "./components/AiLmsWhyChooseUs";
import AiLmsWhoCanUse from "./components/AiLmsWhoCanUse";

const AiLms = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "AI-ML Development" },
  ];

  return (
    <div>
      <HeroSub
        title="Ai Lms"
        description=""
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />
      <AiLmsAbout />
      <AiLmsFinanceSection />
      {/* <AiLmsServicesSlider /> */}
      <Pricing />
      {/* <AiLmsWhyChooseUs/> */}
      <AiLmsServicesSlider />
      <AiLmsWhoCanUse/>
      <AiLmsProcess />
      <Faq />
    </div>
  );
};

export default AiLms;
