import React from "react";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import BackLink from "@/components/common/BackLink";
import SocialButtons from "@/components/common/Footer/SocialButtons";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full xl:max-w-[1400px] flex-col mx-auto justify-start">
      {/* Navigation bar...to be extracted */}
      <div className="flex items-center justify-between w-full h-16 px-2 py-2 border-b-2 min-h-fit border-b-gray-300 md:px-5 gap-x-2">
        <div className=" size-9">
          <RxHamburgerMenu size="lg" />
        </div>
        <div className="mx-auto text-2xl">LOGO GOES HERE</div>
        <div className="ml-auto min-w-fit text-primary-red">
          <LuPhone />
          <span className="text-sm font-medium text-primary-red">Call Us</span>
        </div>
        <div className="flex items-center h-12 gap-x-2 min-w-36 justify-self-end">
          <div className="rounded-full size-10 bg-primary-red" />
          <span className="font-semibold tracking-wider">Donovan</span>
          <div className="text-primary-red">
            <RxCaretDown />
          </div>
        </div>
      </div>
      {/* Start of the content container */}
      <div className="flex flex-col items-start space-y-8  pt-12 w-full mt-8 min-h-screen max-w-[1000px] mx-auto ">
        <div className="flex flex-wrap items-baseline justify-start w-full gap-2 ">
          <h1 className="text-4xl font-bold leading-relaxed">
            Hello, Donovan Anderson{" "}
          </h1>
          <span className="text-3xl font-semibold text-center bg-white rounded-full drop-shadow-md size-9">
            V
          </span>
          <h2 className="w-full text-lg font-light text-gray-400">
            Today is{" "}
            <span className="font-semibold text-almost-black">
              Week 1 Day 1: Sanctification
            </span>
          </h2>
        </div>
        <div className="w-[90%] max-w-[1200px] h-80 md:h-60 mx-auto max-md:max-w-[340px] bg-donate-mobile bg-top bg-accent-red md:bg-donate-desktop bg-no-repeat md:bg-right justify-self-center rounded-3xl"></div>
        {/* The sizes by lines are 22 14 12 and the buttons are 16 */}
        <div className="w-full mr-auto">
          <h4 className="text-xl font-bold">CLEAN GROUP XXIII</h4>
        </div>
        <div className="flex w-full max-md:flex-wrap max-md:justify-between">
          <div className="flex p-2 px-3 bg-gray-200 rounded-2xl gap-x-2">
            <span className="text-sm">All</span>
            <span className="text-sm">In Progress</span>
            <span className="text-sm"> Upcoming</span>
            <span className="text-sm">Completed</span>
          </div>
          <div className="p-2 ml-auto text-3xl bg-gray-200 rounded-2xl">
            🗓️ Group: <strong>Clean XXIII</strong> ⌄
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full gap-3 py-3">
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
          {/* The font sizes are 
          Week 10 and Status 8, 16 Foundation, bottom line is 12 and 12 bold */}
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
          <div className="w-[320px] h-[290px] bg-neutral-50 shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top"></div>
        </div>
        <div className="flex flex-col w-full h-40 bg-neutral-100/25">
          <div className="flex flex-row items-center text-sm md:text-base border-t-2 space-y-2 border-gray-300 justify-between sm:justify-evenly w-full text-[#677489] px-2">
            <Link href="/Home">Home</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Help">Help & Support</Link>
            <Link href="/Terms">Terms of Service</Link>
          </div>
          <div className="flex flex-row-reverse items-center mt-3 md:flex-col gap-y-3 md:items-start md:justify-center">
            <div className="text-[#959EAC] md:mx-auto text-xs md:text-base order-2 md:order-1">
              &copy; {new Date().getFullYear()} Thirty Mighty Men Ministries
              &trade;. All rights reserved.
            </div>
            <div className="ml-auto text-sm md:text-base md:mx-auto">
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
