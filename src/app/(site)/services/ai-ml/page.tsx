import React from 'react'
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import AiMlAbout from './components/AiMlAbout';
import FinanceSection from './components/FinanceSection';
import ServicesSlider from './components/ServicesSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Faq from '../../about/faq/page';
import { Pricing } from '@/components';






const AiMl = () => {
     const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "AI-ML Development" },
  ];

  return (
    <div>

        <HeroSub 
            title="AI-ML Development" 
            description="" 
            breadcrumbLinks={breadcrumbLinks} 
      heroImage="/images/hero/banner-image.avif"
        />
        <AiMlAbout/>
        <FinanceSection/>
        <ServicesSlider/>
        <Pricing/>
        <WhyChooseUs/>
        <Process/>
        <Faq/>
       
    </div>
  )
}

export default AiMl
