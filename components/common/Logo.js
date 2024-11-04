import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="mx-auto mt-32 place-self-center"
      src="/logo.png"
      width={120}
      height={120}
    />
  );
}
