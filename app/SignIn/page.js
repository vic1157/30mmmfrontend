import React from "react";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Sign In
      <BackLink />
    </div>
  );
}
