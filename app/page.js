import Link from "next/link";

export default function SignIn() {
  return (
    <main className="grid grid-cols-4 gap-4 w-[80vw] h-[80vh] mx-auto mt-[20vh]">
      <Link href="/LogIn" className="text-center">
        Log In
      </Link>
      <Link href="/SignIn" className="text-center">
        Sign In
      </Link>
      <Link href="/Settings" className="text-center">
        Settings
      </Link>
      <Link href="/Home" className="text-center">
        Home
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
    </main>
  );
}
