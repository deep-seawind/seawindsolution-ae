// Single Next.js + Tailwind Component (One File Only)
// File: components/ProcessSection.jsx

export default function ProcessSection() {
  return (
    <section
      className="bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/images/services/process-bg.avif")' }}
    >
      <div className="py-12 px-4 md:px-6 lg:px-10">
        {/* Header */}
              <div className="projects-content text-center mb-12">
              <span className="text-14 bg-gradient-to-r from-[#004aad] to-[#0077ff] text-white py-1 rounded-xl font-chakrapetch px-6 shadow-lg">
               TOP MACHINE LEARNING DEVELOPMENT COMPANY
              </span>

              <h2 className="mt-4 font-chakrapetch lg:text-35 font-extrabold tracking-wide text-white">
               A Step-by-Step Development Process
              </h2>

              <p className="mt-6 text-gray-200 text-sm md:text-base max-w-[800px] mx-auto">
               We are the foremost AI/ML development company in India that offers end-to-end solutions concentrating on clients’ needs, concerns, and target audiences. We prioritize transparency and keep our clients updated throughout the development process to ensure they feel satisfied and get personalized outcomes that align perfectly with their business model. Here is a step-by-step process of our artificial intelligence development services:
              </p>
            </div>

        {/* Steps Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((num, i) => (
            <div key={i} className="relative bg-cyan-400/20 rounded-xl p-6 text-center shadow-xl">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-white">
                0{num}
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                {num === 1 && 'Requirement Analysis'}
                {num === 2 && 'Data Collection & Processing'}
                {num === 3 && 'Model Development & Training'}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {num === 1 &&
                  'In the first stage, we consult with clients to understand their business needs and challenges and create strategies.'}
                {num === 2 &&
                  'We collect relevant data from different sources and process data for model training.'}
                {num === 3 &&
                  'Now, we identify the right AI/ML algorithms and train models to use datasets for automation.'}
              </p>

              <span className="w-1 h-6 bg-orange-400 absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-md"></span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex justify-center my-12">
          <div className="w-3/4 border border-gray-600"></div>
        </div>

        {/* Steps Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[4, 5, 6].map((num, i) => (
            <div key={i} className="relative bg-cyan-400/20 rounded-xl p-6 text-center shadow-xl">
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-white">
                {num}
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {num === 4 && 'Testing & Validation'}
                {num === 5 && 'Deployment & Integration'}
                {num === 6 && 'Monitoring & Continuous Improvement'}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {num === 4 &&
                  'To ensure the high accuracy of the model and performance, we test it and optimize it if required.'}
                {num === 5 &&
                  'At this moment, we integrate AI models into business applications that streamline operations.'}
                {num === 6 &&
                  'At the last stage, we track real-time performance and adjust accordingly if required for long-term success.'}
              </p>

              <span className="w-1 h-6 bg-orange-400 absolute -top-7 left-1/2 -translate-x-1/2 rounded-md"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
