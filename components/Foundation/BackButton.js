import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function BackButton() {
  return (
    <div className="bg-[#7D899D1A] p-3 rounded-xl w-12 h-12 flex justify-center items-center max-xs:h-6 max-xs:w-6 max-sm:h-8 max-sm:w-8">
      <Link href="/">
        <AiOutlineArrowLeft
          size={20}
          color="#717171"
          className="max-sm:h-4 max-sm:w-4"
        />
      </Link>
    </div>
  );
}
