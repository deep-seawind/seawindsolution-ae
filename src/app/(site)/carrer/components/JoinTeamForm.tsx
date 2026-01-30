import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Container from "@/components/common/Container";

export default function JoinTeamForm() {
  return (
    <div className="relative py-10 w-full flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#eafbfb] z-0" />

      <Container maxWidth="xl" className="relative z-10 space-y-14">
        <div>
          <span className=" text-14 bg-prim text-white py-1 rounded-xl font-chakrapetch capitalize ps-5 pe-3">
            Join The Team
          </span>
          <h2 className="w-full mt-4 font-chakrapetch text-2xl md:text-3xl lg:text-[35px] capitalize font-semibold leading-snug md:w-4/5">
            Join our dynamic team to embark on a journey of exponential growth. Simply complete the form, and we&apos;ll be sure to reach out to you promptly.
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl w-full flex flex-col md:flex-row overflow-hidden min-h-[550px]">
          <div className="w-full md:w-2/5 bg-[#004aad] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-40 md:w-48 h-40 md:h-48 bg-white opacity-20 rounded-full" />
            <div className="absolute bottom-10 right-8 w-16 md:w-20 h-16 md:h-20 bg-white opacity-20 rounded-full" />

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-teal-100 text-sm mb-10 md:mb-12">
                We&apos;ll create high-quality linkable content and build at least 40 high-authority.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <FiPhone className="w-5 h-5 md:w-6 md:h-6 mt-1 text-teal-100" />
                  <p className="text-sm md:text-base">+971506787900</p>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                  <FiMail className="w-5 h-5 md:w-6 md:h-6 text-teal-100" />
                  <p className="text-sm md:text-base">info@seawindsolution.ae</p>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                  <FiMapPin className="w-5 h-5 md:w-6 md:h-6 text-teal-100" />
                  <p className="text-sm md:text-base">New York, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 p-8 md:p-14 bg-white">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="relative">
                  <label className="text-xs text-gray-400 absolute -top-3 left-0">Your Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full border-b border-gray-300 py-2 text-gray-800 font-medium focus:outline-none focus:border-[#004aad]" />
                </div>

                <div className="relative">
                  <label className="text-xs text-gray-400 absolute -top-3 left-0">Your Email</label>
                  <input type="email" placeholder="Enter your email" className="w-full border-b border-gray-300 py-2 text-gray-800 font-medium focus:outline-none focus:border-[#004aad]" />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs text-gray-400 absolute -top-3 left-0">Phone Number</label>
                <input type="tel" placeholder="Enter phone number" className="w-full border-b border-gray-300 py-2 text-gray-800 font-medium focus:outline-none focus:border-[#004aad]" />
              </div>

              <div className="relative">
                <label className="text-xs text-gray-400 absolute -top-3 left-0">Upload Resume</label>
                <input type="file" accept=".pdf,.doc,.docx" className="w-full border-b border-gray-300 py-2 text-gray-800 font-medium focus:outline-none focus:border-[#004aad] file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-[#004aad] file:text-white hover:file:bg-[#003a8a]" />
              </div>

              <div className="relative">
                <label className="text-xs text-gray-400 absolute -top-3 left-0">Message</label>
                <textarea placeholder="Write here your message" className="w-full border-b border-gray-300 py-2 text-gray-500 focus:outline-none focus:border-[#004aad] resize-none h-24" />
              </div>

              <div className="pt-2">
                <button type="submit" className="bg-[#004aad] hover:bg-[#003a8a] text-white px-8 py-3 rounded-lg font-medium shadow-md transition-all duration-200 w-full sm:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
