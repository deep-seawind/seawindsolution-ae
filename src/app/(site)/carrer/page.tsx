import HeroSub from "@/components/common/SharedComponents/HeroSub";
import React from "react";
import JoinTeamForm from "./components/JoinTeamForm";
import CultureSlider from "./components/CultureSlider";

export default function Carees() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "Careers" },
  ];

  return (
    <>
      <HeroSub 
        title="Careers" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
      heroImage="/images/hero/banner-image.avif"
      />
      <JoinTeamForm />
      <CultureSlider />
    </>
  );
}
