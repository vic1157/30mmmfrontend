import React from "react";
import Image from "next/image";
import BackButton from "@/components/Foundation/BackButton";

export default function ContactPage() {
  return (
    <div className="container max-w-5xl p-6 mx-auto">
      <div className="flex  flex-row mr-[2vw] items-start mb-5">
        <BackButton />
      </div>
      <Image
        className="z-10 block mx-auto -mt-16 md:mt-16"
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
      />
      <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
      <p className="mb-4">
        We&apos;d love to hear from you! Reach out to us using the details below
        or fill out the form.
      </p>
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Contact Information</h2>
        <p>
          Email:{" "}
          <a href="mailto:support@30mmm.org" className="text-primary-red">
            support@30mmm.org
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+1234567890" className="text-primary-red">
            +1 234 567 890
          </a>
        </p>
        <p>Address: 123 Main Street, Cityville, Country</p>
        <p>Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white rounded bg-primary-red"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
