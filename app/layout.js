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
      <body
        className={`${alexandria.className} subpixel-antialiased h-screen w-screen mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
