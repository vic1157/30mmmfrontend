import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Quotes() {
  return (
    <div className="flex flex-row mt-[2vh]">
      <RiDoubleQuotesL size={60} color="#F5BD4F" />
      <RiDoubleQuotesR size={60} color="#F5BD4F" />
    </div>
  );
}
