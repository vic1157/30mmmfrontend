"use client";

import { useState } from "react";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    <div className="inset-auto flex flex-col w-screen min-w-[400px] min-h-screen md:flex-row">
      <div className="fixed z-20 py-1 rounded-md max-md:shadow-md bg-white/80 top-2 left-2 before:static "></div>
      <div className=" bg-white bg-center aspect-[773/499] bg-no-repeat bg-cover max-xs:scale-x-125 sm:self-stretch md:bg-top-4 max-md:h-fit max-md:bg-top min-h-72 md:bg-cover md:bg-origin-border md:overflow-x-clip md:w-3/4 md:order-2 max-md:w-full -z-50 bg-jesus-hero md:bg-clip-border"></div>
      <div className="z-10 flex flex-col w-full gap-1 md:gap-3 max-md:justify-between md:h-full md:pt-7 md:items-center md:justify-between md:w-1/2">
        <Image
          className="z-10 block mx-auto -mt-16 md:mt-16"
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
        />
        {/* The LOGO has a negative top margin "-mt-16" to pull it halfway up over the image on small screens. */}
        <h1 className="text-4xl font-semibold text-center md:mb-6">
          Welcome Back!
        </h1>
        <SignInButton
          mode="redirect"
          redirecturl={
            process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL ||
            "/Dashboard"
          }
          signInUrlFallback={
            process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL ||
            "/Dashboard"
          }
        >
          <button className="flex items-center justify-center w-5/6 py-2 mx-auto my-4 shadow-md outline outline-1 outline-primary-red rounded-2xl columns-1 gap-7 justify-self-center">
            <Image
              className="object-cover contain-layout overflow-x-clip"
              alt="Google Logo"
              src="/googlelogo.png"
              width={20}
              height={20}
            />
            <div className="text-lg font-semibold text-primary-red">
              Login with Google
            </div>
          </button>
        </SignInButton>
        <div className="flex items-center w-full md:my-2 px-52 gap-x-5 ">
          <hr className="flex-auto w-2/6 border-gray-300 border-1 " />
          <p className="text-base text-black">or</p>
          <hr className="flex-auto w-2/6 border-gray-300 border-1 " />
        </div>
        <form className="flex-auto w-full h-full space-y-4">
          <label htmlFor="email" className="block mx-8">
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password" className="block mx-8">
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
              placeholder="Password"
            />
          </label>

          <div className="block px-8">
            <button
              onClick={onSubmit}
              className="relative flow-root w-full py-2 my-6 hover:bg-primary-red/90 bg-primary-red place-self-center rounded-2xl"
            >
              <span className="text-lg font-medium tracking-wider text-center text-white">
                LOGIN
              </span>
            </button>
          </div>
          <div className="inline-flex items-center justify-center w-full gap-2 -mt-8 text-xs font-light text-center">
            <span className="gap-2 tracking-tight">Not registered yet?</span>
            <Link href="/SignUp" className="tracking-tighter text-primary-red">
              Create an Account
            </Link>
          </div>
          <div className="inline-flex items-center justify-center w-full gap-2 -mt-8 text-xs font-light text-center">
            <span>
              <Link href="/" className="tracking-tighter text-primary-red">
                Forgot Password?
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
