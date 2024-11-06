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
    <div className="w-screen h-screen mx-auto max-w-screen-2xl md:flex">
      {/* 
      The main container has two elements: the Jesus image and the form
      container. Experimentally, I set the max width of the whole page to 1536px, 
      because the visible portion of the image will shift as the
      screen gets larger. Then it is horizontally centered it with mx-auto. 
      */}
      <div className="bg-fixed bg-white bg-center bg-no-repeat bg-contain md:bg-top-4 max-md:bg-top min-h-72 md:bg-cover md:bg-origin-border md:overflow-x-clip md:w-1/2 md:order-2 max-md:w-full -z-50 bg-jesus-hero md:bg-clip-border"></div>
      {/* 
      The image is implemented as a background for Child 1. 
      "md:order-2" means that Child 1 will become Child 2 on medium screens. 
      Other classes that start with "md:" make sure the image is presented full height with
      horizontal overflow hidden via "bg-cover" and "overflow-x-clip" classes. 
      There are also utility classes to control the image size and position based on
      screen size. 
      Small screens are targeted several times with the "max-md" prefix. 
      Technically, this is not necessary, but I figured that it is a
      good practice to be explicit while trying to figure everything out. 
      */}
      <div className="z-50 flex flex-col justify-start w-full gap-4 md:h-full md:items-center md:justify-center md:w-1/2">
        {/* 
        This is inside the form container. On small screens, the form extends
        past the page height, so, I only set the height to full on Desktop
        screens. 
        */}
        <Image
          className="z-10 block mx-auto -mt-16"
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
        />
        {/* The LOGO has a negative top margin "-mt-16" to pull it halfway up over the image on small screens. */}
        <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
        <div className="flex flex-col items-center w-full">
          <div className="inline-flex flex-row justify-between my-2 overflow-y-hidden text-center min-h-max gap-x-3 rounded-3xl bg-gray-bg items-stetch p-0.5">
            {/* The tab selector interface has conditional classes based on firstTabActive so that the active tab is styled with the black background. */}
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
          <form className="items-center w-full px-2 mx-3 my-3 font-normal max-md:space-y-2 md:grid columns-1 md:columns-2 text-md content-baseline h-min gap-y-2">
            {/*
            Both sets of form fields are here together inside the form and
            firstTabActive determines which half of the fields is rendered. 
            Since formData is declared higher up, the state persists between the
            two tabs. 
             After we extract the form to its own component, the
            technique should still work. 
             The values are connected to key/value pairs in the formData object. 
             The !! below is a shorthand for coercing a variable into a boolean. 
             I wasnt sure how to handle the tabs at first, so I originally used the !! to coerce the
            variable to a boolean.
             It's not really necessary here anymore, but its a good shorthand trick to know.
              */}
            {!!firstTabActive && (
              <>
                <label htmlFor="firstName" className="block px-2">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="First Name"
                  />
                </label>
                <label htmlFor="lastName" className="block px-2">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Last Name"
                  />
                </label>
                <label htmlFor="birthdate" className="block px-2">
                  <input
                    type="date"
                    name="birthdate"
                    onChange={handleChange}
                    value={formData.birthdate}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="12-25-1979"
                  />
                </label>
                <label htmlFor="maritalStatus" className="block px-2">
                  <input
                    type="text"
                    name="maritalStatus"
                    onChange={handleChange}
                    value={formData.maritalStatus}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Marital Status"
                  />
                </label>
                <label htmlFor="childrenCount" className="block px-2">
                  <input
                    type="number"
                    name="childrenCount"
                    onChange={handleChange}
                    value={formData.childrenCount}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Number of Children"
                  />
                </label>
                <label htmlFor="churchAffiliation" className="block px-2">
                  <input
                    type="text"
                    name="churchAffiliation"
                    onChange={handleChange}
                    value={formData.churchAffiliation}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Church Affiliation"
                  />
                </label>
                <button
                  onClick={() => setFirstTabActive(false)}
                  className="w-full py-2 mx-auto mt-2 text-white transition-all md:col-span-2 rounded-2xl bg-primary-red hover:brightness-50 hover:tracking-wider"
                >
                  Next
                </button>
              </>
            )}
            {/* 
            Here, the second batch of form fields is rendered when
            firstTabActive is false. The first set of fields still exist in the DOM, but
            are not rendered. I am sure there are other ways to do this, but this
            method works for now! 
            */}
            {!firstTabActive && (
              <>
                <label htmlFor="email" className="block px-2">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="telephone" className="block px-2">
                  <input
                    type="text"
                    name="telephone"
                    onChange={handleChange}
                    value={formData.telephone}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Phone Number"
                  />
                </label>
                <label htmlFor="address" className="block px-2">
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={formData.address}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Street Address"
                  />
                </label>
                <label htmlFor="city" className="block px-2">
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="City"
                  />
                </label>
                <label htmlFor="state" className="block px-2">
                  <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    value={formData.state}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="State"
                  />
                </label>
                <label htmlFor="zipcode" className="block px-2">
                  <input
                    type="text"
                    name="zipcode"
                    onChange={handleChange}
                    value={formData.zipcode}
                    className="block w-full mt-1 border-transparent bg-formfield rounded-2xl focus:border-white focus:bg-teal-50 focus:ring-0"
                    placeholder="Zip Code"
                  />
                </label>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full col-span-2 py-2 mx-auto mt-2 text-white transition-all rounded-2xl bg-primary-red hover:brightness-50 hover:tracking-wider"
                >
                  Save
                </button>
              </>
            )}
          </form>
          <div className="inline-flex flex-row w-full px-2 my-2 max-sm:flex-col max-sm:gap-1.5 max-sm:order-2 min-h-max gap-x-3 rounded-3xl items-stetch"></div>
          <p className="mt-5 mb-10">
            Already have an account?
            <Link href="/Login" className="mx-1 text-primary-red">
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
