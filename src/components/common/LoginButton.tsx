"use client";

import React from "react";
import Link from "next/link";

const LoginButton: React.FC = () => {
  return (
    <Link href="/login">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Login
      </button>
    </Link>
  );
};

export default LoginButton;