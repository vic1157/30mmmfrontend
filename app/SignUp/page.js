"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BackLink from "@/components/common/BackLink";
import Logo from "@/components/common/Logo";
import GoogleButton from "@/components/LogIn/googleButton";

/* 
  This is a version of the registration page that tracks state and "submits" the form data to the console. It also has a tabbed interface for personal information and address information. 
  The form data is stored in the formData state object and every form field is updated with one dynamic handleChange function. formData holds the initial state of the form fields.

  The onSubmit function logs the form data to the console and alerts the user with the same data.

  Until we confirm the shape of our data and their types, the form fields are very generic.

  The form fields are conditionally rendered based on the firstTabActive state variable. The first tab fields are rendered when firstTabActive is true and the second tab fields are rendered when firstTabActive is false.

 */

export default function SignIn() {
  const [firstTabActive, setFirstTabActive] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    maritalStatus: "",
    childrenCount: "",
    churchAffiliation: "",
    email: "",
    telephone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  // Every field uses this function to update the form data.
  const handleChange = (e) => {
    const { name, value } = e.target;
    // The name and value of the targeted field is deconstructed from the event object.
    // We plug in the previous state of the form data, then overwrite only the targeted field and value.

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: ${JSON.stringify(formData)}`);
    alert(`Submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="inset-auto flex flex-col w-screen min-w-[400px] h-screen md:flex-row">
      <div className="fixed z-20 py-1 rounded-md max-md:shadow-md bg-white/80 top-2 left-2 before:static" />
      
      {/* Image Container - Matched to reference styling */}
      <div className="bg-white bg-center aspect-[773/499] bg-no-repeat bg-cover max-xs:scale-x-125 sm:self-stretch md:bg-top-4 max-md:h-fit max-md:bg-top min-h-72 md:bg-cover md:bg-origin-border md:overflow-x-clip md:w-3/4 md:order-2 max-md:w-full -z-50 bg-jesus-hero md:bg-clip-border" />

      {/* Form Container - Updated to match reference */}
      <div className="z-10 flex flex-col w-full gap-1 md:gap-3 max-md:justify-between md:h-full md:pt-7 md:items-center md:justify-between md:w-1/2">
        <Image
          className="z-10 block mx-auto -mt-16 md:mt-16"
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
        />
        
        <h1 className="text-4xl font-semibold text-center md:mb-6">Sign Up</h1>
        
        {/* Google Sign Up Button */}
        <button className="flex items-center justify-center w-5/6 py-2 mx-auto my-4 shadow-md outline outline-1 outline-primary-red rounded-2xl columns-1 gap-7 justify-self-center">
          <Image
            className="object-cover contain-layout overflow-x-clip"
            src="/googlelogo.png"
            width={20}
            height={20}
            alt="Google Logo"
          />
          <div className="text-lg font-semibold text-primary-red">
            Sign Up with Google
          </div>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full md:my-2 px-52 gap-x-5">
          <hr className="flex-auto w-2/6 border-gray-300 border-1" />
          <p className="text-base text-black">or</p>
          <hr className="flex-auto w-2/6 border-gray-300 border-1" />
        </div>

        {/* Tab Selector */}
        <div className="inline-flex flex-row justify-between mx-10 text-center md:overflow-y-hidden my-mx-52 md: my min-h-max gap-x-3 rounded-3xl bg-gray-bg items-stetch">
          <button
            onClick={() => setFirstTabActive(true)}
            className={`w-full h-full ps-4 pe-2 py-2 text-base font-light rounded-3xl text-nowrap hover:bg-almost-black hover:text-white active:text-white active:bg-almost-black hover:font-medium active:font-medium ${
              firstTabActive ? "bg-almost-black text-white font-medium" : ""
            }`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setFirstTabActive(false)}
            className={`w-full h-full ps-3 pe-4 py-2 text-base font-light rounded-3xl text-nowrap hover:bg-almost-black hover:text-white active:text-white active:bg-almost-black hover:font-medium active:font-medium ${
              firstTabActive ? "" : "bg-almost-black text-white font-medium"
            }`}
          >
            Address
          </button>
        </div>

        {/* Form */}
        <form className="flex-auto w-full h-full px-4 pt-4 space-y-4">
          {firstTabActive ? (
            <>
              <label htmlFor="firstName" className="block mx-8">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="First Name"
                />
              </label>
              <label htmlFor="lastName" className="block mx-8">
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="Last Name"
                />
              </label>
              <label htmlFor="birthdate" className="block mx-8">
                <input
                  type="date"
                  name="birthdate"
                  onChange={handleChange}
                  value={formData.birthdate}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="Birthdate"
                />
              </label>
              <label htmlFor="maritalStatus" className="block mx-8">
                <input
                  type="text"
                  name="maritalStatus"
                  onChange={handleChange}
                  value={formData.maritalStatus}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="Marital Status"
                />
              </label>
              <div className="block px-8">
                <button
                  onClick={() => setFirstTabActive(false)}
                  className="relative flow-root w-full py-2 my-6 hover:bg-primary-red/90 bg-primary-red place-self-center rounded-2xl"
                >
                  <span className="text-lg font-medium tracking-wider text-center text-white">
                    NEXT
                  </span>
                </button>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="email" className="block mx-8">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="Email"
                />
              </label>
              <label htmlFor="telephone" className="block mx-8">
                <input
                  type="tel"
                  name="telephone"
                  onChange={handleChange}
                  value={formData.telephone}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="Phone Number"
                />
              </label>
              <label htmlFor="address" className="block mx-8">
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                  placeholder="Address"
                />
              </label>
              <div className="block px-8">
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="relative flow-root w-full py-2 my-6 hover:bg-primary-red/90 bg-primary-red place-self-center rounded-2xl"
                >
                  <span className="text-lg font-medium tracking-wider text-center text-white">
                    SIGN UP
                  </span>
                </button>
              </div>
            </>
          )}
        </form>

        {/* Login Link */}
        <div className="inline-flex items-center justify-center w-full gap-2 mb-5 text-xs font-light text-center">
          <span className="gap-2 tracking-tight">Already have an account?</span>
          <Link href="/Login" className="tracking-tighter text-primary-red">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
