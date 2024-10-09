import React from "react";
import Copywright from "./Copywright";
import HelpAndSupport from "./HelpAndSupport";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <div className="flex flex-col border-top">
      {/* help buttons components */}
      <HelpAndSupport />
      {/* social buttons components */}
      <SocialButtons />
      {/* copywright */}
      <Copywright />
    </div>
  );
}
