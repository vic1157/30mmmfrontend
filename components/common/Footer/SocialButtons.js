import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex flex-row gap-x-5 mt-[2vh]">
      <FBButton />
      <TwButton />
      <YTButton />
    </div>
  );
}

function FBButton() {
  return (
    <div className="text-[#7D899D] bg-[#ECEEF1] rounded-full p-3 items-center justify-center">
      <FaFacebookF />
    </div>
  );
}

function TwButton() {
  return (
    <div className="text-[#7D899D] bg-[#ECEEF1] rounded-full p-3 items-center justify-center">
      <FaTwitter />
    </div>
  );
}

function YTButton() {
  return (
    <div className="text-[#7D899D] bg-[#ECEEF1] rounded-full p-3 items-center justify-center">
      <FaYoutube />
    </div>
  );
}

// icon color: background: #7D899D;
// circle color: #ECEEF1
