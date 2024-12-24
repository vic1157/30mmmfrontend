import React from "react";
import Copywright from "./Copywright";
import HelpAndSupportLinks from "./HelpAndSupportLinks";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 border-top">
      <hr className=" justify-center items-center w-[80%] border-[#E3E7ED] border-1 mb-[8vh]" />
      <div className="w-[80%]">
        <HelpAndSupportLinks />
        {/* social buttons components */}
        <SocialButtons />
        {/* copywright */}
        <Copywright />
      </div>
    </div>
  );
}

// help buttons components
