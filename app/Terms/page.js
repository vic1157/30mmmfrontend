import React from "react";
import Head from "next/head";
import BackLink from "@/components/common/BackLink";
import TermsSheet from "@/components/Terms/TermsSheet";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Clean LMS</title>
        <meta
          name="description"
          content="Terms of Service for Clean LMS provided by Thirty Mighty Men Ministries"
        />
      </Head>
      <BackLink />
      <div className="flex flex-col items-center justify-between min-h-screen p-24">
        <TermsSheet />
      </div>
    </>
  );
}
