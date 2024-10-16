"use client";

import React, { useState } from "react";
import { comments, notes } from "@/sample-data/DiscussionData";
import DiscussionPlane from "./DiscussionPlane";

export default function DiscussionPillBox({ commentsCount, notesCount }) {
  const [selectedTab, setSelectedTab] = useState("comments"); // Default tab

  return (
    <div className="flex items-center justify-center p-5">
      <div className="flex text-sm font-semibold bg-gray-200 rounded-full shadow-lg">
        {/* Comments Tab */}
        <button
          onClick={() => setSelectedTab("comments")}
          className={`px-4 py-2 rounded-l-full ${
            selectedTab === "comments"
              ? "bg-black text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Comments <span className="ml-1">({commentsCount})</span>
        </button>

        {/* Notes Tab */}
        <button
          onClick={() => setSelectedTab("notes")}
          className={`px-4 py-2 rounded-r-full ${
            selectedTab === "notes"
              ? "bg-black text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Notes <span className="ml-1">({notesCount})</span>
        </button>
      </div>

      {/* Displayed content based on selected tab */}
      <div className="mt-4">
        <DiscussionPlane comments={comments} notes={notes} />
      </div>
    </div>
  );
}
