"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HeaderItem } from "@/type/menu";
import { useParams, usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const servicesList = [

  {
    id: "ai-lms",
    title: "Ai Lms",
    hreflink:"/services/ai-lms",
    content: {
      heading: "Ai Lms",
      services: [{ title: "Ai Lms", link: "/services/ai-lms" }],
    },
  },

  {
    
    id: "ai-ml",
    title: "AI/ML Development",
    hreflink:"/services/ai-ml",
    content: {
      heading: "AI-ML Development",
      services: [{ title: "AI-ML Development", link: "/services/ai-ml" }],
    },
  },
  {
    id: "cgi",
    title: "CGI Services",
    hreflink:"/services/cgi",
    content: {
      heading: "CGI Services",
      services: [
        {
          title: "CGI Video, 3D Animation Service in UAE",
          link: "/services/ai-ml",
        },
      ],
    },
  },
  {
    id: "whatsapp",
    title: "WhatsApp Business Solution",
     hreflink:"/services/whatsapp",
    content: {
      heading: "Whatsapp Business Solution",
      services: [
        { title: "Whatsapp Business Solution", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "ai-business",
    title: "AI Powered Business Solution",
    hreflink:"/services/ai-powered",
    content: {
      heading: "AI Powered Business Solution",
      services: [
        { title: "AI Powered Business Solution", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
     hreflink:"/services/blockchain",
    content: {
      heading: "Blockchain Development",
      services: [{ title: "Blockchain Development", link: "/services/ai-ml" }],
    },
  },
  {
    id: "ai-web",
    title: "AI-Powered Web Development",
      hreflink:"/services/ai-powered-web-development",
    content: {
      heading: "AI-Powered Web Development",
      services: [
        { title: "AI-Powered Web Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "ai-design",
    title: "AI Powered Web Design",
    hreflink:"/services/web-design",
    content: {
      heading: "AI Powered Web Design",
      services: [
        { title: "   Bespoke Web Design", link: "/services/ai-ml" },
        { title: "  Responsive Web Design", link: "/services/ai-ml" },
        { title: "  Graphic And Logo Design", link: "/services/ai-ml" },
        { title: "  PSD to HTML", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "web-dev",
    title: "Web Development",
    hreflink:"/services/web-development", 
    content: {
      heading: "Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    hreflink: "/services/digital-marketing",
    content: {
      heading: "AI-ML Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "mobile-app",
    title: "Mobile Application Development",
    hreflink: "/services/mobile-application-development",
    content: {
      heading: "CGI Services",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "vps-hosting",
    title: "VPS Hosting",
    hreflink: "/services/vps-hosting",
    content: {
      heading: "Whatsapp Business Solution",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    hreflink: "/services/web-hosting",
    content: {
      heading: "AI Powered Business Solution",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },

  {
    id: "dedicated-server",
    title: "Dedicated Server",
    hreflink: "/services/dedicated-server",
    content: {
      heading: "Blockchain Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "web-products",
    title: "Web Products",
    hreflink: "/services/web-products",
    content: {
      heading: "AI-Powered Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "domain-registration",
    title: "Domain Registration",
    hreflink: "/services/domain-registration",
    content: {
      heading: "AI Powered Web Design",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "ssl-certificate",
    title: "SSL Certificate",
    hreflink: "/services/ssl-certificate",
    content: {
      heading: "Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },

  {
    id: "cloud-erp",
    title: "Cloud ERP",
    hreflink: "/services/cloud-erp",
    content: {
      heading: "Blockchain Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "visitor-management",
    title: "Visitor Management",
    hreflink: "/services/visitor-management",
    content: {
      heading: "AI-Powered Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "whatsapp-chatbot",
    title: "WhatsApp Chatbot",
    hreflink: "/services/whatsapp-chatbot",
    content: {
      heading: "AI Powered Web Design",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "cdn",
    title: "CDN (Content Delivery Network)",
    hreflink: "/services/cdn",
    content: {
      heading: "Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },

  {
    id: "start-it-business",
    title: "Start Your IT Business",
    hreflink: "/services/start-your-it-business",
    content: {
      heading: "Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },

  {
    id: "gsuite",
    title: "GSuite (Google Workspace)",
    hreflink: "/services/gsuite",
    content: {
      heading: "Web Development",
      services: [
        { title: "   CMS Development Company", link: "/services/ai-ml" },
        { title: "  E-Commerce Development", link: "/services/ai-ml" },
        { title: "  Website Maintenance", link: "/services/ai-ml" },
        { title: "  Software Development", link: "/services/ai-ml" },
        { title: "  Magento Development", link: "/services/ai-ml" },
        { title: "  Opencart Development", link: "/services/ai-ml" },
        { title: "  Prestashop Development", link: "/services/ai-ml" },
        { title: "  E-commerce Market Place", link: "/services/ai-ml" },
        { title: "  Node Js Development", link: "/services/ai-ml" },
        { title: "  Laravel Development", link: "/services/ai-ml" },
        { title: "  Codeigniter Development", link: "/services/ai-ml" },
        { title: "  Unity 3D Development", link: "/services/ai-ml" },
        { title: "  YII Development", link: "/services/ai-ml" },
        { title: "  AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
];

const HeaderLinks: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(servicesList[0].id);
  const menuRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  const activeContent = servicesList.find((s) => s.id === activeTab)?.content;
  const isServicesMenu = item.label === "Services";
  const hasSubmenu = item.submenu && !isServicesMenu;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false);
      }
    };

    if (submenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [submenuOpen]);

  const handleClick = (e: React.MouseEvent) => {
    if (isServicesMenu || hasSubmenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <>
      <div className="relative group" ref={menuRef}>
        <Link
          href={item.href}
          onClick={handleClick}
          className={`text-base font-normal flex items-center hover:text-shadow-dark-text ${
            path === item.href ? "text-white hover:text-white" : "text-white"
          }`}
        >
          {item.label}
          {item.submenu && (
            <Icon
              icon="iconamoon:arrow-down-2-duotone"
              width="22"
              height="22"
              className={`ml-1 transition-transform duration-300 ${submenuOpen ? 'rotate-180' : ''}`}
            />
          )}
        </Link>

        {item.submenu && !isServicesMenu && (
          <div
            className={`absolute left-0 top-full rounded-lg mt-2 w-60 bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50 ${
              submenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
            }`}
          >
            {item.submenu.map((subItem: any, index: number) => (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-5 py-3 text-sm font-medium transition-all duration-200 ${
                  path === subItem.href
                    ? "text-white bg-[#004aad]"
                    : "text-gray-700 hover:bg-[#004aad] hover:text-white hover:pl-6"
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}

        {isServicesMenu && (
          <div className={`absolute z-50 transition-all duration-300 ${
            submenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          } 
          top-full mt-4 
          left-1/2 -translate-x-1/2 
          lg:left-[300px] lg:-translate-x-1/2
          md:left-0 md:translate-x-0
          sm:left-0 sm:translate-x-0
          w-[95vw] max-w-[900px] min-h-[300px] 
          lg:w-[1100px] lg:min-h-[400px] lg:flex
          // md:w-[90vw] 
          sm:w-[95vw]
          bg-white border border-[#0f2036] rounded-xl shadow-2xl overflow-hidden
          flex-col lg:flex-row`}>
            
            {/* Services List - Left Side */}
            <div className="w-full lg:w-[50%] py-4 pl-4 pr-2 overflow-y-auto max-h-[200px] lg:max-h-[450px] border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="space-y-1">
                {servicesList.map((service) => (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveTab(service.id)}
                    onClick={() => setActiveTab(service.id)}
                    className={`px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-normal cursor-pointer rounded-l-lg transition-all duration-300 flex justify-between items-center ${
                      activeTab === service.id
                        ? "bg-[#004aad] text-white shadow-md translate-x-1"
                        : "text-black hover:bg-[#004aad]/50"
                    }`}
                  >
                    <Link href={service.hreflink || "/services"} className="flex-1">
                      <span className="text-xs lg:text-sm">{service.title}</span>
                    </Link>
                    {activeTab === service.id && (
                      <Icon icon="mdi:chevron-right" width="16" height="16" className="lg:w-5 lg:h-5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Services Content - Right Side */}
            <div className="w-full lg:w-[90%] bg-white p-4 lg:p-8 text-[#004aad] flex flex-col">
              <div className="animate-fade-in">
                <h2 className="text-xl lg:text-3xl font-bold mb-2">
                  {activeContent?.heading}
                </h2>
                <p className="text-gray-600 text-xs lg:text-sm mb-4 lg:mb-6 uppercase tracking-wider">
                  {activeContent?.heading}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-5 mb-4 lg:mb-6">
                  {activeContent?.services?.slice(0, 8).map((service, index) => (
                    <Link
                      key={index}
                      href={service?.link}
                      className="block text-[#004aad] hover:text-[#0066cc] transition-colors text-xs lg:text-sm py-1 hover:underline"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                
                {/* View All Services Link */}
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-[#004aad] hover:text-[#0066cc] font-medium text-sm lg:text-base"
                  onClick={() => setSubmenuOpen(false)}
                >
                  View All Services
                  <Icon icon="mdi:arrow-right" width="20" height="20" className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderLinks;
