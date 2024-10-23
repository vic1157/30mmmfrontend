import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSrc from "../../public/Jesus Washing Disciples Feet-full.png";
import PlayButton from "./PlayButton";

export default function MainImage() {
  return (
    <div className="relative w-4/5 mx-auto shadow-sm max-xs:w-full max-xs:mx-0">
      <Image
        src={ImageSrc}
        alt="Jesus Washing Disciples Feet"
        layout="responsive"
        width={670}
        height={327}
        className="rounded-lg max-h-[55vh] brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Link href="/">
          <PlayButton />
        </Link>
      </div>
    </div>
  );
}
