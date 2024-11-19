import React from "react";
import Image from "next/image";
import BackButton from "@/components/Foundation/BackButton";

export default function SupportPage() {
  return (
    <div className="container max-w-5xl p-6 mx-auto">
      <div className="flex  flex-row mr-[2vw] items-start  mb-5">
        <BackButton />
      </div>
      <Image
        className="z-10 block mx-auto -mt-16 md:mt-16"
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
      />
      <h1 className="mb-6 text-4xl font-bold">Help & Support</h1>
      <p className="mb-4">
        Find answers to common questions or get in touch with our support team.
      </p>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Frequently Asked Questions
        </h2>
        <ul className="pl-6 space-y-2 list-disc">
          <li>
            <a href="#faq1" className="text-primary-red">
              How do I reset my password?
            </a>
          </li>
          <li>
            <a href="#faq2" className="text-primary-red">
              How do I track my order?
            </a>
          </li>
          <li>
            <a href="#faq3" className="text-primary-red">
              How do I contact customer service?
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Submit a Support Request
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="issue" className="block font-medium">
              Issue Type
            </label>
            <select
              id="issue"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option>Account Issue</option>
              <option>Billing Problem</option>
              <option>Technical Support</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Describe your issue"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded bg-primary-red"
          >
            Submit Request
          </button>
        </form>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-semibold">Live Chat</h2>
        <p>
          Click the button below to start a live chat with one of our support
          agents.
        </p>
        <button className="px-4 py-2 mt-2 rounded border-1 text-primary-red bg-white-500 border-primary-red">
          Start Live Chat
        </button>
      </div>
    </div>
  );
}
