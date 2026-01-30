import React from "react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";

interface ServiceTemplateProps {
  title: string;
  description: string;
  breadcrumbText: string;
  serviceSlug: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  breadcrumbText,
  serviceSlug,
}) => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: `/services/${serviceSlug}`, text: breadcrumbText },
  ];

  return (
    <div>
      <HeroSub title={title} description={description} breadcrumbLinks={breadcrumbLinks}    heroImage="/images/hero/banner-image.avif" />
    </div>
  );
};

export default ServiceTemplate;