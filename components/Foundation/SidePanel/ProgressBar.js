import React from "react";

const ProgressBar = ({ completedSteps }) => {
  const totalSteps = 7; // Total number of steps
  const steps = Array.from(
    { length: totalSteps },
    (_, index) => index < completedSteps,
  );

  return (
    <div className="flex justify-center w-[95%] pt-3 gap-x-1">
      {steps.map((isCompleted, index) => (
        <div
          key={index}
          className={`w-12 h-1 rounded-sm ${isCompleted ? "bg-[#AF3634]" : "bg-gray-300"}`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
