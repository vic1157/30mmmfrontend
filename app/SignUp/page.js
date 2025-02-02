"use client";

import { useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
    
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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

    const onSubmit = async (e) => {
      e.preventDefault();
      console.log(`Submitted: ${JSON.stringify(formData)}`);
      alert(`Submitted: ${JSON.stringify(formData)}`);
  
      try {
        const res = await fetch('api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          throw new Error(data.message);
        }
  
        console.log(data);
        setFormData({ email: '', password: '' });
      } catch (error) {
        console.error('ERROR::', error.message);
      }
    };

    // Get the logic for onSubmit right..
    return (
        <div className="inset-auto flex flex-col w-screen min-w-[400px] min-h-screen md:flex-row">
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
    
    
            {/* Form */}
            <form className="flex-auto w-full h-full px-4 pt-4 space-y-4">
                <label htmlFor="email" className="block mx-8">
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        className="block w-full mt-4 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0"
                        placeholder="Password"
                    />
                    <button
                      type="submit"
                      onClick={onSubmit}
                      className="relative flow-root w-full py-2 my-6 hover:bg-primary-red/90 bg-primary-red place-self-center rounded-2xl">
                      <span className="text-lg font-medium tracking-wider text-center text-white">
                        SUBMIT
                      </span>
                  </button>
                </label>
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