import React from "react";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";
import FormPanel from "@/components/LogIn/FormPanel";
// local components
import PhotoPanel from "@/components/LogIn/PhotoPanel";

export default function LogIn() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex w-full h-full mx-auto sm:flex-row ">
        <FormPanel />
        <PhotoPanel />
      </div>
    </div>
  );
}
