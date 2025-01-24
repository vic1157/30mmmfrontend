"use client";

import React from "react";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import { DailySurvey } from "@/components/Home/DailySurvey";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  return (
    <SignedIn>
      <div className="relative flex flex-col items-center justify-start min-h-screen mx-auto">
        <NavigationBar />

        {/* Start of the content container */}
        <DailySurvey />
        <div className="flex flex-col items-start space-y-4 gap-y-5  pt-12 relative w-full mt-8 min-h-screen max-w-[1200px] mx-auto max-lg:mx-2 mb-8 ">
          <div className="flex flex-wrap items-center justify-start w-full gap-2 md:gap-y-5 ">
            <h1 className="text-3xl font-bold leading-relaxed md:text-4xl">
              Hello, Donovan Anderson
            </h1>
            <UserSelectCaret />

            <h2 className="w-full text-base font-normal text-gray-400">
              Today is{" "}
              <span className="font-semibold text-almost-black">
                Week 1 Day 1: Sanctification
              </span>
            </h2>
          </div>
          <DonateHero />
          {/* The sizes by lines are 22 14 12 and the buttons are 16 */}
          <div className="w-full mr-auto">
            <h4 className="text-3xl font-semibold leading-7 tracking-wider">
              CLEAN XXIII
            </h4>
          </div>
          <div className="h-[30px] inline-flex w-full items-center justify-between py-1.5 sm:px-2 px-0.5">
            <div className="inline-flex justify-evenly gap-1.5  bg-gray-200 rounded-[40px] gap-x-0.5 sm:gap-x-2">
              <span className="text-xs tracking-wider leading-tight font-light text-slate-600 hover:bg-almost-black hover:text-white rounded-[34px] py-2 px-2.5 hover:font-medium">
                All
              </span>
              <span className="text-xs tracking-wider leading-tight font-light text-slate-600 hover:bg-almost-black hover:text-white rounded-[34px] py-2 px-2.5 hover:font-medium">
                In Progress
              </span>
              <span className="text-xs tracking-wider max-sm:hidden leading-tight font-light text-slate-600 hover:bg-almost-black hover:text-white rounded-[34px] py-2 px-2.5 hover:font-medium">
                {" "}
                Upcoming
              </span>
              <span className="text-xs tracking-wider leading-tight font-light text-slate-600 hover:bg-almost-black hover:text-white rounded-[34px] py-2 px-2.5 hover:font-medium">
                Completed
              </span>
            </div>
            <div className="inline-flex items-center gap-1 p-2 ml-auto text-sm font-light bg-gray-200 rounded-2xl">
              <CalendarIcon />
              Group:
              <div className="font-medium leading-snug ">Clean XXIII</div>
              <DownCaret />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center w-full gap-3 py-3 md:gap-5">
            <WeekCard week={1} status={"Completed"} />
            <WeekCard week={2} status={"Completed"} />
            <WeekCard week={3} status={"Completed"} />
            <WeekCard week={4} status={"Completed"} />
            <WeekCard week={5} status={"Completed"} />
            <WeekCard week={6} status={"Completed"} />
            <WeekCard week={7} status={"Completed"} />
          </div>
        </div>
      </div>
    </SignedIn>
  );
}

export const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex-auto w-full bg-white">
      <div className="flex items-center px-2 self-stretch h-16 gap-2 lg:gap-3 border-b-2 border-b-[#E3E7ED] bg-white">
        <div className=" size-7">
          <RxHamburgerMenu size="lg" />
        </div>
        <div className="mx-auto text-2xl justify-self-auto max-sm:hidden">
          30 MMM CLEAN PROGRAM
        </div>
        <div className="inline-flex items-center gap-2 ml-auto cursor-pointer justify-self-end text-primary-red">
          {/* <LuPhone /> */}
          <span className="text-sm font-medium text-primary-red">
            <SignOutButton />
          </span>
        </div>
        <div className="flex items-center justify-end h-12 mr-2 sm:gap-2 md:min-w-36 justify-self-end">
          <div className="relative rounded-full size-11 bg-primaryred">
            <div className="absolute rounded-[52px] p-1 border-white border-2 border-spacing-1 bg-amber-300 size-5 left-2/3 top-2/3">
              <div className="text-center absolute text-white text-[9px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                DA
              </div>
            </div>
          </div>
          <span className="text-base font-medium leading-relaxed tracking-wide max-sm:hidden">
            Donovan
          </span>
          <div className="cursor-pointer text-primary-red size-7 hover:drop-shadow-xl">
            <RxCaretDown size="lg" className="group" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const UserSelectCaret = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 11.25L15 18.75L22.5 11.25"
        stroke="#13171B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalendarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66699 1.66699V4.16699"
        stroke="#516078"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 1.66699V4.16699"
        stroke="#516078"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91699 7.5752H17.0837"
        stroke="#516078"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7.08366V14.167C17.5 16.667 16.25 18.3337 13.3333 18.3337H6.66667C3.75 18.3337 2.5 16.667 2.5 14.167V7.08366C2.5 4.58366 3.75 2.91699 6.66667 2.91699H13.3333C16.25 2.91699 17.5 4.58366 17.5 7.08366Z"
        stroke="#516078"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0791 11.4167H13.0866"
        stroke="#516078"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0791 13.9167H13.0866"
        stroke="#516078"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99607 11.4167H10.0036"
        stroke="#516078"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99607 13.9167H10.0036"
        stroke="#516078"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91209 11.4167H6.91957"
        stroke="#516078"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91209 13.9167H6.91957"
        stroke="#516078"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DownCaret = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="#516078"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WeekCard = ({ week, status }) => {
  return (
    <div className="w-[320px] h-[290px] shadow-lg rounded-3xl bg-lesson-card bg-no-repeat bg-top flex-col justify-center items-center">
      <div className="w-full h-[158px]" />
      <div className="w-full h-[132px] rounded-bl-3xl rounded-br-3xl flex justify-center items-center">
        <div className="w-[280px] h-[86px]  flex-col flex justify-evenly gap-y-2">
          <div className="inline-flex items-start self-stretch justify-between w-full">
            <div className="text-slate-500 text-[10px] font-medium uppercase leading-[14px] tracking-wide">
              Week {week}
            </div>
            <div className="w-[69px] h-[18px] px-1.5 py-px bg-lime-500/20 rounded-2xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-lime-500 text-[8px] font-medium  uppercase leading-none">
                {status}
              </div>
            </div>
          </div>
          <div className="text-base font-medium leading-relaxed capitalize text-zinc-900">
            Foundation
          </div>
          <div className="w-[279.02px] h-1.5 relative">
            <div className="w-[279.02px] h-1.5 left-0 top-0 absolute opacity-60 bg-gray-200 rounded-[52px]" />
            <div className="w-[279.01px] h-1.5 left-0 top-0 absolute rounded-[52px] justify-start items-start gap-0.5 inline-flex">
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
              <div className="w-[38.43px] h-1.5 bg-lime-500 rounded-[52px]" />
            </div>
          </div>
          <div className="inline-flex items-start self-stretch justify-between w-full mt-2">
            <div className="text-slate-500 text-xs font-medium capitalize leading-[18px]">
              Progress
            </div>
            <div className="text-zinc-900 text-xs font-bold capitalize leading-[18px]">
              100%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The mobile version of the DonateHero is a MESS
// TODO: Fix the mobile version of the DonateHero
export const DonateHero = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1000px] h-80 md:h-60 mx-auto max-md:max-w-[340px] relative bg-donate-mobile bg-top bg-primaryred-900 md:bg-donate-desktop bg-no-repeat md:bg-right justify-self-center rounded-3xl">
        <div className="flex max-md:flex-wrap flex-col w-[330px] md:w-[300px] max-md:hidden md:h-[210px] h-[270px] items-center justify-start md:justify-between md:items-start ml-3 mt-3 max-md:mt-[120px]">
          <h3 className="text-[28px] font-bold text-white tracking-wide">
            Donate
          </h3>
          <div className="text-sm font-light text-white">
            Donation. God loves a donor.
          </div>
          <div className="inline-flex items-center justify-start gap-4 bg-off-white/10 rounded-[34px] gap-x-2 justify-self-end">
            <div className="h-[26px] px-2 py-1 bg-black rounded-[34px] flex-col justify-center items-center gap-1.5 inline-flex">
              <div className="px-1 text-xs font-medium leading-tight text-white">
                One time
              </div>
            </div>
            <div className="h-[26px] px-0.5 flex-col justify-center items-start gap-1.5 inline-flex">
              <div className="px-1 text-xs font-normal leading-tight text-white">
                Monthly
              </div>
            </div>
          </div>
          <div className="h-12 flex flex-wrap w-[600px] overflow-hidden justify-start items-start gap-3.5">
            <div className="inline-flex items-center justify-start gap-3">
              <div className="w-[90px] h-12 px-[31px] max-md:hidden py-2 bg-[#865852] rounded-[40px] border justify-center items-center gap-2.5 flex">
                <div className="text-base font-normal leading-relaxed text-white">
                  $50
                </div>
              </div>
              <div className="w-[90px] h-12 px-[31px] py-[11px] bg-white rounded-[40px] border justify-center items-center gap-2.5 flex">
                <div className="text-base font-medium leading-relaxed text-zinc-900">
                  $100
                </div>
              </div>
              <div className="w-[90px] self-stretch px-[31px] py-2 max-md:hidden  bg-[#865852] rounded-[40px] border justify-center items-center gap-2.5 flex">
                <div className="text-base font-normal leading-relaxed text-white">
                  $200
                </div>
              </div>
              <div className="w-[90px] h-12 px-[31px] py-2 bg-[#865852] max-md:hidden  rounded-[40px] border justify-center items-center gap-2.5 flex">
                <div className="text-base font-normal leading-relaxed text-white">
                  Custom
                </div>
              </div>
              <div className="w-[152px] self-stretch px-6 py-[11px] bg-red-700 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="text-base font-bold leading-relaxed text-center text-white">
                  Donate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
