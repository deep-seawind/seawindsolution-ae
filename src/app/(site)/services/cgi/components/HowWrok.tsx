import Container from "@/components/common/Container";
import React from "react";

const HowWork = () => {
  const options = [
    {
      id: "01",
      title: "Discovery & Concept Development",
      text: "We begin by understanding your goals, vision, and target audience. Through in-depth consultations, we define the project scope, gather your ideas, and develop a creative concept that aligns with your objectives.",
      number: "1",
      color: "bg-[#5b0e9e]",
      position: "left",
    },
    {
      id: "02",
      title: "Storyboarding & Visualization",
      text: "Next, we create detailed storyboards and visual mockups to map out the flow of your animation. This step ensures you have a clear picture of how your project will unfold and provides an opportunity for feedback before production begins.",
      number: "2",
      color: "bg-[#1d64f2]",
      position: "right",
    },
    {
      id: "03",
      title: "Design & Modeling",
      text: "Our talented team designs and develops custom 3D models, environments, and characters based on your project requirements. We pay attention to every detail, ensuring the assets are visually stunning and in line with your vision.",
      number: "3",
      color: "bg-[#10b981]",
      position: "left",
    },
    {
      id: "04",
      title: "Animation & CGI Rendering",
      text: "Using the latest animation techniques and cutting-edge CGI technology, we bring your designs to life. From smooth character movements to realistic simulations, we focus on creating immersive.",
      number: "4",
      color: "bg-[#f97316]",
      position: "right",
    },
    {
      id: "05",
      title: "Review & Refinement",
      text: "Your feedback is key to our process. We share drafts of the animation with you and refine the details until you’re completely satisfied with the final product.",
      number: "5",
      color: "bg-[#f43f5e]",
      position: "left",
    },
    {
      id: "06",
      title: "Delivery & Support",
      text: "Once the animation is complete, we deliver it in your preferred format and resolution. We also provide ongoing support to ensure your animation is effectively implemented and achieves its desired impact.",
      number: "6",
      color: "bg-[#fbbf24]",
      position: "right",
    },
  ];

  return (
    <Container className="py-10 px-4 md:px-6 lg:px-10">
      <div className="projects-content text-center">
        <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch capitalize px-3 md:px-5">
          Why Choose
        </span>

        <h2 className="mt-4 font-chakrapetch text-2xl md:text-3xl lg:text-4xl font-semibold">
          Why Choose Seawind Solution FZ-LLC for CGI?
        </h2>

        <p className="mt-6 text-gray-600 text-sm md:text-[16px] mx-auto max-w-3xl">
          Your success is our priority. provides CGI services in Dubai, that not
          only look incredible but also help drive your business goals. Our
          visuals are crafted to capture your audience&apos;s attention and leave a
          lasting impression. From numerous CGI service providers in Dubai,
          here&apos;s what sets us apart, and why you should work with us:
        </p>
      </div>

      <div className="flex justify-center items-center mt-12 md:mt-20 mb-10">
        <div className="relative w-full max-w-6xl">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-dashed border-gray-400 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 md:gap-x-20 relative z-10">
            {options.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                  item.position === "right"
                    ? "md:col-start-2 md:flex-row"
                    : "md:col-start-1 md:flex-row-reverse"
                }`}
              >
                {/* Line Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded-full border-4 border-gray-400 z-20"></div>

                {/* Arrow line */}
                <div
                  className={`w-3 h-16 md:h-14 ${item.color} ${
                    item.position === "left"
                      ? "rounded-l-full mr-[-8px] md:mr-[-10px]"
                      : "rounded-r-full ml-[-8px] md:ml-[-10px]"
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`flex-1 bg-white py-5 px-6 md:py-6 md:px-8 shadow-md flex flex-col justify-center z-10 ${
                    item.position === "left"
                      ? "rounded-l-3xl rounded-r-none text-right"
                      : "rounded-r-3xl rounded-l-none text-left"
                  }`}
                >
                  <h3 className="text-gray-800 font-bold text-base md:text-lg uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Diamond Arrow */}
                <div className="relative z-20 flex items-center">
                  <div
                    className={`w-5 h-5 md:w-6 md:h-6 transform rotate-45 ${item.color} ${
                      item.position === "left" ? "-ml-2 md:-ml-4" : "-mr-2 md:-mr-4"
                    }`}
                  ></div>
                </div>

                {/* Number Circle */}
                <div
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${item.color} text-white flex items-center justify-center text-2xl md:text-4xl shadow-lg z-30 shrink-0 ${
                    item.position === "left" ? "-ml-3 md:-ml-4" : "-mr-3 md:-mr-4"
                  }`}
                >
                  {item.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowWork;
