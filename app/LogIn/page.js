import React from "react";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";
import FormPanel from "@/components/LogIn/FormPanel";
// local components
import PhotoPanel from "@/components/LogIn/PhotoPanel";

export default function LogIn() {
  return (
    <div className="flex flex-col  w-screen h-screen">
      <div className="flex sm:flex-row  w-full h-full mx-auto pt-50">
        {/* left panel - form */}
        <FormPanel />
        {/* |- logo */}
        {/* |- Welcome Text */}
        {/* |- Google Logon button */}
        {/* |- Or divider */}
        {/* |- login Fields */}
        {/* |-- email field */}
        {/* |-- password field */}
        {/* |- forgot password  */}
        {/* |- Login Button */}
        {/* |- Create Account Text */}
        {/* right panel - photo */}
        <PhotoPanel />
      </div>
      <BackLink />
    </div>
  );
}
