"use client";
import React from "react"; 
import HeroSub from "@/components/common/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Container from "@/components/common/Container";

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <>
      <HeroSub 
        title="Contact" 
        description="" 
        breadcrumbLinks={breadcrumbLinks} 
              heroImage="/images/hero/banner-image.avif"
      />

      {/* CONTACT BOX SECTION */}
      <div className="bg-light overflow-hidden py-12 md:py-16 xl:py-20 bg-prim-light">
        <Container className=" space-y-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Location */}
            <div className="contact-item bg-white shadow-xl space-y-6 p-6 rounded-xl border group hover:bg-prim transition duration-500 flex flex-col justify-between text-center h-auto md:h-[230px]">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident group-hover:rotate-y-360 transition-transform duration-500">
                <Icon
                  icon="tdesign:location"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div>
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-lg pb-3">
                  Our Location
                </h4>
                <p className="text-pera-dark group-hover:text-white transition-colors duration-500 text-sm md:text-base">
                  FOB50431 Compass Building, Al Shohada Road, AL Hamra Industrial
                  Zone-FZ, Ras Al Khaimah, United Arab Emirates
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item bg-white shadow-xl space-y-6 p-6 rounded-xl border group hover:bg-prim transition duration-500 flex flex-col justify-between text-center h-auto md:h-[230px]">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident group-hover:rotate-y-360 transition-transform duration-500">
                <Icon
                  icon="ic:outline-email"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div>
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-lg pb-3">
                  Email us
                </h4>
                <p className="text-pera-dark group-hover:text-white transition-colors duration-500 text-sm md:text-base">
                  winfo@seawindsolution.ae
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item bg-white shadow-xl space-y-6 p-6 rounded-xl border group hover:bg-prim transition duration-500 flex flex-col justify-between text-center h-auto md:h-[230px]">
              <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident group-hover:rotate-y-360 transition-transform duration-500">
                <Icon
                  icon="mi:call"
                  width="30"
                  height="30"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>
              <div>
                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-lg pb-3">
                  Call us
                </h4>
                <p className="text-pera-dark group-hover:text-white transition-colors duration-500 text-sm md:text-base">
                  +971506787900
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* FORM + MAP SECTION */}
      <div className="bg-light overflow-hidden py-12 md:py-10 bg-prim-light">
        <Container className=" space-y-14">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* FORM */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 font-unbounded">
                Get Your Free Quote
              </h2>

              <form className="grid md:grid-cols-2 gap-6">
                {/* Inputs */}
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Full Name *</label>
                  <input type="text" placeholder="Enter your name" className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2" required />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">Email Address *</label>
                  <input type="email" placeholder="Enter your email" className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2" required />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">Mobile Number *</label>
                  <input type="tel" placeholder="Enter your phone" className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2" required />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">Interested Service *</label>
                  <select className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2 bg-transparent" required>
                    <option>Choose an option</option>
                    <option>Digital Marketing</option>
                    <option>Support</option>
                    <option>Career</option>
                    <option>Website Development</option>
                    <option>Services</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-gray-600 font-medium mb-2">Brief About Project</label>
                  <textarea rows={4} placeholder="Write your message..." className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2 resize-none" required></textarea>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3 mt-5">
                    <input type="checkbox" id="agreement" className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded" required />
                    <label htmlFor="agreement" className="text-gray-700 text-sm cursor-pointer">
                      I agree that by clicking on &quot;Submit&quot;, I am explicitly soliciting a call, message &amp; mail from Seawind Solution FZ-LLC or its associates.
                    </label>
                  </div>
                </div>

                {/* Button */}
                <button type="submit" className="text-white bg-dark h-[50px] text-sm lg:text-base rounded-full font-semibold flex gap-2 px-4 py-2 items-center tracking-wider group mt-4">
                  Send a Message
                  <Icon icon="tabler:arrow-right" width="24" height="24" className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300" />
                </button>
              </form>
            </div>

            {/* MAP */}
            <div className="w-full lg:w-1/2 h-[350px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4518.299631275424!2d72.5044351260081!3d23.023223716302528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3af1ef736b%3A0xc2a836096144b6f9!2sMondeal%20Heights%2C%20Ramdev%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380015!5e1!3m2!1sen!2sin!4v1764848342253!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
