import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import WhyPartner from "./components/WhyPartner";
import OffshoreDesigners from "./components/OffshoreDesigners";
import TechnologySlider from "./components/TechnologySlider";
import HowTeamWorks from "./components/HowTeamWorks";
import HireDevelopersForm from "./components/HireDeveloperForm";

export default function HireDeveloperPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/Hire-developer", text: "Hire Developer" },
  ];

  return (
    <>
      <HeroSub 
        title="Hire Developer" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
             heroImage="/images/hero/banner-image.avif"
      />
      <WhyPartner />
      <OffshoreDesigners />
      <TechnologySlider />
      <HowTeamWorks />
    <HireDevelopersForm/>
    </>
  );
}
