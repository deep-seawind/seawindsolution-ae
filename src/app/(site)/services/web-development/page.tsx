import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";

import WebDevServices from "./components/WebDevServices";
import WebDevForm from "./components/WebDevForm";
import CallPage from "./components/CallPage";
import WebDevworkProcess from "./components/WebDevworkProcess";
import WebDevWhyChooseUs from "./components/WebDevWhyChooseUs";

import WebDevTechnologySlider from "./components/WebDevTechnologySlider";
import Location from "./components/Location";
import WebDevFeature from "./components/WebDevFeature";
import WebDevBenifits from "./components/WebDevBenifits";
import WebServices from "./components/WebIndustries";
import WebIndustries from "./components/WebIndustries";
import { Pricing } from "@/components";


const WebDevelopment = () => {
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
      <WebDevServices />
      <WebDevForm />
      <CallPage />
      <WebDevworkProcess />
      <WebDevWhyChooseUs />
      <Location />
      <WebIndustries/>
      {/* <WebDevIndustries/> */
      }
      <WebDevTechnologySlider />
<Pricing/>
      <WebDevFeature />
      <WebDevBenifits />
    </div>
  );
};

export default WebDevelopment;
