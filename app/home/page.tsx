import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <>
      <main className=" flex items-center justify-center min-h-screen flex-col">
        <div className=" mb-7">
          <h1 className=" text-4xl  font-bold">Welcome to BlaBla Blog</h1>
        </div>
        <div className=" flex items-center justify-center gap-4">
          {session ? (
            <Link href={"/dashboard"}>
              <Button className="rounded-full cursor-pointer">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href={"/signin"}>
                <Button className="rounded-full cursor-pointer">
                  Get started
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button className="rounded-full bg-transparent text-white border hover:bg-transparent hover:border-neutral-300 transition">
                  Read docs
                </Button>
              </Link>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default page;
