import React from "react";
import { FaPlay } from "react-icons/fa"; // Assuming you're using react-icons

export default function PlayButton() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg">
        <FaPlay className="text-3xl text-black" />
      </div>
      {/* Circular shadow */}
      <div className="absolute inset-0 w-full h-full rounded-full border-[8px] border-white opacity-10 animate-pulse"></div>
    </div>
  );
}
