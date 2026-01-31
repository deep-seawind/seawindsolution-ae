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

// --- Interfaces to resolve Type errors ---

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ProcessStep {
  id: string | number;
  color: string;
  icon: string;
  title: string;
  description: string;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface MobileDevContent {
  services: {
    title: string;
    image: string;
    items: ServiceItem[];
  };
  form: {
    title: string;
    subtitle: { text: string }[];
    buttonText?: string; 
  };
  call: {
    title: string;
    description: string;
    buttonText: string;
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  whyChoose: {
    title: string;
    description: string;
    features: FeatureItem[];
    image?: string; 
  };
  location: {
    title: string;
    description: string;
    locations: any[]; 
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
    title: string;
    description: string;
    items: FeatureItem[];
  };
  benefits: {
    title: string;
    description: string;
    items: any[];
  };
}

const MobileApplicationDevelopment: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/mobile-application-development", text: "Mobile Application Development" },
  ];

  // Cast to unknown first to safely bridge the data structure
  const content = servicePageContent["mobile-application-development"] as unknown as MobileDevContent;

  return (
    <div>
      <HeroSub
        title="Mobile Application Development"
        description="Crafting high-performance iOS and Android applications tailored to your business."
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />

      <ServiceSection
        title={content.services.title}
        image={content.services.image}
        icon="mdi:cellphone-cog"
        services={content.services.items}
      />

      <FormSection
        title={content.form.title}
        subtitle={content.form.subtitle}
        buttonText={content.form.buttonText || "Get a Quote"} 
      />

      <CallSection
        title={content.call.title}
        description={content.call.description}
        buttonText={content.call.buttonText || "Talk to an Expert"}
      />

      <ProcessSection
        title={content.process.title}
        description={content.process.description}
        steps={content.process.steps.map((step) => ({
          ...step,
          id: String(step.id), // Ensure ID is string for component
        }))}
      />

      <WhyChooseSection
        title={content.whyChoose.title}
        description={content.whyChoose.description}
        features={content.whyChoose.features}
        image={content.whyChoose.image || "/images/why-choose/mobile-dev.avif"}
      />

      <LocationSection
        title={content.location.title}
        description={content.location.description}
        locations={(content.location.locations || []).map((loc) => 
            typeof loc === 'string' ? loc : loc.name
        )}
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
        // Map 'description' to 'des' for FeaturesSection compatibility
        features={(content.features?.items || []).map((item) => ({
          title: item.title,
          des: item.description,
          image: item.image,
        }))}
      />

      <BenefitsSection
        title={content.benefits.title}
        description={content.benefits.description}
        benefits={content.benefits.items}
      />
    </div>
  );
};

export default MobileApplicationDevelopment;