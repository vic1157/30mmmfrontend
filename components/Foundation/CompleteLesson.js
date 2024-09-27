import React from "react";

export default function CompleteLesson() {
  return (
    <div className="flex flex-row justify-between w-[60%] bg-black rounded-md h-[8vh] p-[3vw]">
      <div className="text-lg text-white border border-white-300">
        Previous Day
      </div>
      <div className="text-lg text-white bg-red-500 ">Complete</div>
    </div>
  );
}
