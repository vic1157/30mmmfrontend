import React from "react";
import CompleteLessonButton from "./CompleteLessonButton";
import PreviousLessonButton from "./PreviousLessonButton";

export default function CompleteLesson() {
  return (
    <div className="flex flex-row items-center justify-between w-[60%] bg-black rounded-3xl h-[8vh] p-[3vw] shadow-2xl">
      <PreviousLessonButton />
      <CompleteLessonButton />
    </div>
  );
}
