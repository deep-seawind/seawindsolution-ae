import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import {
  ServiceSection,
  FormSection,
  CallSection,
  ProcessSection,
  WhyChooseSection,
  LocationSection,
  IndustriesSection,
  TechnologySection,
  FeaturesSection,
  BenefitsSection,
} from "@/components/common/ServiceComponents/ServiceSections";
import { servicePageContent } from "@/data/servicePageContent";
import { Pricing } from "@/components";

// Updated type: location.locations is now string[]
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
  location: {
    title: string;
    description: string;
    locations: string[]; // <-- updated
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

const WebHosting: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/web-hosting", text: "Web Hosting" },
  ];

  const content = servicePageContent["web-hosting"] as CDNContent;

  return (
    <div>
      <HeroSub
        title="Web Hosting"
        description="Comprehensive Web Hosting solutions to grow your business online"
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
        buttonText={content.form.buttonText}
      />

      <CallSection
        title={content.call.title}
        description={content.call.description}
        buttonText={content.call.buttonText || "Contact Us"}
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

      <LocationSection
        title={content.location.title}
        description={content.location.description}
        locations={content.location.locations} // now string[]
      />

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

export default WebHosting;
