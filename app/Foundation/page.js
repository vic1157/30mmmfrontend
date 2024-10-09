import React from "react";
import Divider from "@/components/common/Divider";
import Footer from "@/components/common/Footer/Footer";
// import Link from "next/link";
// import BackLink from "@/components/common/BackLink";
// local
import BackButton from "@/components/Foundation/BackButton";
import BCVT from "@/components/Foundation/BCVT";
import CompleteLesson from "@/components/Foundation/CompleteLesson";
import Description from "@/components/Foundation/Description";
import MainImage from "@/components/Foundation/MainImage";
import MainLesson from "@/components/Foundation/MainLesson";
import Quotes from "@/components/Foundation/Quotes";
import ReadingTime from "@/components/Foundation/ReadingTime";
import ReflectionBox from "@/components/Foundation/ReflectionBox";
import SectionTitle from "@/components/Foundation/SectionTitle";
import SubTitle from "@/components/Foundation/SubTitle";
import Title from "@/components/Foundation/Title";

export default function Foundation() {
  return (
    <div className="flex flex-col justify-between mx-[1vw] my-[1vh]">
      {/* screen container */}
      <div className="flex flex-row items-start">
        {/* back button */}
        <div className="mr-[2vw]">
          <BackButton />
        </div>

        {/* main content container */}
        <div className="flex flex-col flex-grow max-w-full lg:max-w-10xl">
          {/* text container */}
          <div className="flex flex-col items-start bg-white ">
            {/* title */}
            <div className="mt-[3vh]">
              <Title />
            </div>

            {/* sub title and pill status */}
            <div className="mt-[1vh] mb-[2vh]">
              <SubTitle />
            </div>

            {/* image with play button */}
            <div className="flex justify-center w-full">
              <MainImage />
            </div>

            {/* quotes */}
            <div className="flex justify-center w-full">
              <Quotes />
            </div>
            {/* description */}
            <div className="flex justify-center w-full mb-[3vh]">
              <Description />
            </div>
            {/* Book, Chapter, Verse, Translation */}
            <div className="flex justify-center w-full">
              <BCVT />
            </div>
            {/* Section Title */}
            <div className="flex w-full justify-left mt-[5vh]">
              <SectionTitle />
            </div>
            {/* reading estimate */}
            <div className="flex w-full justify-left mt-[1vh]">
              <ReadingTime />
            </div>
            {/* Text */}
            <div className="flex w-full justify-left mt-[3vh]">
              <MainLesson />
            </div>
            {/* Reflection box */}
            <div className="flex w-full justify-center mt-[6vh] ">
              <ReflectionBox />
            </div>

            {/* Divider */}
            <Divider />

            {/* complete lesson container */}
            <div className="flex w-full justify-center mt-[2vh] ">
              <CompleteLesson />
            </div>

            {/* Footer */}
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
