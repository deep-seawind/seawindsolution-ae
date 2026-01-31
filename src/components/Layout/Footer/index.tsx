import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react"; 
import { MdEmail } from "react-icons/md";
import Logo from "../Header/Logo";
import Container from "@/components/common/Container";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#004aad] py-10  text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent"></div>
      </div>

      <Container className=" relative z-10">
        {/* Main Footer Content */}
        <div className="pt-10 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo />
              </div>

              <h1 className="text-2xl font-chakrapetch font-bold mb-4">
                Let&apos;s Build Something Great Together
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We are a leading technology company providing innovative
                solutions for businesses worldwide. Our expertise spans web
                development, mobile apps, and digital transformation.
              </p>

              <div className="flex items-center gap-2 text-white">
                <MdEmail className="text-base" />
                <a
                  href="mailto:info@seawindsolution.ae"
                  className="text-base  hover:underline"
                >
                  info@seawindsolution.ae
                </a>
              </div>

              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt className="text-base" />
                <a
                  href="mailto:info@seawindsolution.ae"
                  className="text-base  hover:underline"
                >
                  +971506787900
                </a>
              </div>

              <div className="flex space-x-4 mt-5">
                <Link
                  href="https://facebook.com"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Icon icon="fe:facebook" className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Icon icon="fa6-brands:twitter" className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Icon icon="fa6-brands:linkedin" className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Icon icon="fa6-brands:instagram" className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Client
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/protfolio"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Web Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Domain Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    SSL Certificate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Cloud ERP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Visitor Management
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Hosting Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    VPS Hosting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Web Hosting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/protfolio"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Dedicated Server
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Shared Web Hosting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Reseller Web Hosting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm">
                Reach out to our team and we&apos;ll get back to you within a day.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-2">
              © 2025 All rights reserved. Website Designed & Developed by
              <span className="flex items-center gap-2 font-medium text-white">
                Seawind Solution FZ-LLC
               <Image
              src="/images/logo/favicon.ico"
              alt="Seawind Solution logo"
              width={20}
              height={20}
              className="animate-spin"
            />

              </span>
            </p>

            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
