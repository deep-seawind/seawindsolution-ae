import React from 'react'
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";
import CgiForm from './components/CgiForm';
import CgiWhyChoose from './components/CgiWhyChoose';
import HowWork from './components/HowWrok';
import CGIServices from './components/CgiServices';
import Industrial from './components/Industrial';
import { Pricing } from '@/components';







const Cgi = () => {
     const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/services/ai-ml", text: "CGI" },
  ];

  return (
    <div>

        <HeroSub 
            title="CGI Services" 
            description="" 
            breadcrumbLinks={breadcrumbLinks} 
              heroImage="/images/hero/banner-image.avif"
        />
        <CgiForm/>
        <CgiWhyChoose/>
        <HowWork/>
        <CGIServices/>
      <Pricing/>
        <Industrial/>

       
    </div>
  )
}

export default Cgi
