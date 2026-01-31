import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index"; 
import WebDevForm from "./components/WebForm";
import CallPage from "./components/CallPage";
import WebworkProcess from "./components/WebworkProcess";
import WebDesignServices from "./components/WebDesignServices";
import WebWhyChooseUs from "./components/WebWhyChooseUs";
import Location from "./components/Location";
import WebIndustries from "./components/WebIndustries";
import WebTechnologySlider from "./components/WebTechnologySlider";
import WebFeature from "./components/WebFeature";
import WebBenifits from "./components/WebBenifits";
import { Pricing } from "@/components";

const WebDesign = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/web-development", text: "Web Development" },
  ];

  return (
    <div>
      <HeroSub
        title="Web Development"
        description=""
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />
      <WebDesignServices />
      <WebDevForm />
      <CallPage />
      <WebworkProcess />
      <WebWhyChooseUs />
      <Location />
      <WebIndustries />
      <Pricing />
      <WebTechnologySlider />
      <WebFeature />
      <WebBenifits />
    </div>
  );
};

export default WebDesign;
