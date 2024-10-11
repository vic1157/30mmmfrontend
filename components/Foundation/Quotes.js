"use client";

import React, { useEffect, useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function Quotes() {
  const [iconSize, setIconSize] = useState(10); // Default size

  // Function to update icon size based on screen width
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setIconSize(20); // Smaller icon size for screens < 640px (mobile)
    } else if (width < 1024) {
      setIconSize(40); // Medium size for screens between 640px and 1024px (tablet)
    } else {
      setIconSize(60); // Default size for larger screens
    }
  };

  useEffect(() => {
    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row mt-[2vh]">
      <RiDoubleQuotesL size={iconSize} color="#F5BD4F" />
      <RiDoubleQuotesR size={iconSize} color="#F5BD4F" />
    </div>
  );
}
