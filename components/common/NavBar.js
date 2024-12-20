"use client";

import React, { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 text-black bg-white">
      <div className="flex items-center gap-x-3">
        <Image
          src={logo}
          alt="30 Mighty Men Ministries Logo"
          width={25}
          height={25}
        />
        <div>30 Mighty Men Ministries</div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <ul
        className={`absolute top-16 right-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:static md:flex md:flex-row md:space-x-4 md:space-y-0 md:p-0 md:shadow-none transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
