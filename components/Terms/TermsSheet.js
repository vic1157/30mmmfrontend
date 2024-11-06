import React from "react";
import AcceptanceOfTerms from "./AcceptanceOfTerms";
import AccessAndUse from "./AccessAndUse";
import ChangesToTerms from "./ChangesToTerms";
import ContactInfo from "./ContactInfo";
import ContentAndIP from "./ContentAndIP";
import Disclaimers from "./Disclaimers";
import GoverningLaw from "./GoverningLaw";
import Header from "./Header";
import Indemnification from "./Indemnification";
import Privacy from "./Privacy";
import Termination from "./Termination";

export default function TermsSheet() {
  return (
    <div className="max-w-6xl px-6 py-8 mx-auto">
      <Header />
      <AcceptanceOfTerms />
      <AccessAndUse />
      <ContentAndIP />
      <Privacy />
      <Disclaimers />
      <Indemnification />
      <Termination />
      <GoverningLaw />
      <ChangesToTerms />
      <ContactInfo />
    </div>
  );
}
