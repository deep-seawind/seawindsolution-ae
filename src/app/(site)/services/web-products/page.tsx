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


const WebProducts = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/web-products", text: "Web Products" },
  ];

  const content = servicePageContent ["web-products"];

  return (
    <div>
      <HeroSub
        title="Web Products"
        description="Comprehensive web products solutions to grow your business online"
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
        locations={content.location.locations}
      />

<Pricing/>

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

export default WebProducts;
