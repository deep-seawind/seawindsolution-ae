import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "@/type/menu";
import { Icon } from "@iconify/react";

const servicesList = [
  {
    id: "ai-lms",
    title: "Ai Lms",
    hreflink: "/services/ai-lms",
    content: {
      heading: "Ai Lms",
      services: [{ title: "Ai Lms", link: "/services/ai-lms" }],
    },
  },
  {
    id: "ai-ml",
    title: "AI/ML Development",
    hreflink: "/services/ai-ml",
    content: {
      heading: "AI-ML Development",
      services: [{ title: "AI-ML Development", link: "/services/ai-ml" }],
    },
  },
  {
    id: "ai-design",
    title: "AI Powered Web Design",
    hreflink: "/services/web-design",
    content: {
      heading: "AI Powered Web Design",
      services: [
        { title: "Bespoke Web Design", link: "/services/ai-ml" },
        { title: "Responsive Web Design", link: "/services/ai-ml" },
        { title: "Graphic And Logo Design", link: "/services/ai-ml" },
        { title: "PSD to HTML", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "web-dev",
    title: "Web Development",
    hreflink: "/services/web-development",
    content: {
      heading: "Web Development",
      services: [
        { title: "CMS Development Company", link: "/services/ai-ml" },
        { title: "E-Commerce Development", link: "/services/ai-ml" },
        { title: "Website Maintenance", link: "/services/ai-ml" },
        { title: "Software Development", link: "/services/ai-ml" },
        { title: "Magento Development", link: "/services/ai-ml" },
        { title: "Opencart Development", link: "/services/ai-ml" },
        { title: "Prestashop Development", link: "/services/ai-ml" },
        { title: "E-commerce Market Place", link: "/services/ai-ml" },
        { title: "Node Js Development", link: "/services/ai-ml" },
        { title: "Laravel Development", link: "/services/ai-ml" },
        { title: "Codeigniter Development", link: "/services/ai-ml" },
        { title: "Unity 3D Development", link: "/services/ai-ml" },
        { title: "YII Development", link: "/services/ai-ml" },
        { title: "AMP Development", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    hreflink: "/services/digital-marketing",
    content: {
      heading: "Digital Marketing",
      services: [
        { title: "SEO Services", link: "/services/ai-ml" },
        { title: "Social Media Marketing", link: "/services/ai-ml" },
        { title: "PPC Management", link: "/services/ai-ml" },
        { title: "Content Marketing", link: "/services/ai-ml" },
      ],
    },
  },
  {
    id: "mobile-app",
    title: "Mobile Application Development",
    hreflink: "/services/mobile-application-development",
    content: {
      heading: "Mobile App Development",
      services: [
        { title: "iOS App Development", link: "/services/ai-ml" },
        { title: "Android App Development", link: "/services/ai-ml" },
        { title: "React Native Development", link: "/services/ai-ml" },
        { title: "Flutter Development", link: "/services/ai-ml" },
      ],
    },
  },
];

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [activeService, setActiveService] = useState<string | null>(null);
    const isServicesMenu = item.label === "Services";

    const handleToggle = () => {
        if (item.submenu || isServicesMenu) {
            setSubmenuOpen(!submenuOpen);
            setActiveService(null);
        }
    };

    const handleServiceClick = (serviceId: string) => {
        setActiveService(activeService === serviceId ? null : serviceId);
    };

    return (
        <div className="relative w-full">
            <div
                className="flex items-center justify-between w-full py-2 text-white cursor-pointer"
                onClick={handleToggle}
            >
                <span>{item.label}</span>
                {(item.submenu || isServicesMenu) && (
                    <Icon icon="iconamoon:arrow-down-2-duotone" width="24" height="24" className={`transition-transform duration-300 ${submenuOpen ? "rotate-180" : ""
                        }`} />
                )}
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${submenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                {isServicesMenu ? (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg mt-2 max-h-[500px] overflow-y-auto">
                        {servicesList.map((service) => (
                            <div key={service.id} className="border-b border-white/10 last:border-b-0">
                                <div 
                                    className="flex items-center justify-between py-3 px-4 text-white hover:bg-[#004aad] cursor-pointer transition-all duration-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleServiceClick(service.id);
                                    }}
                                >
                                    <Link href={service.hreflink} className="flex-1">
                                        {service.title}
                                    </Link>
                                    {service.content.services.length > 1 && (
                                        <Icon 
                                            icon="mdi:chevron-right" 
                                            width="20" 
                                            height="20" 
                                            className={`transition-transform duration-200 ${activeService === service.id ? 'rotate-90' : ''}`}
                                        />
                                    )}
                                </div>
                                
                                {service.content.services.length > 1 && (
                                    <div className={`overflow-hidden transition-all duration-300 ${activeService === service.id ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="bg-black/20 px-2 py-2">
                                            {service.content.services.map((subService, index) => (
                                                <Link
                                                    key={index}
                                                    href={subService.link}
                                                    className="block py-2 px-4 text-sm text-gray-200 hover:text-white hover:bg-[#004aad]/50 rounded transition-all duration-200"
                                                >
                                                    {subService.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    item.submenu?.map((subItem, index) => (
                        <Link
                            key={index}
                            href={subItem.href}
                            className="block py-2 text-midnight_text hover:bg-primary hover:text-white bg-white ps-3"
                        >
                            {subItem.label}
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default MobileHeaderLink;
