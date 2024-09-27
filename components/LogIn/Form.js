import Link from "next/link";

export default function Form() {
  return (
    <div className="box-border flex w-full px-2">
      <form className="grid content-center flex-auto w-full h-full grid-cols-1 gap-y-2">
        <label htmlFor="email" className="block px-8">
          <input
            type="email"
            name="email"
            className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:bg-teal-50 focus:ring-0"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password" className="block px-8">
          <input
            type="password"
            name="password"
            className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:bg-teal-50 focus:ring-0"
            placeholder="Password"
          />
        </label>
        <div></div>
        <Link href="/">
          <span className="text-[#af3634] block -mt-2 text-xs font-light absolute right-2 pr-8 tracking-tighter">
            Forgot Password?
          </span>
        </Link>
        <div className="block px-8">
          <button className="bg-[#af3634] flow-root my-6 w-full py-2 relative place-self-center  rounded-2xl">
            <span className="text-lg font-medium tracking-wide text-center text-white">
              login
            </span>
          </button>
        </div>
        <div className="inline-flex items-center justify-center w-full gap-2 -mt-8 text-xs font-light text-center">
          <span className="gap-2 tracking-tight">Not registered yet?</span>
          <Link href="/register" className="text-[#af3634] tracking-tighter">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
}
