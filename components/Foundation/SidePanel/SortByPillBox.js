import React, { useState } from "react";

export default function SortByPill() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To toggle dropdown visibility
  const [selectedOption, setSelectedOption] = useState("Sort By"); // To store the selected sort option

  const options = ["Most Liked", "Most Replies", "Most Recent", "Oldest"]; // Sorting options

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left">
      {/* Pill Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="inline-flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300"
      >
        {selectedOption}
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 w-48 mt-2 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option}
                className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
