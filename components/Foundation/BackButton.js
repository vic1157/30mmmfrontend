import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function BackButton() {
  return (
    <div className="bg-[#7D899D1A] p-3 rounded-xl w-12 h-12 flex justify-center items-center">
      <Link href="/">
        <AiOutlineArrowLeft size={20} color="#717171" />
      </Link>
    </div>
  );
}
