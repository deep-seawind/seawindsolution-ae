import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";

const Industrial = () => {
  const items = [
    {
      img: "/images/services/E-commerce.png",
      title: "E-Commerce Platforms",
    },
    {
      img: "/images/services/Corporate.png",
      title: "Corporate",
    },
    {
      img: "/images/services/Information-Technology.png",
      title: "Information Technology",
    },
    {
      img: "/images/services/Accounting-Auditing.png",
      title: "Accounting & Auditing",
    },
    {
      img: "/images/services/Travel-tourism.png",
      title: "Travel & Tourism",
    },
    {
      img: "/images/services/Government-Sector.png",
      title: "Government Sector",
    },
  ];
  return (
    <section className="py-10">
      <Container>
        <div className="projects-content text-center">
        <h2 className="mt-4 font-chakrapetch lg:text-4xl font-semibold">
       Industrial Experience
        </h2>
      </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
        {items.map((item, index) => (
            <div
              key={index}
              className="text-center border-2 border-[#9fe1ff] rounded-lg p-5 w-[180px] 
              hover:scale-105 transition-transform"
            >
              {/* Image wrapper */}
              <figure className="relative w-full h-20">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </figure>

              <h4 className="mt-2 text-lg font-medium">{item.title}</h4>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default Industrial;
