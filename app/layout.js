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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={`${alexandria.className} subpixel-antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
