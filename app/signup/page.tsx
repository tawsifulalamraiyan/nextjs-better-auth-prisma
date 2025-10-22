import AnimatedCard from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { SignUp } from "@/lib/actions/auth";
import { auth } from "@/lib/auth";
import { LockIcon, Mail } from "lucide-react";

import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignupPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }
  return (
    <main className="flex items-center justify-center min-h-screen">
      <form action={SignUp}>
        <AnimatedCard
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Card className="p-10 flex flex-col gap-4 bg-neutral-900">
            <h1 className=" text-xl">
              Create new accout in{" "}
              <span className=" text-zinc-400 font-semibold">BlaBla</span>
            </h1>
            <div className=" flex items-center justify-center gap-2 border border-neutral-800 bgn px-3 py-3 rounded-xl">
              <Mail className=" text-neutral-500" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className=" text-xl outline-none"
              />
            </div>

            <div className=" flex items-center justify-center gap-2 border border-neutral-800 bgn px-3 py-3 rounded-xl">
              <Mail className=" text-neutral-500" size={20} />
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className=" text-xl outline-none"
              />
            </div>

            <div className=" flex items-center justify-center gap-2 border border-neutral-800 bgn px-3 py-3 rounded-xl">
              <LockIcon className=" text-neutral-500 " size={20} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" outline-none text-xl"
              />
            </div>
            <Button className=" py-5 rounded-full" type="submit">
              Sign up
            </Button>
            <p>
              You have no account? <Link href="/signin">Sign in</Link>
            </p>
          </Card>
        </AnimatedCard>
      </form>
    </main>
  );
};

export default SignupPage;
