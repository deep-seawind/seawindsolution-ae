import Container from "@/components/common/Container";
import Image from "next/image";

const AiAbout = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Section */}
          <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] xl:h-[550px]">
            <Image
              src="/images/services/ai-about.webp"
              alt="Human working with AI robot"
              fill
              className="object-cover rounded-[2rem] shadow-sm"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl w-[120px] font-chakrapetch capitalize ps-5 pe-3">
              About Us
            </span>

            <h2 className="mt-4 font-chakrapetch text-2xl md:text-3xl lg:text-35 font-semibold mb-5 leading-tight">
              About Seawind Solution
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                Seawind Solution FZ-LLC is an AI agency in UAE, committed to
                delivering top-tier AI business solutions tailored to your
                needs. With a strong presence in Dubai and RAK, we have
                established ourselves as a trusted AI development company,
                helping businesses leverage artificial intelligence for
                sustainable growth. Our team of AI experts specializes in
                designing, developing, and deploying AI-powered services that
                transform operations and enhance efficiency.
              </p>

              <p>
                We take pride in offering AI automation services in the UAE,
                ensuring that businesses across industries benefit from
                intelligent automation and data-driven insights. From
                AI-powered customer support solutions to advanced analytics,
                we help businesses integrate artificial intelligence seamlessly
                into their workflows.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AiAbout;
