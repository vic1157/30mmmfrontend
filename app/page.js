import Link from "next/link";

export default function RootPage() {
  return (
    <main className="grid grid-cols-4 gap-4 w-[80vw] h-[80vh] mx-auto mt-[20vh]">
      <Link href="/LogIn" className="text-center">
        Log In
      </Link>
      <Link href="/SignUp" className="text-center">
        Sign Up
      </Link>
      <Link href="/Settings" className="text-center">
        Settings
      </Link>
      <Link href="/Dashboard" className="text-center">
        Dashboard
      </Link>
      <Link href="/Foundation" className="text-center">
        Foundation
      </Link>
      <Link href="/Contact" className="text-center">
        Contact
      </Link>
      <Link href="/Help" className="text-center">
        Help & Support
      </Link>
      <Link href="/Terms" className="text-center">
        Terms of Service
      </Link>
      <Link href="/Landing" className="text-center">
        Landing Page
      </Link>

      <div>Loading Page</div>
      <div>Error Page</div>
    </main>
  );
}
