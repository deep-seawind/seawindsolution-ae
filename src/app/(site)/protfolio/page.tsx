"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import Container from "@/components/common/Container";
import { FaSearch } from "react-icons/fa";

const Page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/protfolio", text: "Portfolio" },
    ];

    // Dummy portfolio images for auto-scroll
    const portfolioImages = [
        "/images/protfolio/project-1.webp",
        "/images/protfolio/project-2.webp", 
        "/images/protfolio/project-3.webp",
        "/images/protfolio/project-4.webp",
        "/images/projects/project-01.jpg",
        "/images/projects/project-02.jpg",
        "/images/projects/project-03.jpg",
        "/images/projects/project-04.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
        }, 3000); // Auto-scroll every 3 seconds

        return () => clearInterval(interval);
    }, [portfolioImages.length]);

    return (
        <>
            <HeroSub 
                title="Portfolio" 
                description="" 
                breadcrumbLinks={breadcrumbLinks} 
                     heroImage="/images/hero/banner-image.avif"
            />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-10">
                <Container className="px-4">
                    
                    {/* Hero Section */}
                    <div className="text-center ">
                        <h1 className="text-3xl font-chakrapetch">
                         Our Creative Portfolio
                        </h1>
                        <p className="text-xl text-gray-600  mt-6 leading-relaxed">
                            Discover our stunning collection of innovative projects that showcase our expertise and creativity
                        </p>
                    </div>

                    {/* Featured Project Carousel */}
                    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl  mt-10 shadow-2xl">
                        <div 
                            className="flex transition-transform duration-1000 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {portfolioImages.map((image, index) => (
                                <div key={index} className="min-w-full h-full relative group">
                                    <Image
                                        src={image}
                                        alt={`Portfolio ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-12 left-12 text-white max-w-lg">
                                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                          
                                        </span>
                                        <h3 className="text-3xl font-bold mb-3">
                                            Amazing Project {index + 1}
                                        </h3>
                                        <p className="text-lg text-gray-200 mb-6">
                                            Innovative solution crafted with cutting-edge technology and creative design
                                        </p>
                                        <button className="bg-[#004aad] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                            View Details 
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Enhanced Navigation */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                            {portfolioImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? "bg-white scale-125 shadow-lg" 
                                            : "bg-white/50 hover:bg-white/80"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                  

                    {/* Enhanced Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {portfolioImages.map((image, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={`Portfolio ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                        
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="text-center text-white">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                                    <FaSearch />
                                                </div>
                                                <p className="font-semibold">View Project</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Project Info */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1  rounded-full text-sm font-medium">
                                                {['Web Design', 'Mobile App', 'Branding', 'E-commerce'][index % 4]}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2  transition-colors">
                                            Creative Project {index + 1}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Innovative solution designed with modern technology and user-centric approach
                                        </p>
                                        
                                        {/* Tech Stack */}
                                        <div className="flex gap-2 mt-4">
                                            {['React', 'Node.js', 'MongoDB'].map((tech, techIdx) => (
                                                <span key={techIdx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Container>
            </div>
        </>
    );
};

export default Page;