import React from "react";
import AcceptanceOfTerms from "./AcceptanceOfTerms";
import AccessAndUse from "./AccessAndUse";
import ContactInfo from "./ContactInfo";

export default function TermsSheet() {
  return (
    <div className="max-w-2xl px-6 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">
        Terms of Service for Clean LMS
      </h1>
      <p className="mb-4 italic">Last updated: [Date]</p>
      <AcceptanceOfTerms />
      <AccessAndUse />

      <ContactInfo />
    </div>
  );
}
