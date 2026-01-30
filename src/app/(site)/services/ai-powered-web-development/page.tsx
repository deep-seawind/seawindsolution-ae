import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";
import WebworkProcess from "./components/WebworkProcess";
import WebServices from "./components/WebServices";
import WeDoWhat from "./components/WeDoWhat";
import WebWhyChoose from "./components/WebWhyChoose";
import Faq from "../../about/faq/page";
import { Pricing } from "@/components";




const BlokChain = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "Ai Powered Web Development" },
  ];

  return (
    <div>
      <HeroSub title="About" description="" breadcrumbLinks={breadcrumbLinks}    heroImage="/images/hero/banner-image.avif" />
      <WebworkProcess/>
      <WeDoWhat/>
      <WebServices/>
      <Pricing/>
      <WebWhyChoose/>
      <Faq/>
    </div>
  );
};

export default BlokChain;
