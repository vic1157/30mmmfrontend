"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function LogIn() {
  return (
    <div className="inset-auto flex flex-col w-screen min-w-[400px] min-h-screen md:flex-row">
      <div className="fixed z-20 py-1 rounded-md max-md:shadow-md bg-white/80 top-2 left-2 before:static "></div>
      <div className=" bg-white bg-center aspect-[773/499] bg-no-repeat bg-cover max-xs:scale-x-125 sm:self-stretch md:bg-top-4 max-md:h-fit max-md:bg-top min-h-72 md:bg-cover md:bg-origin-border md:overflow-x-clip md:w-3/4 md:order-2 max-md:w-full -z-50 bg-jesus-hero md:bg-clip-border"></div>
      <SignIn.Root>
        <div className="z-10 flex flex-col w-full gap-1 md:gap-3 max-md:justify-between md:h-full md:pt-7 md:items-center md:justify-between md:w-1/2">
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <Image
                  className="z-10 block mx-auto -mt-16 md:mt-16"
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={120}
                />
                {/* The LOGO has a negative top margin "-mt-16" to pull it halfway up over the image on small screens. */}
                <SignIn.Step name="start">
                  <h1 className="text-4xl font-semibold text-center md:mb-6">
                    Welcome Back!
                  </h1>
                  <Clerk.Connection name="google" asChild>
                    <Button
                      variant="outline"
                      className="flex items-center justify-center w-full py-2 mx-auto my-4 shadow-md outline outline-1 outline-primary-red rounded-2xl columns-1 gap-7 justify-self-center"
                      disabled={isGlobalLoading}
                    >
                      <Image
                        className="object-cover contain-layout overflow-x-clip"
                        alt="Google Logo"
                        src="/googlelogo.png"
                        width={20}
                        height={20}
                      />
                      <div className="text-lg font-semibold text-primary-red">
                        Login with Google
                      </div>
                    </Button>
                  </Clerk.Connection>

                  <Clerk.GlobalError className="block text-sm text-red-400" />
                  <Clerk.Field name="identifier">
                    <Clerk.Label>Email</Clerk.Label>
                    <Clerk.Input className="block w-full mt-1 border-transparent bg-blue-50/75 rounded-xl focus:border-white focus:shadow-md focus:bg-blue-50/50 focus:ring-0" />
                    <Clerk.FieldError className="block mt-2 text-xs text-red-600" />
                  </Clerk.Field>
                  <SignIn.Action
                    submit
                    className="relative flow-root w-full py-2 my-6 hover:bg-primary-red/90 bg-primary-red place-self-center rounded-2xl"
                  >
                    Sign In
                  </SignIn.Action>
                  <p className="text-sm text-center text-zinc-500">
                    No account?{" "}
                    <Clerk.Link
                      navigate="sign-up"
                      className="font-medium outline-none text-zinc-950 decoration-zinc-950/20 underline-offset-4 hover:text-zinc-700 hover:underline focus-visible:underline"
                    >
                      Create an account
                    </Clerk.Link>
                  </p>
                </SignIn.Step>
                <SignIn.Step name="verifications">
                  <header className="text-center">
                    <h1 className="mt-4 text-xl font-medium tracking-tight text-neutral-950">
                      Verify email code
                    </h1>
                  </header>
                  <Clerk.GlobalError className="block text-sm text-red-600" />
                  <SignIn.Strategy name="email_code">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Check your email</CardTitle>
                        <CardDescription>
                          Enter the verification code sent to your email
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          Welcome back <SignIn.SafeIdentifier />
                        </p>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <Clerk.Field name="code">
                          <Clerk.Label className="sr-only">
                            Email verification code
                          </Clerk.Label>
                          <div className="grid items-center justify-center gap-y-2">
                            <div className="flex justify-center text-center">
                              <Clerk.Input
                                type="otp"
                                autoSubmit
                                className="flex justify-center has-[:disabled]:opacity-50"
                                render={({ value, status }) => {
                                  return (
                                    <div
                                      data-status={status}
                                      className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
                                    >
                                      {value}
                                    </div>
                                  );
                                }}
                              />
                            </div>
                            <Clerk.FieldError className="block text-sm text-center text-destructive" />
                            <SignIn.Action
                              asChild
                              resend
                              className="text-muted-foreground"
                              fallback={({ resendableAfter }) => (
                                <Button variant="link" size="sm" disabled>
                                  Didn&apos;t receive a code? Resend (
                                  <span className="tabular-nums">
                                    {resendableAfter}
                                  </span>
                                  )
                                </Button>
                              )}
                            >
                              <Button variant="link" size="sm">
                                Didn&apos;t receive a code? Resend
                              </Button>
                            </SignIn.Action>
                          </div>
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <Button
                              className="relative flow-root w-full py-2 my-6 hover:bg-primary-red/90 bg-primary-red place-self-center rounded-2xl"
                              disabled={isGlobalLoading}
                            >
                              <Clerk.Loading>
                                {(isLoading) => {
                                  return isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                  ) : (
                                    "Continue"
                                  );
                                }}
                              </Clerk.Loading>
                            </Button>
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Strategy>
                </SignIn.Step>
              </>
            )}
          </Clerk.Loading>
        </div>
      </SignIn.Root>
    </div>
  );
}

export const Logo = () => {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={120} height={120} fill="url(#pattern0_2682_43)" />
      <defs>
        <pattern
          id="pattern0_2682_43"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_2682_43" transform="scale(0.000537634)" />
        </pattern>
      </defs>
    </svg>
  );
};
