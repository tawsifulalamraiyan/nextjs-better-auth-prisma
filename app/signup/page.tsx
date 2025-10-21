import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SignUp } from "@/lib/actions/auth";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
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
        <Card className="p-10 flex flex-col gap-4">
          <Input name="name" placeholder="Full name" />
          <Input name="email" type="email" placeholder="Email address" />
          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Sign up</Button>
        </Card>
      </form>
    </main>
  );
};

export default SignupPage;
