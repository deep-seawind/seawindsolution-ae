"use client";
import Container from "@/components/common/Container";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-10">
      <Container className=" space-y-14">
        <div className="projects-content text-center mb-10">
          <span className=" text-14 bg-[#004aad] text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
            Contact us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side Contact Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/contact/contact-bg.avif')",
                }}
              />

              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-[#004aad]/80" />

              {/* Content */}
              <div className="relative text-white p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FiPhone className="text-xl" />
                  </div>
                  <p className="text-3xl font-semibold">Let&apos;s get in touch</p>
                </div>

                <p>Discover Seawind solutions FZ-LLC</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="relative bg-[#F6F6F8] rounded-2xl p-8 border border-gray-200 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/contact/mail.webp')",
                }}
              />
              <div className="absolute inset-0 bg-[#111828]/80" />

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white p-3 rounded-xl border border-gray-300">
                    <FiMessageSquare className="text-xl text-gray-700" />
                  </div>
                  <p className="text-2xl font-semibold text-white">
                    Chat With Our Team
                  </p>
                </div>

                <h3 className="text-lg font-normal text-white tracking-wide flex items-center gap-2 mb-3">
                  <FiPhone className="text-white" />+ 97150678790
                </h3>

                <h3 className="text-lg font-normal text-white mb-6 flex items-center gap-2">
                  <FiMail className="text-white" />
                  info@seawindsolution.ae
                </h3>

                <button className="w-full bg-white py-3 rounded-xl text-[#004aad] font-semibold hover:bg-gray-100 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message Here..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-gray-900"
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-medium hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HomeContact;
