import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";

const row1 = [
  {
    name: "JavaScript",
    src: "/images/technology/javascript-original.svg",
  },
  {
    name: "React",
     src: "/images/technology/react-original.svg",
  },
  {
    name: "Angular",
    src: "/images/technology/angularjs-original.svg",
  },
  {
    name: "PHP",
    src: "/images/technology/php-original.svg",
  },
  {
    name: "Python",
    src: "/images/technology/python-original.svg",
  },
  {
    name: "Laravel",
   src: "/images/technology/Laravel.svg",
  },
  {
    name: "Django",
    src: "/images/technology/django-plain.svg",
  },
];

// const row2 = [
//   {
//     name: "SQL",
//     src: "/images/technology/sq.png"
//   },
//   {
//     name: "MongoDB",
//     src: "/images/technology/mongodb-original.svg",
//   },
//   {
//     name: "PostgreSQL",
//    src: "/images/technology/postgresql-original.svg",
//   },
//   {
//     name: "MySQL",
//      src: "/images/technology/mysql-original.svg",
//   },
//   {
//     name: "Redshift",
//    src: "/images/technology/vitess-icon-color.svg",
//   },
//   {
//     name: "AWS",
//     src: "/images/technology/aws.svg",
//   },
//   {
//     name: "Redshift",
//     src: "/images/technology/redsift.svg",
//   },
// ];

const TechCard = ({ logo }: { logo: { name: string; src: string } }) => (
  <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md mx-4">
    <div className="relative h-16 w-16">
      <Image src={logo.src} alt={logo.name} fill className="object-contain" />
    </div>
  </div>
);

export default function WebTechnologySlider() {
  return (
    <section className="bg-white py-10">
      <Container className="mb-12 text-center">
        <span className="text-14 bg-[#004aad] text-white font-normal py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
          Technology
        </span>
        <h2 className="w-full font-chakrapetch lg:text-35 mt-2 text-center text-black capitalize font-semibold">
          Our Technologies
        </h2>
   <p className="text-gray-500 font-normal mt-4 ">We leverage the latest technologies and tools to develop websites that meet the highest standards of performance, security, and scalability. Our key technologies include:</p>
      </Container>
      <div className="relative w-full max-w-[100vw] overflow-hidden">
        <div className="mb-8 flex w-max animate-scroll-left">
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <TechCard key={`row1-${index}`} logo={tech} />
          ))}
        </div>
        {/* <div className="flex w-max animate-scroll-right">
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <TechCard key={`row2-${index}`} logo={tech} />
          ))}
        </div> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}
