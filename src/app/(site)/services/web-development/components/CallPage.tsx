import React from 'react';

export default function CallPage() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-gradient-to-r from-[#2c66b8] to-[#122549]">
      
      {/* Decorative Dots (Background Pattern) */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Radial overlay to fade dots in center (Optional polish for exact look) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c66b8] via-transparent to-[#122549] opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-chakrapetch font-medium text-white mb-4">
          Let’s Discuss About Your Project
        </h2>
        
        <p className="text-white text-base md:text-base mb-8 max-w-xl mx-auto opacity-90">
          A great web experience can boost your online presence and accelerate conversions from visitors to customers.
        </p>

        <button className="bg-white text-[#122549] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
          Schedule A Call!
        </button>
      </div>
    </section>
  );
}
