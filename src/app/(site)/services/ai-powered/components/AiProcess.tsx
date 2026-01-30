import Container from "@/components/common/Container";
import React from "react";

const AiProcess = () => {
  const options = [
    {
      id: "01",
      title: "Consultation & Requirement Analysis",
      text: "Understanding your business needs and goals.",
      number: "1",
      color: "bg-[#004aad]",
      position: "left",
    },
    {
      id: "02",
      title: "Strategy & Planning",
      text: "Developing a customized AI solution roadmap.",
      number: "2",
      color: "bg-[#004aad]",
      position: "right",
    },
    {
      id: "03",
      title: "Development & Integration",
      text: "Building and implementing AI-powered services.",
      number: "3",
      color: "bg-[#004aad]",
      position: "left",
    },
    {
      id: "04",
      title: "Testing & Optimization",
      text: "Ensuring optimal performance and efficiency.",
      number: "4",
      color: "bg-[#004aad]",
      position: "right",
    },
    {
      id: "05",
      title: "Deployment & Training",
      text: "Launching the solution and training your team.",
      number: "5",
      color: "bg-[#004aad]",
      position: "left",
    },
    {
      id: "06",
      title: "Ongoing Support & Improvement",
      text: "Continuous monitoring and enhancements.",
      number: "6",
      color: "bg-[#004aad]",
      position: "right",
    },
  ];

  return (
    <Container className="py-10 px-4 md:px-6 lg:px-10">
      <div className="projects-content text-center">
        <span className="text-14 bg-[#004aad] text-white py-1 rounded-xl font-chakrapetch capitalize px-3 md:px-5">
          Process
        </span>

        <h2 className="mt-4 font-chakrapetch text-2xl md:text-3xl lg:text-4xl font-semibold">
          Process
        </h2>

       
      </div>

      <div className="flex justify-center items-center mt-12 md:mt-20 mb-10">
        <div className="relative w-full max-w-6xl">
         
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
             
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded-full border-4 border-gray-400 z-20"></div>

               
                <div
                  className={`w-3 h-16 md:h-14 ${item.color} ${
                    item.position === "left"
                      ? "rounded-l-full mr-[-8px] md:mr-[-10px]"
                      : "rounded-r-full ml-[-8px] md:ml-[-10px]"
                  }`}
                ></div>

                
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

               
                <div className="relative z-20 flex items-center">
                  <div
                    className={`w-5 h-5 md:w-6 md:h-6 transform rotate-45 ${item.color} ${
                      item.position === "left" ? "-ml-2 md:-ml-4" : "-mr-2 md:-mr-4"
                    }`}
                  ></div>
                </div>

                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${item.color} text-white flex items-center justify-center text-2xl md:text-4xl shadow-lg z-30 shrink-0 ${
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

export default AiProcess;
