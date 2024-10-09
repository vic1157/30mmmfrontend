import React from "react";
import Link from "next/link";

export default function HelpAndSupportLinks() {
  return (
    <div className="flex flex-row items-center justify-between w-full text-[#677489]">
      <Link href="/Home">Home</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/Help">Help & Support</Link>
      <Link href="/Terms">Terms of Service</Link>
    </div>
  );
}
