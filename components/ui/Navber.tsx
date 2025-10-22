import React from "react";
import { ModeToggle } from "./Modebtn";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navber = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <>
      <nav className="flex items-center justify-between p-6 border-b sticky top-0 border-neutral-900">
        <h1 className=" text-2xl font-bold">BlaBla blog</h1>
        <ul className=" flex items-center justify-center gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navber;
