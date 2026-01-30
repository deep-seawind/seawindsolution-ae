import React from "react";
import { RotateCw } from "lucide-react";

export default function HireDevelopersForm() {
  return (
    <div
      className="
        py-10 flex items-center justify-center 
        bg-white p-4 bg-cover bg-center bg-no-repeat 
        relative
        before:absolute before:inset-0 before:bg-white/70 before:z-0
      "
      style={{
        backgroundImage: "url('/images/hire/contactbg.avif')",
      }}
    >
      {/* Main Card Container */}
      <div className="items-center max-w-3xl justify-between rounded-xl bg-white p-8 shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-gray-100 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-chakrapetch font-bold text-gray-800">
            Looking To <span className="text-[#004aad]">Hire Developers</span>
          </h1>
          <p className="mt-4 text-gray-500 leading-relaxed text-[15px]">
            We&apos;re thrilled you&apos;re considering our expertise for your
            team. Fill out the form below, detailing your project requirements
            and the specific skills you&apos;re seeking.
          </p>
        </div>

        <form className="space-y-8">
          {/* Section 1: About Yourself */}
          <div>
            <h2 className="mb-4 text-xl font-chakrapetch font-bold text-gray-800">
              1. Tell us,{" "}
              <span className="text-[#004aad] font-chakrapetch">
                about yourself
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#004aad] focus:outline-none focus:ring-1 focus:ring-[#004aad]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#004aad] focus:outline-none focus:ring-1 focus:ring-[#004aad]"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="w-full md:w-1/2">
              <div className="relative flex items-center">
                <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3 pr-2 border-r border-gray-300">
                  <svg className="h-4 w-6 rounded-sm" viewBox="0 0 640 480">
                    <path fill="#f93" d="M0 0h640v160H0z" />
                    <path fill="#fff" d="M0 160h640v160H0z" />
                    <path fill="#138808" d="M0 320h640v160H0z" />
                    <circle cx="320" cy="240" r="60" fill="#000080" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    +91
                  </span>
                  <span className="ml-1 text-gray-400 text-xs">▼</span>
                </div>

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-lg border border-gray-300 pl-24 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#004aad] focus:outline-none focus:ring-1 focus:ring-[#004aad]"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="mb-2 text-xl font-chakrapetch font-bold text-gray-800">
              2. What are you{" "}
              <span className="text-[#004aad]">looking for?</span>
            </h2>
            <textarea
              rows={5}
              placeholder="Enter your message... (Optional)"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#004aad] focus:outline-none focus:ring-1 focus:ring-[#004aad] resize-none"
            />
          </div>

          {/* reCAPTCHA Mock */}
          <div className="inline-flex items-center rounded-sm border border-gray-300 bg-[#f9f9f9] px-3 py-2 shadow-sm min-w-[300px]">
            <div className="flex items-center gap-3">
              <div className="relative flex h-7 w-7 items-center justify-center rounded border-2 border-gray-300 bg-white" />
              <span className="text-sm font-medium text-gray-700">
                I&apos;m not a robot
              </span>
            </div>

            <div className="ml-auto flex flex-col items-center">
              <RotateCw className="h-5 w-5 text-[#004aad] mb-1" />
              <span className="text-[9px] text-gray-500">reCAPTCHA</span>
              <div className="text-[8px] text-gray-400 mt-0.5">
                <span className="hover:underline cursor-pointer">Privacy</span>{" "}
                - <span className="hover:underline cursor-pointer">Terms</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="rounded-full bg-[#004aad] px-10 py-2.5 text-base font-semibold text-white focus:ring-2 focus:ring-[#004aad]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
