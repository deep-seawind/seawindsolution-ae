import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";
import WhatsappForm from "./components/WhatsappForm";
import WhatsappSolution from "./components/WhatsappSolution";
import WhatsAppBenefits from "./components/WhatsAppBenefits";
import { Pricing } from "@/components";


const Whatsapp = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "Whatsapp" },
  ];

  return (
    <div>
      <HeroSub 
        title="WhatsApp Business Solutions" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
          heroImage="/images/hero/banner-image.avif"
      />
      <WhatsappForm/>
      <WhatsappSolution/>
<Pricing/>
      <WhatsAppBenefits/>
    </div>
  );
};

export default Whatsapp;
