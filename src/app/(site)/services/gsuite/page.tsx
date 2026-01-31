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

// --- Concrete Interfaces to satisfy @typescript-eslint/no-explicit-any ---

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

interface GSuiteContent {
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

const GSuite: React.FC = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/gsuite", text: "G Suite" },
  ];

  const content = servicePageContent["gsuite"] as unknown as GSuiteContent;

  return (
    <div>
      <HeroSub
        title="G Suite (Google Workspace)"
        description="Empower your team with professional email, online storage, and collaboration tools."
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />

      <ServiceSection
        title={content.services.title}
        image={content.services.image}
        icon="mdi:google"
        services={content.services.items}
      />

      <FormSection
        title={content.form.title}
        subtitle={content.form.subtitle}
        buttonText={content.form.buttonText || "Get G Suite"} 
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
        image={content.whyChoose.image || "/images/why-choose/gsuite.avif"}
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

export default GSuite;