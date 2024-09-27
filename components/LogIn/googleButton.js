import React from "react";
import Image from 'next/image';

export default function GoogleButton() {
  return (
    <>
      <button className="outline outline-1 outline-[#af3634] my-4 w-5/6 py-2 rounded-2xl flex columns-1 gap-7 items-center justify-center justify-self-center mx-auto">
        <Image className='object-cover contain-layout overflow-x-clip' src="/googlelogo.png" width={20} height={20} />
        <div className="text-[#af3634] text-lg font-semibold">
          Login with Google
        </div>
      </button>
    </>
  );
}
