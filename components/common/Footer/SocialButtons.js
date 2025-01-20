import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-5 mt-[2vh]">
      <FBButton />
      <YTButton />
    </div>
  );
}

function FBButton() {
  return (
    <div className="text-[#7D899D] bg-[#ECEEF1] rounded-full p-3 items-center justify-center">
      <Link href="https://www.facebook.com/30mmministries" target="_blank">
        <FaFacebookF />
      </Link>
    </div>
  );
}

function YTButton() {
  return (
    <div className="text-[#7D899D] bg-[#ECEEF1] rounded-full p-3 items-center justify-center">
      <Link href="https://www.youtube.com/@ThirtyMightyMen" target="_blank">
        <FaYoutube />
      </Link>
    </div>
  );
}

// icon color: background: #7D899D;
// circle color: #ECEEF1
