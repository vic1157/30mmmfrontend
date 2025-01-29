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
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/95 backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between p-4 mx-10 text-black">
        {/* Left section: Logo and Text */}
        <div className="flex-1">
          <Link href="/">
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
        </div>

        {/* Center section: Navigation Links */}
        <div className="flex flex-row items-center gap-6">
          <Link href="/about" className="transition-colors hover:text-gray-600">
            About
          </Link>
          <Link
            href="/founders-bio"
            className="transition-colors hover:text-gray-600"
          >
            Founder&apos;s Bio
          </Link>
        </div>

        {/* Right section: Buttons */}
        <div className="flex flex-row items-center justify-end flex-1 gap-2">
          {renderButtons()}
        </div>
      </div>
    </nav>
  );
}
