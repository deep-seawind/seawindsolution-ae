import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import ElevatingSection from "./components/ElevatingSection";
import WhyChooseSlider from "./components/WhyChooseSlider";
import ActivateBusinesses from "./components/ActivateBusinesses";

export default function WhyChoosUs() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/whychoos-us", text: "Why Choose us" },
  ];

  return (
    <>
      <HeroSub 
        title="Why Choose Us" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
      heroImage="/images/hero/banner-image.avif"
      />
      <ElevatingSection />
      <WhyChooseSlider />
      <ActivateBusinesses />
    </>
  );
}
