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

// --- Strictly Aligned Interfaces ---

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface FormSubtitle {
  text: string;
}

interface ProcessStep {
  id: string; 
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

interface IndustryItem {
  name: string; 
  description: string;
  image: string;
  icon: string;
}

interface TechnologyItem {
  name: string;
  icon: string; 
}

interface BenefitItem {
  title: string;
  description: string; // Made mandatory
  icon: string;        // Added icon
}

interface CDNContent {
  services: {
    title: string;
    image: string;
    items: ServiceItem[];
  };
  form: {
    title: string;
    subtitle: FormSubtitle[];
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
    image: string;
  };
  industries: {
    title: string;
    description: string;
    items: IndustryItem[];
  };
  technology: {
    title: string;
    description: string;
    items: TechnologyItem[];
  };
  features?: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  benefits: {
    title: string;
    description: string;
    items: BenefitItem[];
  };
}

const CDN: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/cdn", text: "CDN" },
  ];

  const content = servicePageContent["cdn"] as unknown as CDNContent;

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
        buttonText={content.form.buttonText || "Send"}
      />

      <CallSection
        title={content.call.title}
        description={content.call.description}
        buttonText={content.call.buttonText || "Contact Us"}
      />

      <ProcessSection
        title={content.process.title}
        description={content.process.description}
        steps={content.process.steps.map(step => ({
            ...step,
            id: String(step.id)
        }))}
      />

      <WhyChooseSection
        title={content.whyChoose.title}
        description={content.whyChoose.description}
        features={content.whyChoose.features}
        image={content.whyChoose.image}
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
        technologies={content.technology.items.map(tech => ({
          name: tech.name,
          icon: tech.icon || "mdi:check-circle" 
        }))}
      />

      <FeaturesSection
        title={content.features?.title || "Key Features"}
        description={content.features?.description || "Advanced features"}
        features={(content.features?.items || []).map(item => ({
          title: item.title,
          des: item.description,
          image: item.image
        }))}
      />

      <BenefitsSection
        title={content.benefits.title}
        description={content.benefits.description}
        // Mapping to ensure icon and description exist for the component
        benefits={content.benefits.items.map(benefit => ({
          title: benefit.title,
          description: benefit.description || "",
          icon: benefit.icon || "mdi:check-decagram" 
        }))}
      />
    </div>
  );
};

export default CDN;