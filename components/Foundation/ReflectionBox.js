import React from "react";
import { PiLightningFill } from "react-icons/pi";

export default function ReflectionBox() {
  return (
    <div className="flex flex-row  bg-[#F5BD4F] bg-opacity-15 py-[2vh] px-[1vh] rounded-md">
      {/* icon */}
      <PiLightningFill size={60} color="#F5BD4F" />
      <div className="flex flex-col">
        <div className="text-2xl lg:text-3xl">Reflection:</div>
        <div className="text-xl font-extralight">
          What do you think you could achieve with sexual obedience that would
          be impossible to achieve without it?
        </div>
      </div>
    </div>
  );
}
