import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";
import AiAbout from "./components/AiAbout";

import AiServices from "./components/AiServices";
import AiFetured from "./components/AiFetured";
import AiWhyChoose from "./components/AiWhyChoose";
import AiWhatWeDo from "./components/AiWhatWeDo";
import AiProcess from "./components/AiProcess";
import { Pricing } from "@/components";


const AiPowered = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "AI Powered" },
  ];

  return (
    <div>
      <HeroSub 
        title="AI Powered Solutions" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
     heroImage="/images/hero/banner-image.avif"
      />
      <AiAbout/>
      <AiWhatWeDo/>
      <AiServices/>
    <Pricing/>
      <AiFetured/>
      <AiWhyChoose/>
      <AiProcess/>

      
    </div>
  );
};

export default AiPowered;
