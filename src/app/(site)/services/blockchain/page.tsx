import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";
import ChainSolution from "./components/ChainSolution";
import AboutCompany from "./components/AboutCompany";
import BlockServices from "./components/BlockServices";
import ChainWhyChoose from "./components/ChainWhyChoose";
import WorkProcess from "./components/WorkProcess";
import { Pricing } from "@/components";




const BlokChain = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "Block Chain" },
  ];

  return (
    <div>
      <HeroSub 
        title="Blockchain Development" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
          heroImage="/images/hero/banner-image.avif"
      />
      <ChainSolution/>
      <AboutCompany/>
      <BlockServices/>
      <ChainWhyChoose/>
     <Pricing/>
      <WorkProcess/>
    </div>
  );
};

export default BlokChain;
