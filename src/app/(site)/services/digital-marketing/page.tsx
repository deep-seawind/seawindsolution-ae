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

// --- Concrete Interfaces ---

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

interface LocationItem {
  name: string;
}

interface MarketingContent {
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
    locations: (string | LocationItem)[]; 
  };
  industries: {
    title: string;
    description: string;
    items: IndustryItem[]; // Fixed: replaced any[]
  };
  technology: {
    title: string;
    description: string;
    items: TechnologyItem[]; // Fixed: replaced any[]
  };
  features?: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  benefits: {
    title: string;
    description: string;
    items: BenefitItem[]; // Fixed: replaced any[]
  };
}

const DigitalMarketing: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/digital-marketing", text: "Digital Marketing" },
  ];

  // Map the data to our strict interface
  const content = servicePageContent["digital-marketing"] as unknown as MarketingContent;

  return (
    <div>
      <HeroSub
        title="Digital Marketing"
        description="Comprehensive digital marketing solutions to grow your business online"
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
        buttonText={content.form.buttonText || "Get Started"}
      />

      <CallSection
        title={content.call.title}
        description={content.call.description}
        buttonText={content.call.buttonText || "Contact Us"}
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
        image={content.whyChoose.image || "/images/why-choose/default-marketing.avif"}
      />

      <LocationSection
        title={content.location.title}
        description={content.location.description}
        locations={(content.location.locations || []).map((loc) =>
          typeof loc === "string" ? loc : loc.name
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

export default DigitalMarketing;