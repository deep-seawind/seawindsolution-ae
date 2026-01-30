// import { text } from "stream/consumers";
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaBullhorn,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";


export type Service = {
  id: number;

  description: string;
  icon: string;

};
// solution
export const solutionData = [
  {
    title: "AI Powered Web Design",
    icon: <MdOutlineDesignServices />,
    description:
      "Smart design breeds online reliability for businesses.You can receive services in the following categories of AI Powered Web Design:",
    points: [
      { text: "Responsive Design" },
      { text: "PSD to HTML" },
      { text: "Responsive Web Design" },
      { text: "E-Commerce Solutions" },
      { text: "Graphic and Logo Design" },
    ],
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    description:
      "We are developing a wide range of websites for various industries.You can receive services in the following categories of Web Development:",
    points: [
      { text: "CMS Development Company" },
      { text: "Website Maintenance" },
      { text: "Magento Development" },
      { text: "E-commerce Market Place" },
      { text: "Codeigniter Development" },
      { text: "AMP Development" },
    ],
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description:
      "Elevate your online presence with a unique approach to digital marketing.You can receive services in the following categories of Digital Marketing:",
    points: [
      { text: "Search Engine Optimization" },
      { text: "Content Marketing" },
      { text: "Pay-Per-Click (PPC) Advertising" },
      { text: "Social Media Marketing" },
      { text: "Branding Solutions" },
      { text: "Digital Ad Campaigns" },
    ],
  },
  {
    title: "Mobile Application Development",
    icon: <HiOutlineDeviceMobile />,
    description:
      "You can receive services in the following categories of Mobile Application Development:",
    points: [
      { text: "iPhone Application Development" },
      { text: "Android Application Development" },
      { text: "Windows Application Development" },
      { text: "Windows Application Development" },
      { text: "Windows Application Development" },
    ],
  },
  {
    title: "VPS Hosting",
    icon: <BsDatabaseFillCheck />,
    description:
      "Leading VPS Hosting Services Company with Incredible Support.You can receive services in the following categories of VPS Hosting:",
    points: [
      { text: "Windows Managed VPS" },
      { text: "Windows SSD Hosting" },
      { text: "Cloud Managed VPS" },
      { text: "Linux Managed VPS" },
      { text: "Linux SSD Hosting" },
    ],
  },
  {
    title: "Web Hosting",
    icon: <FaServer />,
    description:
      "Solid hardware, free features, US-managed backups, 1-click install.You can receive services in the following categories of Web Hosting:",
    points: [
      { text: "Shared Web Hosting" },
      { text: "Shared Cloud Hosting" },
      { text: "Reseller Web Hosting" },
      { text: "Reseller Cloud Hosting" },
      { text: "Managed WordPress Hosting" },
    ],
  },
  {
    title: "Dedicated Server",
    icon: <GiServerRack />,
    description:
      "Establish trust and online security for your website visitors and business.You can receive services in the following categories of Dedicated Server:",
    points: [
      { text: "Linux Dedicated Server" },
      { text: "Windows Dedicated Server" },
      { text: "Managed SWS Cloud Server" },
      { text: "Managed SWS Cloud Server" },
      { text: "Managed SWS Cloud Server" },
    ],
  },
];

// companies

export const companies = [
  {
    image: "/images/companies/brand-1.webp",
  },
  {
    image: "/images/companies/brand-2.webp",
  },
  {
    image: "/images/companies/brand-3.webp",
  },
  {
    image: "/images/companies/brand-4.webp",
  },
  {
    image: "/images/companies/brand-5.webp",
  },
  {
    image: "/images/companies/brand-2.webp",
  },
  {
    image: "/images/companies/brand-4.webp",
  },
];

// Project

export const projects = [
  {
    category: "e-commerce platform",
    title: "Fashion Fusion",
    description: [
      {
        text: "Fashion Fusion is an online e-commerce platform dedicated to women’s fashion and lifestyle products. The store offers a wide range of clothing, including sarees, kurtis, gowns, dresses, and party wear sets. Their collection combines traditional Indian outfits with contemporary styles, creating a modern fusion look. Fashion Fusion focuses on high-quality fabrics and meticulous craftsmanship to ensure elegance and comfort. The website provides user-friendly navigation with clearly categorized sections, making shopping simple and enjoyable.",
      },
      {
        text: "Customers enjoy services like free shipping across India, easy returns, and secure online payments. The brand aims to make trendy fashion accessible and affordable without compromising on quality. Each collection is curated to cater to women’s diverse tastes, occasions, and lifestyles, while also emphasizing the creation of a confident and stylish persona. Overall, Fashion Fusion is a modern, customer-focused digital fashion store that blends style, convenience, and quality for everyday and special occasions.",
      },
    ],
    image: "/images/projects/project-01.jpg",
    link: "/about",
  },
  {
    category: "Restaurant",
    title: "Yummy Dosa",
     description: [
      {
        text: "Yummy Dosa is a vegetarian restaurant brand offering “Mumbai Street Style” cuisine, featuring mainly dosas along with Indo-Chinese, pasta, sizzlers, and other dishes. The restaurant started in Mumbai in 1993 as a ready-to-make dosa batter business and later expanded into full-fledged restaurant outlets. Today, it offers over 99 varieties of dosas—the largest in its region—such as Zini Dosa, Matka Dosa, and Cheese Burst Pizza Dosa. In 2017, Yummy Dosa opened its first international outlet in Dubai, marking its expansion beyond India.",
      },
      {
        text: "The website showcases their extensive menu, highlights their commitment to fresh, hygienic food prepared on order, and introduces trained chefs and event catering options. It also provides information for potential franchisees and offers contact details for customers and business inquiries. Yummy Dosa aims to bring authentic Mumbai street-style vegetarian food, including innovative fusion dishes, to diners both in India and abroad, serving as a complete online presence for the brand, its outlets, and its offerings.",
      },
    ],
    image: "/images/projects/project-02.jpg",
    link: "/about",
  },
  {
    category: "Growth",
    title: "Jhalak Jewels",
   description: [
      {
        text: "Jhalak Jewels is a jewellery retailer that sells products both online and through a physical store. Their catalogue includes rings, bracelets, earrings, necklaces, bangles, and pendant rings, offering both traditional and contemporary designs to suit different tastes and occasions. The brand emphasizes that jewellery is not just an accessory but an expression of individuality, style, and special moments. Customer service and satisfaction are a priority, aiming to make the shopping experience as delightful as the jewellery itself. They provide a wide variety of jewellery for women, men, and children, ensuring there is something for everyone.",
      },
      {
        text: "The website also features a blog with articles on jewellery tips, care, and trends, along with contact information including phone and email for customer support. Jhalak Jewels positions its collections as “timeless elegance combined with contemporary design,” blending classic and modern styles. Whether for gifting or personal use, the brand offers variety, style, and convenience through online shopping, making it a versatile option for jewellery lovers.   ",
      },
    ],
    image: "/images/projects/project-03.jpg",
    link: "/about",
  },
  {
    category: "E-commerce",
    title: "All Sale",
   description: [
      {
        text: "All Sale is a general-purpose online marketplace serving buyers and sellers across New Zealand. It allows individuals and businesses to list a wide variety of products and services, including real estate, cars, electronics, fashion, jobs, pets, and more. Sellers can register and list items without paying any listing fees or commissions, while buyers and sellers connect directly through the platform. Transactions, including payments and delivery, are handled between the buyer and seller. The platform also offers extra services like QR-code payments for in-store purchases when sellers have a physical store.",
      },
      {
        text: "All Sale focuses on accessibility and convenience for small or local NZ-based businesses and individuals looking to sell goods or services. It covers a broad range of categories—from property, vehicles, and electronics to home decor, fashion, pets, and jobs—and aims to be a “one-stop” marketplace for various needs. The site accommodates both everyday household items and specialized listings such as commercial vehicles or business services. According to its mission, All Sale seeks to support and promote local businesses by providing a free and easy way for them to sell their products.   ",
      },
    ],
    image: "/images/projects/project-04.jpg",
    link: "/about",
  },
];

// Testimonials

export const testimonial = [
  {
    id: 1,
    text: "The company is a perfect partner for anyone who is looking for a recognized web presence. The expert team of web developers at Seawind skillfully transforms a rough idea into a polished reality.",
    name: "Ralph Edwards",
    position: "Co. Founder",
    image: "/images/testimonials/user.jpg",
  },
  {
    id: 2,
    text: "Seawind Solution is a highly trusted partner and offers quality work to its client. They are cost-effective and timely in all their undertakings. Being its client, I am impressed by the quality standard they maintain in their website development services.",
    name: "Guy Hawkins",
    position: "Co. Founder",
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    text: "Seawind Solution team was a pleasure to work with over the course of our website development and I highly recommend them to anyone who wishes to hire web developers for their projects. Their team is extremely detail‑oriented and finds the most effective and efficient way to complete your project, while always keeping you informed on the progress along the way.",
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/user3.jpg",
  },
  {
    id: 4,
    text: "We would like to thank the entire Seawind Solution team for a seamless and efficient experience for the updates to our Salesforce platform. As a manager in a small business, it is critical to work with a provider that understands my needs and can deliver the solutions requested in a timely manner.",
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/user3.jpg",
  },
   {
    id: 5,
    text: "The team adapted extremely well to the business needs and model for the project. The overall development was of good quality and delivered in a timely fashion. Seawind Solution has a personable team that instills trust in their process and capabilities.",
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/user3.jpg",
  },
   {
    id: 6,
    text: "First of fall a Big Thank you to Mr. Vijaybhai Shah for there continuous support and guidance for our project. Special thanks to our teammates. Mr. Jeet Mr. Yogesh Mr. Ronak For understanding our project our vision from each and every depth despite of lot of misunderstanding, miscommunications and tiffs. We are glad that we can finally work in much easier and faster way then before with the help of your technology and your technical knowledge",
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/user3.jpg",
  },
   {
    id: 7,
    text: "Experience with Seawind Solution, Creatives have been just incredible from the start. Their team is organized, forward‑thinking, helpful, and flexible. They continually stay ahead of marketing industry trends and suggest tactics on how to keep our company's marketing at the forefront. We couldn't do what we do without their support.",
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/user3.jpg",
  },
   {
    id: 8,
    text: "Seawind Solution was integral in helping us redefine our brand and have helped mentor us through the process. They work hard with their business development team to maximize our marketing and secure the best ROI. Their team really challenges us to be forward thinking and to keep our strategy fresh. I'm pretty sure they know our market and our targets better than we do sometimes!",
    name: "Devon Lane",
    position: "Co. Founder",
    image: "/images/testimonials/user3.jpg",
  },
   
];

// Footer Links
export const footerLinks: { link: string }[] = [
  {
    link: "Customer Experience",
  },
  {
    link: "Training Programs",
  },
  {
    link: "Business Strategy",
  },
  {
    link: "Training Program",
  },
  {
    link: "ESG Consulting",
  },
  {
    link: "Development Hub",
  },
  {
    link: "Contact us",
  },
  {
    link: "Team Member",
  },
  {
    link: "Recognitions",
  },
  {
    link: "Careers",
  },
  {
    link: "News",
  },
  {
    link: "Feedback",
  },
  {
    link: "Privacy",
  },
  {
    link: "Security",
  },
  {
    link: "Disclaimer",
  },
];

// blogs

export const blogs = [
  {
    id: 1,
    slug: "harnessing-digital-transform",
    title: "Mobile App for Business in 2025: Why It's No Longer Optional",
    date: "25 Nov",
    image: "/images/blog/blog-1.avif",
    description:
      "In 2025, having a mobile app is very important for every business. Customers want fast service, easy access, and quick support - all from their phones. A mobile app helps",
  },
  {
    id: 2,
    slug: "mastering-change-management",
    title: " Why Every Business Needs a Digital Marketing Strategy in 2025",
    date: "20 Nov",
    image: "/images/blog/blog-2.jpg",
    description:
      "In 2025, a strong digital marketing strategy is no longer optional - it's essential. From SEO and social media to online branding, discover how Seawind Solution helps",
  },
  {
    id: 3,
    slug: "entrepreneur-mindset-success",
    title: "Top AI and ML Trends Reshaping the World in 2025s",
    date: "11 Nov",
    image: "/images/blog/blog-3.jpg",
    description:
      "AI and ML are driving innovation across industries in 2025. From generative AI and automation to ethical AI, healthcare, and edge computing, discover how these",
  },

   {
    id: 4,
    slug: "entrepreneur-mindset-success",
    title: "AI & ML Development, Consulting, and Enterprise Services",
    date: "11 Nov",
    image: "/images/blog/blog-4.jpg",
    description:
      "Seawind Solution delivers custom AI & ML development, consulting, and enterprise services that transform data into intelligence, automate workflows, and fuel business growth.",
  },


   {
    id: 5,
    slug: "entrepreneur-mindset-success",
    title: "The Future of Web Design in the UAE with AI | Abu Dhabi & Dubai",
    date: "11 Nov",
    image: "/images/blog/blog-5.jpg",
    description:
      "Discover how AI is revolutionizing web design across Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Fujairah with advanced personalization, SEO",
  },
];





export const services: Service[] = [
  {
    id: 1,
    description: "Experienced Developers with Agile Mindset",
    icon: "bxs:user-detail", 
  },
{
  id: 2,
  description: "IP Protection & Security",
  icon: "bxs:lock-alt",
},
  {
    id: 3,
    description: "Highly Skilled and Certified Developers",
    icon: "bxs:badge-check",
  },
  {
    id: 4,
    description: "Hybrid Model: On-Site & Offshore Support",
    icon: "bxs:buildings", 
  },
  {
    id: 5,
    description: "Complete Transparency & Control",
    icon: "bxs:show", 
  },
  {
    id: 6,
    description: "On-Demand DevOps and Project Management",
    icon: "bxs:objects-horizontal-right", 
  },
  {
    id: 7,
    description: "Ready-to-Use IT Infrastructure",
    icon: "bxs:server", 
  },
{
  id: 8,
  description: "Replacement Guarantee",
  icon: "bxs:check-circle",
}
];



export const protfolio = [
  {
    id: 1,
    category: "Business",
    title: "Event Management Platform",
    slug: "event-management-platform",
    image: "/images/protfolio/project-1.webp",
  },
  {
    id: 2,
    category: "Connect",
    title: "Digital Marketing Campaign",
    slug: "digital-marketing-campaign",
    image: "/images/protfolio/project-2.webp",
  },
  {
    id: 3,
    category: "Empower",
    title: "Interactive Learning Platform",
    slug: "interactive-learning-platform",
    image: "/images/protfolio/project-3.webp",
  },
  {
    id: 4,
    category: "Support",
    title: "Environmental Impact Dashboard",
    slug: "environmental-impact-dashboard",
    image: "/images/protfolio/project-4.webp",
  },
];

export const team = [
  {
    id: 1,
    name: "Eade Marren",
    post: "Chief Executive",
    image: "/images/team/team-1.webp",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    post: "Operations Head",
    image: "/images/team/team-2.webp",
  },
  {
    id: 3,
    name: "Kristin Watson",
    post: "Marketing Lead",
    image: "/images/team/team-3.webp",
  },
  {
    id: 4,
    name: "Darlene Robertson",
    post: "Business Director",
    image: "/images/team/team-4.webp",
  },
  {
    id: 5,
    name: "Eade Marren",
    post: "Chief Executive",
    image: "/images/team/team-5.webp",
  },
  {
    id: 6,
    name: "Darlene Robertson",
    post: "Business Director",
    image: "/images/team/team-7.webp",
  },
  {
    id: 7,
    name: "Kristin Watson",
    post: "Marketing Lead",
    image: "/images/team/team-6.webp",
  },
  {
    id: 8,
    name: "Savannah Nguyen",
    post: "Operations Head",
    image: "/images/team/team-8.webp",
  },
];
