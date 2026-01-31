import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import {
  ServiceSection,
  FormSection,
  CallSection,
  ProcessSection,
  WhyChooseSection, 
  IndustriesSection,
  TechnologySection,
  FeaturesSection,
  BenefitsSection,
} from "@/components/common/ServiceComponents/ServiceSections";
import { servicePageContent } from "@/data/servicePageContent";
import { Pricing } from "@/components";

// Define type for CDN content to avoid TS errors
type CDNContent = {
  services: {
    title: string;
    image?: string;
    items: any[];
  };
  form: {
    title: string;
    subtitle?: { text: string }[];
    buttonText?: string;
  };
  call: {
    title: string;
    description: string;
    buttonText?: string;
  };
  process: {
    title: string;
    description: string;
    steps: any[];
  };
  whyChoose: {
    title: string;
    description: string;
    features: any[];
    image?: string;
  };
  industries: {
    title: string;
    description: string;
    items: any[];
  };
  technology: {
    title: string;
    description: string;
    items: any[];
  };
  features?: {
    title?: string;
    description?: string;
    items?: any[];
  };
  benefits: {
    title: string;
    description: string;
    items: any[];
  };
};

const CDN: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/cdn", text: "CDN" },
  ];

  // Typecast content to CDNContent to satisfy TS
  const content = servicePageContent["cdn"] as CDNContent;

  return (
    <div>
      <HeroSub
        title="CDN"
        description="Comprehensive CDN solutions to grow your business online"
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />

      <ServiceSection
        title={content.services.title}
        image={content.services.image}
        icon="mdi:marketing"
        services={content.services.items}
      />

      <FormSection
        title={content.form.title}
        subtitle={content.form.subtitle}
        buttonText={content.form.buttonText || "Send"} // fallback if undefined
      />

      <CallSection
        title={content.call.title}
        description={content.call.description}
        buttonText={content.call.buttonText || "Contact Us"} // fallback
      />

      <ProcessSection
        title={content.process.title}
        description={content.process.description}
        steps={content.process.steps}
      />

      <WhyChooseSection
        title={content.whyChoose.title}
        description={content.whyChoose.description}
        features={content.whyChoose.features}
        image={content.whyChoose.image}
      />

      {/* <LocationSection
        title={content.location.title}
        description={content.location.description}
        locations={content.location.locations}
      /> */}

      <Pricing />

      <IndustriesSection
        title={content.industries.title}
        description={content.industries.description}
        industries={content.industries.items}
      />

      <TechnologySection
        title={content.technology.title}
        description={content.technology.description}
        technologies={content.technology.items}
      />

      <FeaturesSection
        title={content.features?.title || "Key Features"}
        description={content.features?.description || "Advanced features"}
        features={content.features?.items || []}
      />

      <BenefitsSection
        title={content.benefits.title}
        description={content.benefits.description}
        benefits={content.benefits.items}
      />
    </div>
  );
};

export default CDN;
