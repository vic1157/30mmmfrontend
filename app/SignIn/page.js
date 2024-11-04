"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";
import Logo from "@/components/common/Logo";
import GoogleButton from "@/components/LogIn/googleButton";

export default function SignIn() {
  const [firstTabActive, setFirstTabActive] = useState(true);

  return (
    <div className="w-screen h-screen mx-auto max-w-screen-2xl md:flex">
      <div className="bg-fixed bg-white bg-center bg-no-repeat bg-contain md:bg-top-4 max-md:bg-top min-h-72 md:bg-cover md:bg-origin-border md:overflow-x-clip md:w-1/2 md:order-2 max-md:w-full -z-50 bg-jesus-hero md:bg-clip-border"></div>
      <div className="z-50 flex flex-col justify-start w-full gap-4 md:h-full md:items-center md:justify-center md:w-1/2">
        <Image
          className="z-10 block mx-auto -mt-16"
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
        />
        <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
        <div className="flex flex-col items-center w-full">
          <div className="inline-flex flex-row justify-between my-2 overflow-y-hidden text-center min-h-max gap-x-3 rounded-3xl bg-gray-bg items-stetch p-0.5">
            <button
              onClick={() => setFirstTabActive(true)}
              className={`w-full h-full px-2 py-2 text-xs font-light rounded-3xl text-nowrap hover:bg-almost-black hover:text-white active:text-white active:bg-almost-black hover:font-medium active:font-medium ${firstTabActive ? "bg-almost-black text-white font-medium" : ""}`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setFirstTabActive(false)}
              className={`w-full h-full px-2 py-2 text-xs font-light rounded-3xl text-nowrap hover:bg-almost-black hover:text-white active:text-white active:bg-almost-black hover:font-medium active:font-medium ${firstTabActive ? "" : "bg-almost-black text-white font-medium"}`}
            >
              Address
            </button>
          </div>
          <form className="grid items-center flex-auto w-full grid-cols-1 my-3 font-normal md:grid-cols-2 text-md content-baseline h-min gap-y-2">
            {!!firstTabActive && (
              <>
                <label htmlFor="first-name" className="block px-8">
                  <input
                    type="text"
                    name="first-name"
                    className="w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="First Name"
                  />
                </label>
                <label htmlFor="last-name" className="block px-8">
                  <input
                    type="text"
                    name="last-name"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Last Name"
                  />
                </label>
                <label htmlFor="birthdate" className="block px-8">
                  <input
                    type="date"
                    name="birthdate"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="12-25-1979"
                  />
                </label>
                <label htmlFor="marital-status" className="block px-8">
                  <input
                    type="text"
                    name="marital-status"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Marital Status"
                  />
                </label>
                <label htmlFor="children-count" className="block px-8">
                  <input
                    type="number"
                    name="children-count"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Number of Children"
                  />
                </label>
                <label htmlFor="church-affiliation" className="block px-8">
                  <input
                    type="text"
                    name="church-affiliation"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Church Affiliation"
                  />
                </label>
              </>
            )}
            {/* Second Tab */}
            {!firstTabActive && (
              <>
                <label htmlFor="email" className="block px-8">
                  <input
                    type="email"
                    name="email"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="telephone" className="block px-8">
                  <input
                    type="text"
                    name="telephone"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Phone Number"
                  />
                </label>
                <label htmlFor="address" className="block px-8">
                  <input
                    type="text"
                    name="address"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Street Address"
                  />
                </label>
                <label htmlFor="city" className="block px-8">
                  <input
                    type="text"
                    name="city"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="City"
                  />
                </label>
                <label htmlFor="state" className="block px-8">
                  <input
                    type="text"
                    name="state"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="State"
                  />
                </label>
                <label htmlFor="zipcode" className="block px-8">
                  <input
                    type="text"
                    name="zipcode"
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Zip Code"
                  />
                </label>
              </>
            )}
          </form>
          <div className="inline-flex flex-row w-full px-8 my-2 max-sm:flex-col max-sm:gap-1.5 max-sm:order-2 min-h-max gap-x-3 rounded-3xl items-stetch">
            <button className="peer w-full py-2 border-2 rounded-2xl border-primary-red text-primary-red hover:scale-[.98] hover:bg-primary-red hover:text-white peer-hover:saturate[0.1] transition-all">
              Cancel
            </button>
            <button className="peer w-full py-2 text-white rounded-2xl bg-primary-red hover:scale-[.98] hover:bg-white hover:text-primary-red hover:border-2 hover:border-primary-red peer-hover:saturate-[0.1] transition-all">
              Save
            </button>
          </div>
          <p className="mt-5 mb-10">
            Already have an account?
            <Link href="/login" className="mx-1 text-primary-red">
              Log in
            </Link>
            here
          </p>
          <button className="outline outline-1 outline-[#af3634] my-4 w-5/6 py-2 rounded-2xl flex columns-1 gap-7 items-center justify-center justify-self-center mx-auto">
            <Image
              className="object-cover contain-layout overflow-x-clip"
              src="/googlelogo.png"
              width={20}
              height={20}
              alt="Google Logo"
            />
            <div className="text-[#af3634] text-lg font-semibold">
              Sign Up with Google
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
