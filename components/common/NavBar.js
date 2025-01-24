"use client";

import React, { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Function to determine buttons to render based on the current path
  const renderButtons = () => {
    if (pathname === "/") {
      return (
        <>
          <Link href="/Pricing">
            <button className="px-4 py-2 bg-white border-2 rounded text-primary-red border-primary-red hover:bg-gray-100 focus:outline-none">
              Start Your Journey
            </button>
          </Link>
        </>
      );
    } else if (pathname === "/Pricing") {
      return <></>;
    }
    // Default case for other pages
    return (
      <>
        {" "}
        <Link href="/LogIn">
          <button className="px-4 py-2 bg-white border-2 rounded text-primary-red border-primary-red hover:bg-gray-100 focus:outline-none">
            Log In
          </button>
        </Link>
        <Link href="/SignUp">
          <button className="px-4 py-2 text-white rounded bg-primary-red hover:bg-red-800 focus:outline-none">
            Sign Up
          </button>
        </Link>
      </>
    );
  };

  return (
    <nav className="flex flex-row justify-between p-4 mx-10 text-black bg-white">
      {/* Left side: Logo and Text */}
      <Link href='/'>
        <div className="flex flex-row items-center gap-2">
          <Image
            src={logo}
            alt="30 Mighty Men Ministries Logo"
            width={35}
            height={25}
          />
          <div>30 Mighty Men Ministries</div>
        </div>
      </Link>

      {/* Right side: Buttons */}
      <div className="flex flex-row items-center gap-2">{renderButtons()}</div>
    </nav>
  );
}
