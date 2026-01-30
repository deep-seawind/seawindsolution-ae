'use client';
import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import Container from '../Container';

const DomainRequired = () => {
  const [currency, setCurrency] = useState('AED');
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  const tlds = [".ae", ".com", ".net", ".co"];

  return (
    <>
      <HeroSub 
        title="Domain Required" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
                 heroImage="/images/hero/banner-image.avif"
      />

      <div
        className="bg-[#004aad] bg-cover bg-no-repeat py-14 text-slate-800 border border-[#004aad]"
        style={{ backgroundImage: `url("/images/hero/domain-bg.avif")` }}
      >
        <Container>

          {/* Top Header Bar */}
          <div className="relative w-full h-auto sm:h-24 rounded-t-2xl p-[2px] shadow-xl">
            <div className="w-full h-full bg-[#004aad] rounded-t-2xl flex items-center justify-center p-4 sm:p-0">
              <h1 className='text-xl sm:text-2xl text-white font-chakrapetch text-center'>
                Your default currency is set to AED. All items must be in the same currency.
              </h1>
            </div>
          </div>

          {/* Main Header */}
          <div className="text-center mt-12 mb-14 px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl font-chakrapetch font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-[#004aad]">
              Domain Required
            </h1>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              To proceed with hosting or infrastructure services, you need a domain. Choose one of the options below:
            </p>
          </div>

          {/* Option 1 */}
          <div className="relative p-[2px] mb-10 rounded-3xl">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#95c3ff] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition">
              <h2 className="text-[#004aad] text-lg sm:text-xl font-bold mb-2">1. Search or Transfer Domain</h2>
              <p className="text-slate-500 mb-6 sm:mb-10 text-sm sm:text-base">
                Register a new domain or transfer an existing one to us.
              </p>

              <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#2da7c7]/20 to-[#004aad]/30">
                <div className="bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] rounded-2xl p-6 sm:p-10 flex flex-col items-center">

                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md border border-slate-200 focus-within:border-[#004aad] focus-within:ring-2 focus-within:ring-[#004aad]/30 overflow-hidden p-1.5 transition gap-2">
                      <input
                        type="text"
                        placeholder="search your domain"
                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-slate-600 outline-none text-sm sm:text-lg bg-transparent placeholder-slate-400"
                      />

                      <div className="relative w-full sm:w-auto">
                        <select className="w-full sm:w-20 appearance-none rounded-xl bg-gray-100 px-4 py-2 pr-8 text-xs font-medium">
                          {tlds.map((tld) => <option key={tld}>{tld}</option>)}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                      </div>

                      <button className="bg-gradient-to-r from-[#004aad] to-[#004aad] hover:scale-105 transition-all p-3 sm:p-4 rounded-xl shadow-md ring-1 ring-[#004aad]/30">
                        <Search className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Currency Toggle */}
                  <div className="flex flex-wrap justify-center bg-[#e2e8f0] p-1 rounded-full mt-6 sm:mt-10 shadow-inner ring-1 ring-slate-300 gap-2">
                    {["AED", "USD"].map((cur) => (
                      <button
                        key={cur}
                        onClick={() => setCurrency(cur)}
                        className={`flex items-center px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                          currency === cur
                            ? "bg-gradient-to-r from-[#004aad] to-[#004aad] text-white shadow-lg ring-1 ring-white/40"
                            : "text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        <span className="mr-2 opacity-70">{cur === "AED" ? "#" : "$"}</span> {cur}
                      </button>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="relative p-[2px] rounded-3xl">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#95c3ff] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition">
              <h2 className="text-[#004aad] text-lg sm:text-xl font-bold mb-2">2. Use My Existing Domain</h2>
              <p className="text-slate-500 mb-4 sm:mb-8 text-sm sm:text-base">
                I already have a domain and want to update nameservers.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <input
                  type="text"
                  placeholder="Enter your domain (e.g., example.com)"
                  className="w-full border border-slate-300 rounded-xl p-3 sm:p-4 outline-none focus:border-[#004aad] focus:ring-2 focus:ring-[#004aad]/30 transition text-sm sm:text-base"
                />
                <button className="w-full bg-gradient-to-r from-[#004aad] to-[#004aad] hover:scale-[1.02] text-white font-bold py-3 sm:py-4 rounded-2xl transition-all shadow-lg ring-1 ring-white/40 text-sm sm:text-base">
                  Use This Domain
                </button>
              </div>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
};

export default DomainRequired;
