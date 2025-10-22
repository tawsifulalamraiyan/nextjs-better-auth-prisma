import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Signin } from "@/lib/actions/auth";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { LockIcon, Mail } from "lucide-react";
import AnimatedCard from "@/components/Card";

export default async function SigninPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex items-center justify-center min-h-screen flex-col">
      <form action={Signin}>
        <AnimatedCard
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Card className="p-10">
            <div className=" flex items-center justify-center gap-2 border border-neutral-800 bgn px-3 py-3 rounded-xl">
              <Mail className=" text-neutral-500" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className=" text-xl outline-none"
              />
            </div>

            <div className=" flex items-center justify-center gap-2 border border-neutral-800 bgn px-3 py-3 rounded-xl">
              <LockIcon className=" text-neutral-500 " size={20} />
              <input
                type="password"
                name="email"
                placeholder="Password"
                className=" outline-none text-xl"
              />
            </div>
            <Button className=" py-5 rounded-full" type="submit">
              Sign in
            </Button>
            <p>
              You have no account? <Link href="/signup">Sign up</Link>
            </p>
          </Card>
        </AnimatedCard>
      </form>
    </main>
  );
}
