"use client";

import { useState } from "react";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";

export default function Settings() {
  const [firstTabActive, setFirstTabActive] = useState(true);

  return (
    <>
      <BackLink />
      <div className="flex flex-col items-center justify-start w-full min-h-screen gap-3">
        <h1 className="text-4xl font-semibold text-center">Account Settings</h1>
        <div className="grid items-center justify-center rounded-full size-20 bg-rose-600">
          <span className="text-4xl font-extrabold tracking-wider text-white">
            AD
          </span>
        </div>
        <Link
          href="/settings/account/avatar"
          className="font-semibold tracking-tight text-primary-red hover:scale-95"
        >
          Upload Picture
        </Link>
        <div className="flex flex-col min-h-[200px] w-full max-w-screen-lg  items-center">
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
        </div>
      </div>
    </>
  );
}
