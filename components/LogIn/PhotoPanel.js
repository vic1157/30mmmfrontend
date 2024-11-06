import React from "react";
import Image from "next/image";

export default function PhotoPanel() {
  return (
    <div className="flex flex-1 w-1/2 h-full max-sm:hidden">
      <Image
        src="/Jesus Washing Disciples Feet-center.png"
        alt="Jesus Washing Disciples Feet - Center"
        width={300}
        height={300}
        className="w-full"
        priority={true}
      />
    </div>
  );
}
