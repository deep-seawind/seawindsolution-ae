import { HeaderItem } from "@/type/menu";

export const headerData: HeaderItem[] = [
    { label: "Home", href: "/" },
    {
        label: "The Firm",
        href: "/about",
        submenu: [
            { label: "About Us", href: "/about" },
            { label: "Why Choose us", href: "/about/whychoos-us" },
            { label: "Testimonials", href: "/about/testimonials" },
            // { label: "Contact", href: "/contact" }
        ]
    },

    {
        label: "Services",
        href: "/services",
        submenu: [
            { label: "Digital Marketing", href: "/services/digital-marketing" },
            { label: "Mobile Application Development", href: "/services/mobile-application-development" },
            { label: "VPS Hosting", href: "/services/vps-hosting" },
            { label: "Web Hosting", href: "/services/web-hosting" },
            { label: "Dedicated Server", href: "/services/dedicated-server" },
            { label: "Web Products", href: "/services/web-products" },
            { label: "Domain Registration", href: "/services/domain-registration" },
            { label: "SSL Certificate", href: "/services/ssl-certificate" },
            { label: "Cloud ERP", href: "/services/cloud-erp" },
            { label: "Visitor Management", href: "/services/visitor-management" },
            { label: "WhatsApp Chatbot", href: "/services/whatsapp-chatbot" },
            { label: "CDN (Content Delivery Network)", href: "/services/cdn" },
            { label: "Start Your IT Business", href: "/services/start-your-it-business" },
            { label: "GSuite (Google Workspace)", href: "/services/gsuite" }
        ]
    },
    {
        label: "Offshore Staffing",
        href: "/Hire-developer",
      
    },
    {
        label: "Portfolio",
        href: "/protfolio",
     
    },

    {
        label: "Careers",
        href: "/carrer",
  
    },
    {
        label: "Blog",
        href: "/blog",
    
    },
    { label: "Contact Us", href: "/contact" },
]