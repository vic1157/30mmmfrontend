import React from "react";
import Divider from "./Divider";
import Form from "./Form";
import GoogleButton from "./googleButton";
import Logo from "./Logo";
// local components
import WelcomeText from "./WelcomeText";

export default function FormPanel() {
  return (
    <div className="flex flex-col flex-1">
      <Logo />
      <WelcomeText />
      <GoogleButton />
      <Divider />
      <Form />
      {/* |- login Fields */}
      {/* |-- email field */}
      {/* |-- password field */}
      {/* |- forgot password  */}
      {/* |- Login Button */}
      {/* |- Create Account Text */}
      {/* right panel - photo */}
    </div>
  );
}
