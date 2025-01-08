import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Alexandria } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Clean: A 30 Mighty Men Ministries Program",
  description: "Clean: A 30 Mighty Men Ministries Program",
  keywords: "30 Men Ministries, Clean, Donovan Anderson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      >
        <body className={`${alexandria.className} subpixel-antialiased`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
