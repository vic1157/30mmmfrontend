import { Alexandria } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer/Footer";
import NavBar from "@/components/common/NavBar";

const alexandria = Alexandria({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Clean: A 30 Mighty Men Ministries Program",
  description: "Clean: A 30 Mighty Men Ministries Program",
  keywords: "30 Men Ministries, Clean, Donovan Anderson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alexandria.className} subpixel-antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
