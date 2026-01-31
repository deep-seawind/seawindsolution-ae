import { blogs } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import React from "react";
import { Metadata } from "next";
import { Icon } from "@iconify/react";

import blog1 from "@/../public/images/blog/service-1.webp";
import blog2 from "@/../public/images/blog/service-2.webp";
import blog3 from "@/../public/images/blog/service-3.webp";

import blog01 from "@/../public/images/blogdetails/blog-1.webp";
import blog02 from "@/../public/images/blogdetails/blog-2.webp";

/* ---------- Metadata ---------- */

export const metadata: Metadata = {
  title: "Blog Details | Axora",
};

/* ---------- Recent Posts ---------- */

const recentPosts = [
  {
    image: blog1,
    title: "Entrepreneur Mindset: Habits That Drive Success",
    date: "01 Oct, 2025",
  },
  {
    image: blog2,
    title: "Innovative Strategies for Business Growth",
    date: "15 Oct, 2025",
  },
  {
    image: blog3,
    title: "Leadership Lessons for Modern Entrepreneurs",
    date: "22 Oct, 2025",
  },
  {
    image: blog1,
    title: "Entrepreneur Mindset: Habits That Drive Success",
    date: "01 Oct, 2025",
  },
  {
    image: blog2,
    title: "Innovative Strategies for Business Growth",
    date: "15 Oct, 2025",
  },
  {
    image: blog3,
    title: "Leadership Lessons for Modern Entrepreneurs",
    date: "22 Oct, 2025",
  },
];

/* ---------- Page ---------- */

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog Details" },
  ];

  return (
    <>
      <HeroSub
        title="Blog Details"
        description=""
        breadcrumbLinks={breadcrumbLinks}
        heroImage="/images/hero/banner-image.avif"
      />

      <section className="py-15">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex flex-col lg:flex-row gap-5">
          {/* LEFT */}
          <div className="lg:w-[60%] w-full">
            <div className="bg-white p-5 rounded-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <h4 className="font-unbounded font-medium uppercase text-3xl py-5">
                {blog.title}
              </h4>

              <p className="pb-4 text-pera-dark text-16 leading-6">
                In today’s competitive landscape, businesses must continuously
                adapt and innovate to thrive.
              </p>

              <div className="border border-border rounded-lg p-5 bg-dark/20">
                <Icon icon="tabler:quote" width={60} height={60} className="mb-3" />
                <h5 className="text-black font-semibold leading-8">
                  The true entrepreneur is a doer, not a dreamer.
                </h5>
                <span className="block text-end font-semibold">
                  – Kevin Hooks
                </span>
              </div>

              <div className="flex gap-3 py-8">
                <Image
                  src={blog01}
                  alt="blog"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src={blog02}
                  alt="blog"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <ul className="grid grid-cols-2 gap-5">
                {[
                  "Embrace Innovation",
                  "Scalable Systems",
                  "Customer-Centric Approach",
                  "Resilience",
                  "Effective Leadership",
                  "Continuous Learning",
                  "Operational Efficiency",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Icon
                      icon="material-symbols:check-rounded"
                      width={24}
                      height={24}
                      className="bg-prim text-white rounded-full p-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-[40%] w-full lg:sticky top-20 space-y-5 py-5">
            <div className="border shadow-lg bg-white p-5 rounded-xl">
              <h4 className="pb-5">Recent Posts</h4>
              {recentPosts.map((post, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={250}
                    height={100}
                    className="rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{post.title}</h4>
                    <span className="uppercase text-pera-dark">
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
