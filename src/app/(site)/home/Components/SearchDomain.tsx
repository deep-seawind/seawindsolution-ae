"use client";
import React from "react";
import {
  Search,
  Lock,
  CheckCircle2,
  Zap,
  ArrowRight,
  Eye,
  ChevronDown,
} from "lucide-react";
import Container from "@/components/common/Container";

const SearchDomain = () => {
  const [selectedCurrency, setSelectedCurrency] = React.useState("AED");

  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "24/7", label: "Managed Support" },
  ];

  const tlds = [".ae", ".com", ".net", ".co"];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/hero/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative z-10 flex min-h-screen flex-col justify-center gap-14 px-4 py-28 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:py-32">
        {/* LEFT CONTENT */}
        <div className="w-full space-y-7 text-white lg:w-1/2">
          <h1 className="font-chakrapetch text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
            Build Your Digital Future Today
          </h1>

          <p className="max-w-xl text-base text-gray-200 sm:text-lg">
            Transform your business with cutting-edge web solutions, innovative
            design, and powerful technology.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <button className="flex items-center gap-2 rounded-full bg-[#004aad] px-7 py-3 font-bold shadow-xl sm:px-8 sm:py-4">
              Get Started <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-2 border-b-2 border-white/70 pb-1 font-bold transition hover:border-sky-400 hover:text-sky-400">
              <Eye size={18} /> View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-3 sm:gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="flex items-center gap-1 text-xl font-bold text-sky-400 sm:text-2xl">
                  <CheckCircle2 size={20} /> {value}
                </div>
                <p className="text-xs text-gray-300 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-xl lg:w-1/2">
          <div className="rounded-[42px] border-2 bg-gradient-to-r from-sky-400 to-[#004aad] p-[2px]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-[40px] bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Lock size={16} className="text-[#004aad]" />
                  Secure Domain Registration
                </div>

                {/* Search Row */}
                <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-transparent focus-within:ring-[#004aad] sm:flex-row sm:items-center">
                  <input
                    placeholder="Search your domain name"
                    className="w-full flex-grow rounded-xl px-4 py-3 text-sm text-gray-600 outline-none"
                  />

                  <div className="relative w-full sm:w-24">
                    <select className="w-full appearance-none rounded-xl bg-gray-100 px-4 py-2 pr-8 text-xs font-medium outline-none">
                      {tlds.map((tld) => (
                        <option key={tld}>{tld}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                  </div>

                  <button className="flex items-center justify-center rounded-xl bg-[#004aad] p-3 text-white transition hover:opacity-90">
                    <Search size={22} />
                  </button>
                </div>

                {/* Currency Toggle */}
                <div className="flex rounded-full bg-gray-200/60 p-1">
                  {["AED", "USD"].map((currency) => (
                    <button
                      key={currency}
                      type="button"
                      onClick={() => setSelectedCurrency(currency)}
                      className={`rounded-full px-5 py-1.5 text-sm font-bold transition ${
                        selectedCurrency === currency
                          ? "bg-[#004aad] text-white shadow"
                          : "text-gray-600 hover:text-slate-800"
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={14} className="text-[#004aad]" />
                    AED Support
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1">
                    <Zap size={14} className="text-[#004aad] fill-[#004aad]" />
                    Instant Setup
                  </span>
                </div>

                <p className="text-xs italic text-slate-500">
                  Fast and reliable domain search results
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SearchDomain;
