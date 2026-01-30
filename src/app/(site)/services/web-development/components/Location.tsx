import React from 'react';

const locations = [
  "Abu Dhabi", "Umm Al Quwain", "Ajman", "Fujairah",
  "Ras Al Khaimah", "Sharjah", "Dubai"
];

export default function Location() {
  return (
    <section className=" bg-white py-10 px-4 flex flex-col items-center justify-center font-sans">
      
      {/* Header Text */}
      <h1 className="text-center text-2xl md:text-2xl font-medium text-slate-800 mb-14 max-w-4xl leading-relaxed">
      Seawind Solution FZ-LLC is your trusted partner for tailored solutions, ensuring your business thrives wherever you are.
      </h1>

      {/* Grid Container - Flex wrap handles the 4-on-top, 3-on-bottom layout naturally */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1400px]">
        {locations.map((city, index) => (
          <div
            key={index}
            className="group relative w-full sm:w-[280px] h-[100px] bg-white 
                       flex items-center justify-center 
                       shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                       transition-all duration-300 ease-out
                       cursor-pointer
                       hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                       rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px]
                       border border-transparent hover:border-blue-100"
          >
            {/* Hover Gradient Overlay (Subtle) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit] bg-gradient-to-br from-blue-50/50 to-purple-50/50 pointer-events-none" />

            {/* Text */}
            <span className="relative z-10 text-lg font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              {city}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
