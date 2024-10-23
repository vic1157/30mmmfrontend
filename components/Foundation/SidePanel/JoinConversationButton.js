"use client";

import React, { useState } from "react";
import Modal from "./Modal";

export default function JoinConversationButton({ onAddCommentOrNote }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const type = formData.get("type"); // 'comment' or 'note'
    const content = formData.get("content"); // The comment/note content

    // Call the parent function to add the comment/note
    onAddCommentOrNote({ type, content });

    // Close the modal after submission
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 text-white bg-[#AF3634] rounded-md hover:bg-white hover:text-[#AF3634] hover:border-[#AF3634] hover:border-2"
      >
        Join the Conversation
      </button>

      {/* Modal for adding comment or note */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
