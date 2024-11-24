"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const DailySurvey = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Daily Survey</Button>
      </SheetTrigger>
      <SheetContent className="w-[299px] sm:w-[320px] overflow-clip z-[51]">
        <SheetHeader>
          <SheetTitle>Daily Survey</SheetTitle>
          <SheetDescription>
            {/* Help us improve our app by answering a few questions. */}
          </SheetDescription>
        </SheetHeader>
        <Image
          src="/survey-placeholder.png"
          alt="Survey"
          width={312}
          height={1488}
          className="object-cover"
        />
        <SheetFooter>
          <SubmitButton>Submit</SubmitButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const Button = ({ children }) => (
  <button className=" fixed right-0 end-0 top-1/2 z-[51] origin-right data-[state=open]:opacity-0 mr-2 -translate-y-1/2 -rotate-90 p-0 m-0 justify-center items-center gap-2.5 text-white bg-primary-red px-4 py-2 rounded-[16px_16px_0px_0px]">
    {children}
  </button>
);

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="bg-primary-red text-white px-4 py-2 rounded-[16px]"
    >
      Submit
    </button>
  );
};
