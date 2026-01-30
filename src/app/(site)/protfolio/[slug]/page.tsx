"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { protfolio } from "@/app/api/data";
import protfolio1 from "@/../public/images/protfoliodetails/project-gallery-1.webp";
import protfolio2 from "@/../public/images/protfoliodetails/project-gallery-2.webp";
import protfolio3 from "@/../public/images/protfoliodetails/project-gallery-3.webp"; 
import Container from "@/components/common/Container";

type Props = {
    params: Promise<{ slug: string }>;
};

const projectData = [
    { label: "Clients", value: "Innovate Interiors Group" },
    { label: "Budget", value: "$100M USD" },
    { label: "Location", value: "Maplewood Heights, CA" },
    { label: "Sector", value: "Corporate Business" },
    { label: "Complete date", value: "Jul 20, 2025" },
];

const ProtfolioDetails = ({ params }: Props) => {
    // ✅ unwrap params Promise (Next.js 15+)
    const { slug } = React.use(params);

    const item = protfolio.find((p) => p.slug === slug);
    if (!item) return notFound();

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/protfolio", text: "Protfolio Details" },
    ];

    return (
        <>
              <HeroSub 
                title=" Details" 
                description="" 
                breadcrumbLinks={breadcrumbLinks} 
                      heroImage="/images/hero/banner-image.avif"
            />

            <section className="py-15">
                <Container className=" px-4 flex flex-col lg:flex-row gap-5">
                    {/* Left Section */}
                    <div className="lg:w-[60%] w-full">
                        <div className="bg-white p-5 rounded-2xl space-y-6">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={400}
                                className="w-full h-[400px] object-cover rounded-2xl"
                            />

                            <h4 className="font-unbounded font-medium uppercase text-3xl">
                                {item.title}
                            </h4>

                            <p className="pb-4 text-pera-dark text-16 leading-6">
                                This project highlights our expertise in creating visually appealing, high-performing, and user-friendly solutions. From concept to completion, we focused on achieving excellence through strategy, creativity, and technology.
                            </p>

                            <h4 className="font-unbounded font-medium text-3xl">
                                Project Overview
                            </h4>
                            <p className="pb-4 text-pera-dark text-16 leading-6">
                                In today’s dynamic market, a strong and consistent brand identity is key to standing out and driving growth and a growing business in the Bexon, recognized the need to evolve its brand to better resonate with an expanding audience and adapt to shifting market trends.
                            </p>

                            <h4 className="font-unbounded font-medium text-3xl">
                                Project Gallery
                            </h4>

                            <p>
                                Our Rebranding Strategy for transformed their entire brand identity, from a fresh new logo to an updated visual design that resonates with their growing audience.
                            </p>

                            <Image src={protfolio1} alt="profolio-gallery-image" className="rounded-lg" />
                            <div className="flex gap-6">
                                <Image src={protfolio2} alt="profolio-gallery-image" className="rounded-xl" />
                                <Image src={protfolio3} alt="profolio-gallery-image" className="rounded-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-[40%] w-full lg:self-start lg:sticky top-20 space-y-5 py-5">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <h4 className="text-black pb-5 font-semibold">Project Info</h4>
                            <div className="space-y-6">
                                {projectData.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="bg-[#007C7C] text-white w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                                            <Icon icon="mdi:account-star" width="22" height="22" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600">{item.label}</p>
                                            <p className="text-base font-semibold text-gray-900">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                            <h4 className="text-black pb-5 font-semibold">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Design", "Branding", "UI/UX", "Development", "Creative", "Marketing"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="border border-border px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ProtfolioDetails;
