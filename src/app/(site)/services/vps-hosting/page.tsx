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

// --- Precise Type Definitions ---

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
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

interface LocationItem {
  name: string;
  lat?: number; // Optional based on your current mismatch
  lng?: number; // Optional based on your current mismatch
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
  description: string;
  icon: string;
}

type VPSContent = {
  services: {
    title: string;
    image?: string;
    items: ServiceItem[];
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
    locations: LocationItem[];
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
    title?: string;
    description?: string;
    items?: FeatureItem[];
  };
  benefits: {
    title: string;
    description: string;
    items: BenefitItem[];
  };
};

const VpsHosting: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/vps-hosting", text: "VPS Hosting" },
  ];

  const content = servicePageContent["vps-hosting"] as unknown as VPSContent;

  return (
    <div>
      <HeroSub
        title="VPS Hosting"
        description="Comprehensive VPS Hosting solutions to grow your business online"
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
        buttonText={content.call.buttonText}
      />

      <ProcessSection
        title={content.process.title}
        description={content.process.description}
        steps={content.process.steps.map((step) => ({
          ...step,
          id: String(step.id),
        }))}
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
        // Fix: Extracting the string name to match the expected string[] type
        locations={content.location.locations.map((loc) => loc.name)}
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
        technologies={content.technology.items.map((tech) => ({
          ...tech,
          icon: tech.icon || "mdi:server",
        }))}
      />

      <FeaturesSection
        title={content.features?.title || "Key Features"}
        description={content.features?.description || "Advanced features"}
        features={(content.features?.items || []).map((item) => ({
          title: item.title,
          des: item.description,
          image: item.image,
        }))}
      />

      <BenefitsSection
        title={content.benefits.title}
        description={content.benefits.description}
        benefits={content.benefits.items.map((benefit) => ({
          ...benefit,
          icon: benefit.icon || "mdi:check-circle",
        }))}
      />
    </div>
  );
};

export default VpsHosting;