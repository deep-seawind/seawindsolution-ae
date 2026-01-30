import React from "react";
import { Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import Image from "next/image";

export default function ElevatingSection() {
  return (
    <div className="py-10 bg-light font-sans flex flex-col items-center">
      <Container className="space-y-14">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="mt-4 font-chakrapetch text-3xl md:text-4xl lg:text-5xl font-semibold">
              Seawind Solution: Elevating Your Digital Presence
            </h1>

            <p className="text-lg text-pera-dark leading-relaxed tracking-wide">
              In a digital landscape where innovation is key and client
              satisfaction is paramount, Seawind Solution stands out as a beacon
              of excellence. Our commitment to understanding and fulfilling our
              clients needs is unwavering, driving us to implement innovative
              methods and advanced technology to ensure a smoother and faster
              system for their businesses.
              <br />
              <br />
              We go beyond traditional service delivery by providing scalable
              digital solutions, future-ready strategies, and
              performance-focused development processes that help businesses
              thrive in a competitive market. With a team of experienced
              professionals, we continuously adapt to evolving technologies,
              ensuring our clients stay ahead of industry trends and achieve
              sustainable growth.
            </p>

            <button className="group relative inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full text-black font-semibold shadow-md hover:shadow-lg transition-all border border-purple-100">
              Start Now
              <Sparkles className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          <div className="flex-1 w-full lg:w-1/2">
            <Image
              src="/images/about/whychooseus.jpg"
              alt="SEO Dashboard UI"
              width={1200}
              height={600}
              className="w-full h-1/2 object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
