import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function PreviousLessonButton() {
  return (
    <button className="flex items-center justify-center px-4 py-4 text-lg text-white transition bg-black border border-white rounded-full hover:bg-white">
      <FaArrowLeft />
      Previous Day
    </button>
  );
}
