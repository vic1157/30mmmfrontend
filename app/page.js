import Link from "next/link";

export default function SignIn() {
  return (
    <main className="flex flex-row items-center justify-between w-[80vw] h-[80vh] mx-auto">
      <Link href="/LogIn">Log In</Link>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/Settings">Settings</Link>
      <Link href="/Home">Home</Link>
      <Link href="/Foundation">Foundation</Link>
    </main>
  );
}
