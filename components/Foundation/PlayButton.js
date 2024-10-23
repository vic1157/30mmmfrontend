import React from "react";
import { FaPlay } from "react-icons/fa"; // Assuming you're using react-icons

export default function PlayButton() {
  return (
    <div className="relative">
      <div className={styleButtonContainer}>
        <FaPlay className={styleIcon} />
      </div>
      {/* Circular shadow */}
      <div className={styleAnimation}></div>
    </div>
  );
}

const styleButtonContainer =
  "flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg max-xs:w-12 max-xs:h-12 max-sm:w-16 max-sm:h-16";

const styleIcon =
  "text-3xl text-black max-xs:w-5 max-xs:h-5 max-sm:w-8 max-sm:h-8";

const styleAnimation =
  "absolute inset-0 w-full h-full rounded-full border-[8px] border-white opacity-10 animate-pulse";
