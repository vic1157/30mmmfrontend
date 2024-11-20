import React from "react";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
      Home
      <BackLink />
    </div>
  );
}
