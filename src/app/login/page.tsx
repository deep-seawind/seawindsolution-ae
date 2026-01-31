"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  RotateCw,
  User,
  Phone,
} from "lucide-react";
import HeroSub from "@/components/common/SharedComponents/HeroSub/index";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isNotRobot, setIsNotRobot] = useState(false);


    const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/ai-ml", text: "Login" },
  ];
  return (
    <>
     <HeroSub title="About" description="" breadcrumbLinks={breadcrumbLinks} heroImage="/images/hero/banner-image.avif" />
    <div className=" bg-gray-50 flex items-center justify-center p-4 py-20">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row min-h-[550px]">
        
        {/* LEFT PANEL */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#004aad] to-[#004aad] flex-col items-center justify-center p-12 text-center text-white relative overflow-hidden">
          
          {/* Floating Orbs */}
          <div className="absolute w-40 h-40 bg-white/10 rounded-full -top-10 -left-10 animate-pulse" />
          <div className="absolute w-28 h-28 bg-white/10 rounded-full bottom-10 right-10 animate-pulse delay-200" />

          {!isSignUp ? (
            <>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">
                Welcome Back!
              </h2>
              <p className="text-white/90 text-lg mb-8 font-light leading-relaxed">
                Sign in to access your account and continue your journey.
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="bg-white text-[#004aad] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
              <p className="text-white/90 text-lg mb-8 font-light">
                Already registered? Sign in to continue.
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="bg-white text-[#004aad] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </h2>
            <p className="text-gray-500 text-sm">
              {isSignUp
                ? "Create a new account in seconds"
                : "Access your account securely"}
            </p>
          </div>

          <form className="space-y-5">
            {isSignUp ? (
              <>
                {/* First Name & Last Name - 2 Column Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    icon={<User size={18} />}
                    value={firstName}
                    onChange={setFirstName}
                    placeholder=" First Name"
                  />
                  <Input
                    icon={<User size={18} />}
                    value={lastName}
                    onChange={setLastName}
                    placeholder="Last Name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    icon={<Mail size={18} />}
                    value={email}
                    onChange={setEmail}
                    placeholder=" Email Address"
                    type="email"
                  />
                  <Input
                    icon={<Phone size={18} />}
                    value={mobileNumber}
                    onChange={setMobileNumber}
                    placeholder=" Mobile Number"
                    type="tel"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <PasswordInput
                    placeholder=" Password"
                    value={password}
                    setValue={setPassword}
                    show={showPassword}
                    setShow={setShowPassword}
                  />
                  <PasswordInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    show={showConfirmPassword}
                    setShow={setShowConfirmPassword}
                  />
                </div>
              </>
            ) : (
              <>
                <Input
                  icon={<Mail size={18} />}
                  value={email}
                  onChange={setEmail}
                  placeholder=" Email Address"
                  type="email"
                />
                <PasswordInput
                  placeholder="Enter Password"
                  value={password}
                  setValue={setPassword}
                  show={showPassword}
                  setShow={setShowPassword}
                />
              </>
            )}

            {/* CAPTCHA */}
            <div className="bg-gray-100 border rounded-lg p-3 flex justify-between items-center shadow-inner">
              <div
                onClick={() => setIsNotRobot(!isNotRobot)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-6 h-6 border rounded-sm bg-white flex items-center justify-center">
                  {isNotRobot && (
                    <div className="w-3 h-3 bg-[#004aad] rounded-sm" />
                  )}
                </div>
                <span className="text-sm text-gray-700">I&apos;m not a robot</span>
              </div>
              <RotateCw className="text-[#004aad] animate-spin-slow" />
            </div>

            <button className="w-full bg-gradient-to-r from-[#004aad] to-[#004aad] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-lg mt-6">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Back to Home Link */}
          <div className="text-center mt-6">
            <Link 
              href="/" 
              className="text-[#004aad] hover:underline text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

/* ---------- Reusable Inputs ---------- */

const Input = ({ icon, value, onChange, placeholder, type = "text" }: any) => (
  <div className="relative group">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#004aad] transition">
      {icon}
    </div>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-3 text-[12px] border rounded-lg focus:ring-2 focus:ring-[#004aad] transition"
    />
  </div>
);

const PasswordInput = ({ placeholder, value, setValue, show, setShow }: any) => (
  <div className="relative group">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[12px] group-focus-within:text-[#004aad] transition">
      <Lock size={18} />
    </div>
    <input
      type={show ? "text" : "password"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-10 py-3 border rounded-lg  text-[12px] focus:ring-2 focus:ring-[#004aad] transition"
    />
    <button
      type="button"
      onClick={() => setShow(!show)}
      className="absolute right-3 top-1/2  text-[12px] -translate-y-1/2 text-gray-400 hover:text-gray-700"
    >
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
);

export default LoginPage;