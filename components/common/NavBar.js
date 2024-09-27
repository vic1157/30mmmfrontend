import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-black flex items-center justify-between">
      <Image src={logo} alt="30 Mighty Men Ministries Logo" width={50} height={50} />
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
