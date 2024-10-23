import React from "react";

export default function Modal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add Comment or Note</h2>
          <button
            className="text-gray-600 hover:text-red-500"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* Form for adding comment or note */}
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <div className="flex justify-between">
            <label>
              <input
                type="radio"
                name="type"
                value="comment"
                className="mr-2"
                defaultChecked
              />
              Comment
            </label>
            <label>
              <input type="radio" name="type" value="note" className="mr-2" />
              Note
            </label>
          </div>

          <textarea
            name="content"
            rows="4"
            placeholder="Write your comment or note here..."
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
