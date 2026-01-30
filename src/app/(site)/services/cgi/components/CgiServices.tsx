import Container from "@/components/common/Container";
import Image from "next/image";

export default function CGIServices() {
  const services = [
    {
      img: "/images/services/icon-1.png",
      title: "Product Visualization",
      desc: "Bring your products to life with detailed 3D modeling and animations.",
    },
    {
      img: "/images/services/icon-2.gif",
      title: "Custom Animation",
      desc: "From characters to brand storytelling, we animate it all with precision.",
    },
    {
      img: "/images/services/icon-3.png",
      title: "Visual Effects (VFX)",
      desc: "Add a cinematic touch with special effects that make your videos unforgettable.",
    },
    {
      img: "/images/services/icon-4.png",
      title: "Architectural Walkthroughs",
      desc: "Create immersive, lifelike tours for real estate and construction projects.",
    },
    {
      img: "/images/services/icon-5.png",
      title: "Explainer Videos",
      desc: "Break down complex concepts into engaging, easy-to-understand visuals.",
    },
  ];

  return (
    <section className="py-10 bg-[#f4fbff] px-4 sm:px-6 lg:px-0">
      <Container>
        <div className="projects-content text-center">
          <h2 className="mt-4 font-chakrapetch text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our CGI Video Services
          </h2>

          <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            We offer customized CGI solutions to match your unique needs:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-7">
        {services.map((service, index) => (
  <div
    key={index}
    className="flex gap-4 w-full sm:w-[48%] lg:w-[30%] 
    bg-white/50 p-4 border border-gray-300 rounded-md 
    hover:shadow-md transition-shadow duration-300"
  >
    {/* Image wrapper */}
    <figure className="relative w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0">
      <Image
        src={service.img}
        alt={service.title}
        fill
        className="object-contain"
        sizes="80px"
      />
    </figure>

    <div className="flex-1">
      <h3 className="text-lg md:text-xl font-semibold text-[#1daeed]">
        {service.title}
      </h3>
      <p className="text-gray-700 text-sm md:text-base mt-1 leading-relaxed">
        {service.desc}
      </p>
    </div>
  </div>
))}

        </div>
      </Container>
    </section>
  );
}
