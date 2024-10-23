import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight, MdLock } from "react-icons/md";

export default function LessonItem({
  lessonNumber,
  lessonTitle,
  isAccessible,
}) {
  return (
    <div className="flex flex-row items-center justify-between mx-10">
      {isAccessible ? (
        <div className="flex items-center justify-center text-xl text-white bg-green-500 rounded-full w-7 h-7">
          {lessonNumber}
        </div>
      ) : (
        <div className="flex items-center justify-center text-xl text-white bg-[#AF3634] rounded-full w-7 h-7">
          {lessonNumber}
        </div>
      )}
      <div className="px-6 text-xl truncate">{lessonTitle}</div>
      {isAccessible ? (
        <Link href="/">
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
      ) : (
        <MdLock className="text-xl" />
      )}
    </div>
  );
}
