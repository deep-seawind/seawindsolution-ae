import { blogs } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/common/SharedComponents/HeroSub";
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
];

/* ---------- Page ---------- */

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ REQUIRED IN NEXT 15

  const blog = blogs.find((b) => b.slug === slug);

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
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-5">
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

              <h4 className="text-3xl py-5">{blog.title}</h4>

              <div className="border rounded-lg p-5 bg-gray-100">
                <Icon icon="tabler:quote" width={50} height={50} />
                <p className="mt-2">
                  Innovation is the catalyst that transforms ideas into reality.
                </p>
              </div>

              <div className="flex gap-3 py-8">
                <Image src={blog01} alt="blog" className="rounded-lg" />
                <Image src={blog02} alt="blog" className="rounded-lg" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-[40%] w-full lg:sticky top-20 space-y-5">
            <div className="bg-white shadow-lg p-5 rounded-xl">
              <h4 className="pb-5">Recent Posts</h4>
              {recentPosts.map((post, i) => (
                <div key={i} className="flex gap-3 mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={120}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h5>{post.title}</h5>
                    <span>{post.date}</span>
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
