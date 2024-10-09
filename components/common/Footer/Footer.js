import React from "react";
import Copywright from "./Copywright";
import HelpAndSupportLinks from "./HelpAndSupportLinks";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 border-top">
      <hr className="w-[95%] border-[#E3E7ED] border-1 mb-[8vh]" />
      {/* help buttons components */}
      <HelpAndSupportLinks />
      {/* social buttons components */}
      <SocialButtons />
      {/* copywright */}
      <Copywright />
    </div>
  );
}
