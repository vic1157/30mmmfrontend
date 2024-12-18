import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 text-black bg-white">
      <div className="flex flex-row gap-x-3">
        <Image
          src={logo}
          alt="30 Mighty Men Ministries Logo"
          width={25}
          height={25}
        />
        <div>30 Mighty Men Ministries</div>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/foundation">Foundation</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
