import React from "react";
import Divider from "../Divider";
import Copywright from "./Copywright";
import HelpAndSupport from "./HelpAndSupport";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <div>
      {/* divider */}
      <Divider />
      {/* help buttons components */}
      <HelpAndSupport />
      {/* social buttons components */}
      <SocialButtons />
      {/* copywright */}
      <Copywright />
    </div>
  );
}
