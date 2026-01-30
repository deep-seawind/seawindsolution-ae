"use client";
import React from "react";
import { notFound } from "next/navigation";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import { servicesData } from "@/data/services";
import { serviceContent } from "@/data/serviceContent";

// Import all web design components
import WebDesignServices from "../web-design/components/WebDesignServices";
import WebForm from "../web-design/components/WebForm";
import CallPage from "../web-design/components/CallPage";
import WebworkProcess from "../web-design/components/WebworkProcess";
import WebWhyChooseUs from "../web-design/components/WebWhyChooseUs";
import Location from "../web-design/components/Location";
import WebIndustries from "../web-design/components/WebIndustries";
import WebTechnologySlider from "../web-design/components/WebTechnologySlider";
import WebFeature from "../web-design/components/WebFeature";
import WebBenifits from "../web-design/components/WebBenifits";

type Props = { params: Promise<{ slug: string }> };

const ServiceDetails = ({ params }: Props) => {
  const { slug } = React.use(params);

  const service = servicesData[slug as keyof typeof servicesData];
  const content = serviceContent[slug as keyof typeof serviceContent];
  
  if (!service || !content) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: `/services/${slug}`, text: service.breadcrumb },
  ];

  return (
    <div>
      <HeroSub
        title={content.title}
        description={content.heroDescription}
        breadcrumbLinks={breadcrumbLinks}
           heroImage="/images/hero/banner-image.avif"
      />
      <WebDesignServices />
      <WebForm />
      <CallPage />
      <WebworkProcess />
      <WebWhyChooseUs />
      <Location />
      <WebIndustries />
      <WebTechnologySlider />
      <WebFeature />
      <WebBenifits />
    </div>
  );
};

export default ServiceDetails;